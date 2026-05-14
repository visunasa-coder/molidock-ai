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

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `You are MoliBot AI, a fast, accurate bioinformatics assistant for MoliDock AI. 
Answer clearly and scientifically. Focus on molecular docking, ADMET, drug discovery, biotechnology, genomics, NGS, proteins, ligands and research support.

User question: ${message}`,
    });

    return res.status(200).json({
      reply: response.output_text,
    });
  } catch (error) {
    return res.status(500).json({
      reply: "MoliBot AI error: API key or server connection problem.",
    });
  }
}