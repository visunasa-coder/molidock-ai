import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        reply: "OPENAI_API_KEY is missing in Vercel Environment Variables.",
      });
    }

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: `You are MoliBot AI, a helpful bioinformatics assistant. Answer clearly and scientifically.

User: ${message}`,
    });

    return res.status(200).json({
      reply: response.output_text,
    });
  } catch (error) {
    return res.status(500).json({
      reply: "MoliBot server error: " + error.message,
    });
  }
}