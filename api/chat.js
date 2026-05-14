export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      reply: "Method not allowed",
    });
  }

  const { message } = req.body;

  let reply = "";

  if (
    message.toLowerCase().includes("next generation sequencing")
  ) {
    reply =
      "Next Generation Sequencing (NGS) is a high-throughput DNA sequencing technology used to rapidly analyze millions of DNA or RNA fragments simultaneously. It is widely used in genomics, cancer research, diagnostics, transcriptomics, and personalized medicine.";
  } else if (
    message.toLowerCase().includes("molecular docking")
  ) {
    reply =
      "Molecular docking predicts how a ligand binds with a target protein to estimate binding affinity and interaction patterns for drug discovery.";
  } else {
    reply =
      "MoliBot AI is still learning. Please ask about molecular docking, ADMET prediction, bioinformatics, proteins, ligands, or sequencing.";
  }

  return res.status(200).json({
    reply,
  });
}