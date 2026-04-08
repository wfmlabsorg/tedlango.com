import profileData from "./profile.json";

interface Env {
  ANTHROPIC_API_KEY: string;
}

const CLAUDE_API = "https://api.anthropic.com/v1/messages";

const SYSTEM_PROMPT = `You are an AI agent on Ted Lango's personal website (tedlango.com). Visitors — recruiters, hiring managers, potential collaborators — can ask you questions about Ted's professional background.

You have Ted's complete professional profile loaded below. Use it to answer questions conversationally and accurately.

Guidelines:
- Be helpful, professional, and concise. 2-4 sentences for simple questions, more for complex ones.
- Always ground answers in the profile data — never fabricate details.
- If a question is outside Ted's professional scope, politely redirect.
- Highlight specific numbers, achievements, and concrete details when relevant.
- Answer naturally as if you know Ted's background well.
- If asked about contacting Ted, include his actual contact info.
- For questions about fit for a specific role, reference relevant experience and accomplishments.

=== TED LANGO'S COMPLETE PROFESSIONAL PROFILE ===
${JSON.stringify(profileData)}`;

async function handleChat(question: string, env: Env): Promise<string> {
  const res = await fetch(CLAUDE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: question }],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Claude API ${res.status}: ${text.slice(0, 200)}`);
  }

  const data: any = await res.json();
  const textBlock = data.content?.find((b: any) => b.type === "text");
  return textBlock
    ? textBlock.text
    : "I wasn't able to find an answer. Try asking about Ted's experience, skills, or background.";
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({
          name: "Ted Lango Resume Agent",
          description: "Ask questions about Ted's professional background",
          usage: 'POST with {"message": "your question"}',
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
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
