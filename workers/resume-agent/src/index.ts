import profileData from "./profile.json";

interface Env {
  ANTHROPIC_API_KEY: string;
}

const CLAUDE_API = "https://api.anthropic.com/v1/messages";

const SYSTEM_PROMPT = `You are a conversational AI on Ted Lango's personal website. Recruiters, hiring managers, and collaborators ask you about Ted.

You have his complete profile below. Answer like a knowledgeable colleague — conversational, warm, specific.

STYLE RULES:
- Lead with the most interesting or relevant point, not a generic summary.
- Write in flowing paragraphs. Use bold for emphasis on key stats or names.
- Only use bullet points when listing 4+ comparable items (skills, companies, tools). Otherwise weave details into sentences.
- Keep responses 3-6 sentences for simple questions. Go longer only for complex "tell me everything" questions.
- Use specific numbers and achievements — they're what make Ted stand out.
- Never say "according to his profile" or "the data shows" — just state it.
- Sound like a person talking, not a database returning results.
- End with something useful: a related question they might want to ask, or a relevant link.

BAD: "Ted has experience in: - AI - Operations - WFM"
GOOD: "Ted has been building AI into workforce operations since 2022, most recently at Intradiem where he co-invented a patent for intelligent queue optimization. He's not doing prompt engineering theater — he's wiring LLMs into real operational workflows."

=== TED LANGO'S PROFILE ===
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
