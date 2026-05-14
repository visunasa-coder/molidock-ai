import React, { useState } from "react";
import pyrxImg from "./assets/pyrx.png";
import interactionImg from "./assets/interaction.png";
import swissadmeImg from "./assets/swissadme.png";
import moleculeImg from "./assets/molecule.png";
export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2 style={styles.logo}>MoliDock AI</h2>
        <nav>
          <a style={styles.navLink} href="#services">Services</a>
          <a style={styles.navLink} href="#pricing">Pricing</a>
          <a style={styles.navLink} href="#about">About</a>
          <a style={styles.navLink} href="#contact">Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
  AI-Powered Molecular Docking & Bioinformatics Services
</h1>
        <p style={styles.heroText}>
  MoliDock AI provides AI-assisted molecular docking, ADMET prediction,
  phytocompound screening, protein-ligand interaction analysis,
  computational drug discovery, and bioinformatics services for
  researchers, biotech startups, and pharmaceutical innovators worldwide.
</p>
        <a href="#contact" style={styles.primaryButton}>Get Project Quote</a>
      </section>

      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.cards}>
          <Card title="Molecular Docking" text="Protein-ligand docking analysis, binding score comparison, and interaction interpretation." />
          <Card title="ADMET Prediction" text="Drug-likeness, BBB permeability, GI absorption, toxicity, and Lipinski rule summary." />
          <Card title="Phytocompound Screening" text="Natural compound shortlisting for disease targets using literature and bioinformatics workflow." />
          <Card title="Protein-Ligand Interaction" text="Hydrogen bond, hydrophobic contact, amino acid interaction, and binding site explanation." />
          <Card title="Drug Target Analysis" text="Disease mechanism study, target protein selection, and research gap identification." />
          <Card title="Scientific Report Writing" text="Clean project reports, tables, figures, and plagiarism-safe scientific explanations." />
        </div>
      </section>

      <section style={styles.darkSection}>
        <h2 style={styles.darkTitle}>Why Choose MoliDock AI?</h2>
        <p style={styles.darkText}>
          We help convert complex biological questions into clear in-silico
          workflows, visual results, and research-ready reports for academic
          and startup projects.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Workflow</h2>
        <div style={styles.steps}>
          <Step number="1" text="Discuss disease, target, and project objective" />
          <Step number="2" text="Collect protein, ligand, and literature data" />
          <Step number="3" text="Run docking / ADMET / screening workflow" />
          <Step number="4" text="Prepare result tables and interaction images" />
          <Step number="5" text="Deliver final report and suggestions" />
        </div>
      </section>

      <section id="pricing" style={styles.sectionLight}>
        <h2 style={styles.sectionTitle}>Pricing</h2>
        <div style={styles.cards}>
          <Card title="Starter — $49+" text="1 protein target, up to 5 ligands, basic docking summary, and PDF report." />
          <Card title="Research — $149+" text="Multiple ligands, ADMET screening, interaction analysis, and detailed research report." />
          <Card title="Startup — Custom" text="For biotech, nutraceutical, and AI-bio startups needing custom screening support." />
        </div>
      </section>
      <section style={styles.sectionLight}>
  <h2 style={styles.sectionTitle}>
    Molecular Docking Services
  </h2>

  <p style={styles.aboutText}>
    MoliDock AI provides AI-assisted molecular docking services for
    researchers, biotech startups, students, and pharmaceutical projects.
    We perform protein-ligand interaction analysis, docking score evaluation,
    phytocompound screening, target protein preparation, and computational
    drug discovery workflows using PyRx, AutoDock Vina, Discovery Studio,
    SwissADME, and PDB databases.
  </p>

  <div style={styles.cards}>
    <Card
      title="Protein-Ligand Docking"
      text="Docking analysis for disease targets and phytocompounds."
    />

    <Card
      title="Binding Interaction Analysis"
      text="2D and 3D interaction visualization using Discovery Studio."
    />

    <Card
      title="ADMET Prediction"
      text="Drug-likeness and pharmacokinetic prediction workflows."
    />

    <Card
      title="Phytocompound Screening"
      text="Computational screening of natural compounds against target proteins."
    />
  </div>
