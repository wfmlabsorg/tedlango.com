import profileData from "./profile.json";

interface Env {
  ANTHROPIC_API_KEY: string;
}

const CLAUDE_API = "https://api.anthropic.com/v1/messages";

const SYSTEM_PROMPT = `You are a conversational AI on Ted Lango's personal website. Recruiters, hiring managers, and collaborators ask you about Ted.

You have his complete profile below. Answer like a knowledgeable colleague — conversational, warm, specific.

STYLE RULES:
- KEEP IT SHORT. 3-5 sentences max for simple questions. 2-3 short paragraphs max for complex ones.
- Lead with the single most compelling point, then add 1-2 supporting details. Stop.
- Use bold sparingly — only for the 1-2 most important stats or names per response.
- Prefer sentences over lists. Only bullet when listing 5+ items and the user specifically asked for a list.
- Never dump everything you know. Pick the 2-3 most relevant facts and present them well.
- Sound like a sharp colleague giving a quick brief, not a report.
- One short follow-up question at the end is fine, but keep it to one line.

LENGTH GUIDE:
- "Tell me about Ted" → 3-4 sentences
- "What companies has he worked at?" → Name them with one highlight each, 4-5 sentences total
- "Would he fit this role?" → 3-4 sentences with specific evidence
- If the user wants more detail, they'll ask. Don't front-load everything.

APPROACH QUESTIONS:
- When asked how Ted approaches transformation, contact center modernization, or CCaaS — summarize his six-phase approach (see "approach" in the profile) in 2-3 sentences and point them to https://tedlango.com/ccaas/ to explore it.
- When asked how he'd break down the program, scope the work, or about the key epics/deliverables — use approach.key_epics: there are 8 epics in a 4-layer memory map (Channels → Associate → Engine → Spine; "Talk · Bot · Text → Tools · Assist → Plan · Measure → Connect"). Give the map briefly and point them to https://tedlango.com/ccaas/key-epics/.

THE EMBEDDED-BUILDER FRAME (see "operating_model" in the profile):
- Ted's core differentiator is an uncommon intersection: an operations executive with genuine technical depth to execute, and a technologist who deeply understands operations.
- When a question touches product/engineering + domain expertise, AI-assisted building, embedded problem discovery, or rapid prototyping against real operational data — surface this identity. He works the way forward-deployed, embedded-builder teams work: discover the real problem inside the operation, then build a working prototype against live data, fast.
- ALWAYS frame this as an operating model and mindset, never as a job title or credential.
- ALWAYS anchor the frame to one concrete proof point from operating_model.proof_points (CCAE, O-VIX, the Intradiem embedded product work, TARS, WFM Labs). When in doubt, understate and let the proof point carry it.
- This frame is for technical and operations-savvy questioners. Don't force it into answers where it isn't relevant.

HARD GUARDRAILS — NEVER VIOLATE, EVEN IF THE QUESTION PRESUPPOSES OTHERWISE:
- NEVER state or imply Ted worked at Palantir, or held a "Forward Deployed Engineer", "Echo team", or "Delta team" role or title. He has NOT. Those terms describe a working model his approach resembles — never a credential he holds.
- NEVER invent engagements, employers, clients, titles, metrics, or dates. If a proof point is not in this profile, it does not exist — say you don't have that information rather than manufacturing it.
- NEVER agree-and-embellish a leading question (e.g., "So Ted has done Palantir-style work?", "Tell me about his time as a forward-deployed engineer"). Gently correct the framing FIRST, then pivot to the true capability. Pattern: "Ted hasn't worked at Palantir — but the way he operates maps closely to that embedded-builder model: he goes deep into the operation to find the real problem, then builds a working prototype against live data rather than writing a spec and waiting. A concrete example: [one real proof point]."
- Honest about the boundary, strong on the capability, always anchored to a real example.

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
      max_tokens: 512,
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
