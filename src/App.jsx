import React, { useState } from "react";
import pyrxImg from "./assets/pyrx.png";
import interactionImg from "./assets/interaction.png";
import swissadmeImg from "./assets/swissadme.png";
import moleculeImg from "./assets/molecule.png";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
const [sentMessage, setSentMessage] = useState("");
const [reply, setReply] = useState("");
const [loading, setLoading] = useState(false);

const askMoliBot = async () => {
  if (!message.trim()) return;

  setSentMessage(message);
  setReply("");
  setLoading(true);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    setReply(data.reply || "No reply received.");
    setMessage("");
  } catch (error) {
    setReply("MoliBot connection error. Please check API deployment.");
  }

  setLoading(false);
};

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
          computational drug discovery, and bioinformatics services.
        </p>
        <a href="#contact" style={styles.primaryButton}>Get Project Quote</a>
      </section>

      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.cards}>
          <Card title="Molecular Docking" text="Protein-ligand docking analysis and binding score interpretation." />
          <Card title="ADMET Prediction" text="Drug-likeness, BBB permeability, GI absorption and Lipinski rule summary." />
          <Card title="Phytocompound Screening" text="Natural compound screening for disease targets." />
          <Card title="Protein-Ligand Interaction" text="Hydrogen bond and amino acid interaction analysis." />
          <Card title="Drug Target Analysis" text="Disease target protein selection and research support." />
          <Card title="Scientific Report Writing" text="Clean reports with tables, figures and explanations." />
        </div>
      </section>

      <section style={styles.darkSection}>
        <h2 style={styles.darkTitle}>Why Choose MoliDock AI?</h2>
        <p style={styles.darkText}>
          We convert complex biological questions into clear in-silico workflows,
          visual results, and research-ready reports.
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
          <Card title="Research — $149+" text="Multiple ligands, ADMET screening, interaction analysis, and detailed report." />
          <Card title="Startup — Custom" text="For biotech, nutraceutical, and AI-bio startups needing custom support." />
        </div>
      </section>

      <section style={styles.sectionLight}>
        <h2 style={styles.sectionTitle}>Molecular Docking Services</h2>
        <p style={styles.aboutText}>
          We perform protein-ligand docking, interaction analysis, docking score
          evaluation, phytocompound screening, target preparation and computational
          drug discovery workflows using PyRx, Discovery Studio, SwissADME, PubChem and PDB.
        </p>
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
      </section>

      <section style={styles.sectionLight}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div style={styles.cards}>
          <Card title="What is molecular docking?" text="Molecular docking predicts how a ligand binds with a target protein." />
          <Card title="What software does MoliDock AI use?" text="PyRx, AutoDock Vina, Discovery Studio, SwissADME, PubChem and PDB." />
          <Card title="What is ADMET prediction?" text="ADMET evaluates absorption, distribution, metabolism, excretion and toxicity." />
          <Card title="Can phytocompounds be screened?" text="Yes, natural compounds can be screened against disease targets." />
        </div>
      </section>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About MoliDock AI</h2>
        <p style={styles.aboutText}>
          MoliDock AI is a bioinformatics freelancing brand focused on molecular
          docking, ADMET prediction, phytocompound screening, and AI-assisted
          research support.
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
          <div style={styles.chatHeader}>MoliBot AI</div>

          <div style={styles.chatMessages}>
            {sentMessage && <div style={styles.userMessage}>{sentMessage}</div>}

{loading && <div style={styles.botMessage}>Thinking...</div>}

{reply && <div style={styles.botMessage}>{reply}</div>}
          </div>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask MoliBot AI..."
            style={styles.chatInput}
          />

          <button onClick={askMoliBot} style={styles.primaryButton}>
            Send
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
    flexWrap: "wrap",
  },
  logo: {
    margin: 0,
    fontSize: "26px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    marginLeft: "18px",
    fontWeight: "bold",
  },
  hero: {
    textAlign: "center",
    padding: "140px 30px",
    background: "linear-gradient(135deg, #dbeafe, #eff6ff, #e0f2fe)",
  },
  heroTitle: {
    fontSize: "64px",
    maxWidth: "1000px",
    margin: "0 auto 30px",
    color: "#0f172a",
    lineHeight: "1.15",
    fontWeight: "bold",
  },
  heroText: {
    maxWidth: "900px",
    margin: "0 auto 30px",
    fontSize: "19px",
    lineHeight: "1.7",
    color: "#334155",
  },
  primaryButton: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "15px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
    border: "none",
    cursor: "pointer",
  },
  section: {
    padding: "65px 35px",
  },
  sectionLight: {
    padding: "65px 35px",
    backgroundColor: "#ffffff",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "35px",
    color: "#0f172a",
  },
  cards: {
    display: "flex",
    gap: "22px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    width: "310px",
    padding: "28px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(15, 23, 42, 0.12)",
    border: "1px solid #e5e7eb",
  },
  cardTitle: {
    fontSize: "22px",
    color: "#1d4ed8",
    marginBottom: "12px",
  },
  cardText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#475569",
  },
  darkSection: {
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "65px 35px",
  },
  darkTitle: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  darkText: {
    maxWidth: "850px",
    margin: "0 auto",
    fontSize: "19px",
    lineHeight: "1.7",
    color: "#cbd5e1",
  },
  steps: {
    maxWidth: "850px",
    margin: "0 auto",
    display: "grid",
    gap: "18px",
  },
  step: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
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
    fontWeight: "bold",
  },
  aboutText: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#334155",
  },
  contact: {
    padding: "65px 35px",
    backgroundColor: "#e0f2fe",
    textAlign: "center",
  },
  contactText: {
    fontSize: "18px",
    color: "#334155",
  },
  contactBox: {
    backgroundColor: "white",
    maxWidth: "520px",
    margin: "25px auto",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  whatsappButton: {
    backgroundColor: "#16a34a",
    color: "white",
    padding: "14px 25px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  portfolioImage: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
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
    cursor: "pointer",
  },
  chatBox: {
    position: "fixed",
    bottom: "170px",
    right: "35px",
    width: "320px",
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    zIndex: 99999,
    border: "1px solid #e5e7eb",
  },
  chatHeader: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
    textAlign: "center",
  },
  chatMessages: {
    minHeight: "160px",
    maxHeight: "260px",
    overflowY: "auto",
    marginBottom: "12px",
  },
  userMessage: {
    backgroundColor: "#e5e7eb",
    padding: "10px",
    borderRadius: "12px",
    marginBottom: "10px",
    maxWidth: "85%",
    textAlign: "left",
  },
  botMessage: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "10px",
    borderRadius: "12px",
    marginBottom: "10px",
    maxWidth: "85%",
    marginLeft: "auto",
    textAlign: "left",
  },
  chatInput: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    boxSizing: "border-box",
  },
  footer: {
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "22px",
  },
};