</section>
<section style={styles.sectionLight}>
  <h2 style={styles.sectionTitle}>ADMET Prediction Services</h2>

  <p style={styles.aboutText}>
    MoliDock AI provides ADMET prediction support to evaluate drug-likeness,
    absorption, distribution, metabolism, excretion, toxicity, BBB permeability,
    GI absorption, and Lipinski rule properties using SwissADME and computational
    pharmacokinetic analysis.
  </p>

  <div style={styles.cards}>
    <Card
      title="Drug-Likeness Screening"
      text="Evaluation of Lipinski rule, molecular weight, polarity, and compound suitability."
    />

    <Card
      title="BBB & GI Absorption"
      text="Prediction of blood-brain barrier permeability and gastrointestinal absorption."
    />

    <Card
      title="Toxicity Interpretation"
      text="Scientific explanation of safety-related computational prediction outputs."
    />

    <Card
      title="SwissADME Report"
      text="Clean ADMET tables and report-ready interpretation for research projects."
    />
  </div>
</section>
<section style={styles.section}>
  <h2 style={styles.sectionTitle}>Portfolio & Research Workflow</h2>
<div style={styles.imageGrid}>

  <a href={pyrxImg} target="_blank" rel="noopener noreferrer">
  <img src={pyrxImg} alt="PyRx Docking" style={styles.portfolioImage} />
</a>

  <a href={interactionImg} target="_blank" rel="noopener noreferrer">
  <img src={interactionImg} alt="Interaction Analysis" style={styles.portfolioImage} />
</a>

  <a href={swissadmeImg} target="_blank" rel="noopener noreferrer">
  <img src={swissadmeImg} alt="SwissADME Result" style={styles.portfolioImage} />
</a>

  <a href={moleculeImg} target="_blank" rel="noopener noreferrer">
  <img src={moleculeImg} alt="Molecule Visualization" style={styles.portfolioImage} />
</a>

</div>
  <div style={styles.cards}>

    <Card
      title="PyRx Molecular Docking"
      text="Protein-ligand docking workflows using AutoDock Vina and PyRx for binding affinity prediction."
    />

    <Card
      title="Discovery Studio Analysis"
      text="2D and 3D interaction visualization including hydrogen bonding and active site analysis."
    />

    <Card
      title="SwissADME Prediction"
      text="Drug-likeness, GI absorption, BBB permeability, and pharmacokinetic property analysis."
    />

    <Card
      title="Phytocompound Research"
      text="Natural compound screening and literature-assisted computational drug discovery workflows."
    />

  </div>
</section>
<section style={styles.sectionLight}>
  <h2 style={styles.sectionTitle}>Why Researchers Choose MoliDock AI</h2>

  <div style={styles.cards}>

    <Card
      title="Research-Oriented Workflow"
      text="Structured molecular docking and bioinformatics workflows for academic and startup research projects."
    />

    <Card
      title="AI-Assisted Analysis"
      text="Combination of computational biology tools, literature analysis, and AI-assisted scientific interpretation."
    />

    <Card
      title="Clear Scientific Reports"
      text="Professional reports with docking scores, interaction analysis, ADMET prediction, and publication-style explanations."
    />

    <Card
      title="Global Freelance Support"
      text="Supporting students, researchers, biotech startups, and international clients from India, UAE, UK, and USA."
    />

  </div>
</section>
<section style={styles.sectionLight}>
  <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>

  <div style={styles.cards}>

    <Card
      title="What is molecular docking?"
      text="Molecular docking is a computational method used to predict how a ligand interacts with a target protein for drug discovery and biological research."
    />

    <Card
      title="What software does MoliDock AI use?"
      text="We use PyRx, AutoDock Vina, Discovery Studio, SwissADME, and protein databases such as PDB for bioinformatics workflows."
    />

    <Card
      title="What is ADMET prediction?"
      text="ADMET prediction evaluates absorption, distribution, metabolism, excretion, and toxicity properties of compounds before laboratory studies."
    />

    <Card
      title="Can phytocompounds be screened?"
      text="Yes. We perform phytocompound screening and interaction analysis for disease targets using computational biology approaches."
    />

  </div>
</section>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About MoliDock AI</h2>
        <p style={styles.aboutText}>
          MoliDock AI is a bioinformatics freelancing brand focused on molecular
          docking, ADMET prediction, phytocompound screening, and literature-assisted
          drug discovery support. It is designed for students, researchers, biotech
          startups, and international clients from India, USA, UK, and UAE.
        </p>
      </section>

      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.contactText}>
          Send your disease name, target protein, ligand list, deadline, and expected report format.
        </p>

        <div style={styles.contactBox}>
          <p><b>Email:</b> molidockai@gmail.com</p>
          <p><b>WhatsApp:</b> +91 9791729809</p>
          <p><b>Service Area:</b> India, USA, UK, UAE</p>
        </div>

        <a
  href="https://wa.me/919791729809?text=Hello%20MoliDock%20AI,%20I%20want%20bioinformatics%20service%20details."
  target="_blank"
  rel="noopener noreferrer"
  style={styles.whatsappButton}
