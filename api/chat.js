export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      reply: "Method not allowed",
    });
  }

  const { message } = req.body;

  const msg = message.toLowerCase();

  let reply = "";

  if (msg.includes("molecular docking")) {
    reply =
      "Molecular docking predicts how a ligand binds to a protein target and estimates binding affinity.";
  } else if (msg.includes("ngs")) {
    reply =
      "Next Generation Sequencing (NGS) is a high-throughput DNA sequencing technology used in genomics and precision medicine.";
  } else if (msg.includes("admet")) {
    reply =
      "ADMET refers to Absorption, Distribution, Metabolism, Excretion, and Toxicity analysis in drug discovery.";
  } else if (msg.includes("protein")) {
    reply =
      "Proteins are biological macromolecules made of amino acids and are important drug targets.";
  } else if (msg.includes("ligand")) {
    reply =
      "A ligand is a molecule that binds with a receptor or protein target.";
  } else {
    reply =
      "MoliBot AI is currently running in free local mode. OpenAI live AI will be enabled later.";
  }

  return res.status(200).json({ reply });
}