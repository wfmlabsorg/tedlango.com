import Anthropic from "@anthropic-ai/sdk";

interface Env {
  ANTHROPIC_API_KEY: string;
}

const RESUME_API = "https://living-resume-api.tedlango.workers.dev";

const TOOLS: Anthropic.Tool[] = [
  {
    name: "query_resume",
    description:
      "Query Ted Lango's Living Resume API. Use this to answer any question about Ted's background, experience, skills, goals, or professional profile. Available endpoints: /about (identity & philosophy), /thesis (core thesis), /narrative (professional story), /mission, /problems, /goals, /models, /beliefs, /experience (career timeline), /accomplishments (quantified achievements), /track-record (key stats like $50M+ savings), /skills (full taxonomy), /education, /publications (book, patents, newsletter), /seeking (job search params), /cultural-fit (work preferences), /offer (what Ted brings), /contact, /recruiter-summary (condensed profile), /availability, /resources (tools & frameworks built).",
    input_schema: {
      type: "object" as const,
      properties: {
        endpoint: {
          type: "string",
          description:
            "The API endpoint to query, e.g. '/experience', '/skills', '/about'. Choose the endpoint most relevant to the user's question. You can call this tool multiple times with different endpoints.",
        },
      },
      required: ["endpoint"],
    },
  },
];

const SYSTEM_PROMPT = `You are an AI agent on Ted Lango's personal website (tedlango.com). Visitors — recruiters, hiring managers, potential collaborators — can ask you questions about Ted's professional background.

Your job: answer questions about Ted by querying his Living Resume API. Use the query_resume tool to fetch real data, then give a concise, conversational answer.

Guidelines:
- Be helpful, professional, and concise. 2-4 sentences for simple questions, more for complex ones.
- Always ground answers in actual API data — never fabricate details.
- If a question is outside Ted's professional scope, politely redirect.
- You can query multiple endpoints to build a complete answer.
- Highlight specific numbers, achievements, and concrete details when relevant.
- Don't say "according to the API" — just answer naturally as if you know Ted's background.
- If asked about contacting Ted, include his actual contact info from the API.`;

async function fetchResumeEndpoint(endpoint: string): Promise<string> {
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const res = await fetch(`${RESUME_API}${path}`);
  if (!res.ok) return JSON.stringify({ error: `Endpoint ${path} returned ${res.status}` });
  const json = await res.json();
  return JSON.stringify((json as any).data || json);
}

async function handleChat(question: string, env: Env): Promise<string> {
  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });

  let messages: Anthropic.MessageParam[] = [{ role: "user", content: question }];

  // Initial call — Claude decides which tools to use
  let response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    tools: TOOLS,
    messages,
  });

  // Tool use loop — execute tool calls and feed results back
  while (response.stop_reason === "tool_use") {
    const assistantContent = response.content;
    messages.push({ role: "assistant", content: assistantContent });

    const toolResults: Anthropic.ToolResultBlockParam[] = [];
    for (const block of assistantContent) {
      if (block.type === "tool_use") {
        const input = block.input as { endpoint: string };
        const result = await fetchResumeEndpoint(input.endpoint);
        toolResults.push({ type: "tool_result", tool_use_id: block.id, content: result });
      }
    }

    messages.push({ role: "user", content: toolResults });

    response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages,
    });
  }

  // Extract text response
  const textBlock = response.content.find((b) => b.type === "text");
  return textBlock ? textBlock.text : "I wasn't able to find an answer. Try asking about Ted's experience, skills, or background.";
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "POST required" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    try {
      const body = (await request.json()) as { message?: string };
      const question = body.message?.trim();

      if (!question) {
        return new Response(JSON.stringify({ error: "message is required" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Rate limit by keeping it simple — 500 char max question
      if (question.length > 500) {
        return new Response(JSON.stringify({ error: "Question too long (500 char max)" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const answer = await handleChat(question, env);

      return new Response(JSON.stringify({ response: answer }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (err: any) {
      return new Response(JSON.stringify({ error: "Something went wrong. Try again." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};