>
  WhatsApp Project Enquiry
</a>
      </section>

      <footer style={styles.footer}>
        © 2026 MoliDock AI — AI-Powered Molecular Docking & Bioinformatics Services
      </footer>
      <div
  draggable="true"
  style={styles.floatingWhatsapp}
  onClick={() => setChatOpen(!chatOpen)}
  title="Chat with MoliBot AI"
>
  🤖
</div>

{chatOpen && (
  <div style={styles.chatBox}>
    <h3>MoliBot AI</h3>
    <p>Hello! I can help you with:</p>
    <ul>
      <li>Molecular Docking</li>
      <li>ADMET Prediction</li>
      <li>Protein-Ligand Interaction</li>
      <li>Phytocompound Screening</li>
    </ul>

    <input
  placeholder="Ask MoliBot AI..."
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "10px"
  }}
/>

<button style={styles.primaryButton}>
  Ask MoliBot
</button>
  </div>
)}
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{text}</p>
    </div>
  );
}

function Step({ number, text }) {
  return (
    <div style={styles.step}>
      <div style={styles.stepNumber}>{number}</div>
      <p>{text}</p>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f8fb",
    color: "#111827",
    minHeight: "100vh",
    position: "relative",
overflowX: "hidden",
  },
  header: {
    backgroundColor: "#0f172a",
    color: "white",
    padding: "18px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },
  logo: {
    margin: 0,
    fontSize: "26px"
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    marginLeft: "18px",
    fontWeight: "bold"
  },
  
  heroTitle: {
  fontSize: "72px",
  maxWidth: "1000px",
  margin: "0 auto 30px",
  color: "#0f172a",
  lineHeight: "1.15",
  fontWeight: "bold"
},
  hero: {
  textAlign: "center",
  padding: "140px 30px",
  background: "linear-gradient(135deg, #dbeafe, #eff6ff, #e0f2fe)"
},
  primaryButton: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "15px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block"
  },
  section: {
    padding: "65px 35px"
  },
  sectionLight: {
    padding: "65px 35px",
    backgroundColor: "#ffffff"
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "35px",
    color: "#0f172a"
  },
  cards: {
    display: "flex",
    gap: "22px",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "white",
    width: "310px",
    padding: "28px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(15, 23, 42, 0.12)",
    border: "1px solid #e5e7eb"
  },
  cardTitle: {
    fontSize: "22px",
    color: "#1d4ed8",
    marginBottom: "12px"
  },
  cardText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#475569"
  },
  darkSection: {
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "65px 35px"
  },
  darkTitle: {
    fontSize: "36px",
    marginBottom: "20px"
  },
  darkText: {
    maxWidth: "850px",
    margin: "0 auto",
    fontSize: "19px",
    lineHeight: "1.7",
    color: "#cbd5e1"
  },
  steps: {
    maxWidth: "850px",
    margin: "0 auto",
    display: "grid",
    gap: "18px"
  },
  step: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },
  stepNumber: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  aboutText: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#334155"
  },
  contact: {
    padding: "65px 35px",
    backgroundColor: "#e0f2fe",
    textAlign: "center"
  },
  contactText: {
    fontSize: "18px",
    color: "#334155"
  },
  contactBox: {
    backgroundColor: "white",
    maxWidth: "520px",
    margin: "25px auto",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "left"
  },
  floatingWhatsapp: {
  position: "fixed",
  bottom: "90px",
  right: "35px",
  backgroundColor: "#2563eb",
  color: "white",
  borderRadius: "50%",
  width: "70px",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "34px",
  textDecoration: "none",
  boxShadow: "0 8px 22px rgba(37, 99, 235, 0.45)",
  zIndex: 99999,
  cursor: "grab"
},
chatBox: {
  position: "fixed",
  bottom: "170px",
  right: "35px",
  width: "300px",
  backgroundColor: "white",
  borderRadius: "18px",
  padding: "22px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  zIndex: 99999,
  border: "1px solid #e5e7eb"
},
  whatsappButton: {
    backgroundColor: "#16a34a",
    color: "white",
    padding: "14px 25px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  imageGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "20px",
  marginBottom: "40px"
},
  portfolioImage: {
  width: "100%",
  height: "260px",
  objectFit: "cover",
  borderRadius: "16px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.15)"
},

  footer: {
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "22px"
  }
}