import React, { useState } from "react";

import pyrxImg from "./assets/pyrx.png";
import interactionImg from "./assets/interaction.png";
import swissadmeImg from "./assets/swissadme.png";
import moleculeImg from "./assets/molecule.png";
import logoImg from "./assets/logo.jpg";

import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

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
      setReply(
        "MoliBot connection error. Please check API deployment."
      );
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>
  <img
    src={logoImg}
    alt="MoliDock AI Logo"
    style={styles.logoImage}
  />
</div>

        <nav>
          <a style={styles.navLink} href="#services">
            Services
          </a>

          <a style={styles.navLink} href="#pricing">
            Pricing
          </a>

          <a style={styles.navLink} href="#about">
            About
          </a>

          <a style={styles.navLink} href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Engineering The Future Of Drug Discovery
        </h1>

        <p style={styles.heroText}>
          Advanced AI-powered molecular docking, ADMET prediction,
          protein-ligand interaction analysis, and computational
          bioinformatics solutions for researchers, startups,
          and biotech innovation.
        </p>

        <a href="#contact" style={styles.primaryButton}>
          Get Project Quote
        </a>
      </section>

      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>

        <div style={styles.cards}>
          <Card
            title="Molecular Docking"
            text="Protein-ligand docking analysis and binding score interpretation."
          />

          <Card
            title="ADMET Prediction"
            text="Drug-likeness, BBB permeability, GI absorption and Lipinski rule summary."
          />

          <Card
            title="Phytocompound Screening"
            text="Natural compound screening for disease targets."
          />

          <Card
            title="Protein-Ligand Interaction"
            text="Hydrogen bond and amino acid interaction analysis."
          />

          <Card
            title="Drug Target Analysis"
            text="Disease target protein selection and research support."
          />

          <Card
            title="Scientific Report Writing"
            text="Clean reports with tables, figures and explanations."
          />
        </div>
      </section>

      <section style={styles.darkSection}>
        <h2 style={styles.darkTitle}>
          Why Choose MoliDock AI?
        </h2>

        <p style={styles.darkText}>
          We convert complex biological questions into clear
          in-silico workflows, visual results, and research-ready
          reports.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Workflow</h2>

        <div style={styles.steps}>
          <Step
            number="1"
            text="Discuss disease, target, and project objective"
          />

          <Step
            number="2"
            text="Collect protein, ligand, and literature data"
          />

          <Step
            number="3"
            text="Run docking / ADMET / screening workflow"
          />

          <Step
            number="4"
            text="Prepare result tables and interaction images"
          />

          <Step
            number="5"
            text="Deliver final report and suggestions"
          />
        </div>
      </section>

      <section id="pricing" style={styles.sectionLight}>
        <h2 style={styles.sectionTitle}>Pricing</h2>

        <div style={styles.cards}>
          <Card
            title="Starter — $49+"
            text="1 protein target, up to 5 ligands, docking summary and PDF report."
          />

          <Card
            title="Research — $149+"
            text="Multiple ligands, ADMET screening, interaction analysis and detailed report."
          />

          <Card
            title="Startup — Custom"
            text="For biotech, nutraceutical and AI-bio startups needing custom support."
          />
        </div>
      </section>

      <section style={styles.sectionLight}>
        <h2 style={styles.sectionTitle}>
          Molecular Docking Services
        </h2>

        <p style={styles.aboutText}>
          We perform protein-ligand docking, interaction analysis,
          docking score evaluation, phytocompound screening,
          target preparation and computational drug discovery
          workflows using PyRx, Discovery Studio, SwissADME,
          PubChem and PDB.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Portfolio & Research Workflow
        </h2>

        <div style={styles.imageGrid}>
          <img
            src={pyrxImg}
            alt="PyRx Docking"
            style={styles.portfolioImage}
          />

          <img
            src={interactionImg}
            alt="Interaction Analysis"
            style={styles.portfolioImage}
          />

          <img
            src={swissadmeImg}
            alt="SwissADME"
            style={styles.portfolioImage}
          />

          <img
            src={moleculeImg}
            alt="Molecule"
            style={styles.portfolioImage}
          />
        </div>
      </section>

      <section id="about" style={styles.sectionLight}>
        <h2 style={styles.sectionTitle}>About MoliDock AI</h2>

        <p style={styles.aboutText}>
          MoliDock AI is a bioinformatics freelancing brand focused
          on molecular docking, ADMET prediction,
          phytocompound screening, and AI-assisted
          research support.
        </p>
      </section>

      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>

        <p style={styles.contactText}>
          Send your disease name, target protein, ligand list,
          deadline, and expected report format.
        </p>

        <div style={styles.contactBox}>
          <p>
            <b>Email:</b> molidockai@gmail.com
          </p>

          <p>
            <b>WhatsApp:</b> +91 9791729809
          </p>

          <p>
            <b>Service Area:</b> India, USA, UK, UAE
          </p>
        </div>

        <div style={styles.socialButtons}>
          <a
            href="https://wa.me/919791729809"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialButton}
          >
            <FaWhatsapp size={24} />
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in//vishal-m-2533aa40b/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialButton}
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/molidock_ai"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialButton}
          >
            <FaInstagram size={24} />
            Instagram
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 MoliDock AI — AI-Powered Molecular Docking &
        Bioinformatics Services
      </footer>

      <div
        style={styles.floatingBot}
        onClick={() => setChatOpen(!chatOpen)}
      >
        🤖
      </div>

      {chatOpen && (
        <div style={styles.chatBox}>
          <div style={styles.chatHeader}>MoliBot AI</div>

          <div style={styles.chatMessages}>
            {sentMessage && (
              <div style={styles.userMessage}>
                {sentMessage}
              </div>
            )}

            {loading && (
              <div style={styles.botMessage}>Thinking...</div>
            )}

            {reply && (
              <div style={styles.botMessage}>{reply}</div>
            )}
          </div>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask MoliBot AI..."
            style={styles.chatInput}
          />

          <button
            onClick={askMoliBot}
            style={styles.primaryButton}
          >
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
    fontFamily: "'Segoe UI', Arial, sans-serif",
    backgroundColor: "#061826",
    color: "#ffffff",
    minHeight: "100vh",
    overflowX: "hidden",
  },

  header: {
    backgroundColor: "rgba(6,24,38,0.92)",
    padding: "18px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    borderBottom: "1px solid rgba(57,208,255,0.18)",
    backdropFilter: "blur(14px)",
position: "sticky",
top: 0,
zIndex: 999,
  },

  brand: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},
  logoImage: {
  width: "85px",
  height: "85px",
  objectFit: "contain",
  filter: "drop-shadow(0 0 18px rgba(57,208,255,0.45))",
},
  logo: {
    margin: 0,
    fontSize: "28px",
    color: "#39d0ff",
    letterSpacing: "1px",
  },

  navLink: {
    color: "#ffffff",
    textDecoration: "none",
    marginLeft: "18px",
    fontWeight: "bold",
  },

  hero: {
    textAlign: "center",
    padding: "140px 30px",
    background:
      "radial-gradient(circle at top, #0b3a5a, #061826 60%)",
  },

  heroTitle: {
    fontSize: "62px",
    maxWidth: "1000px",
    margin: "0 auto 30px",
    color: "#ffffff",
    lineHeight: "1.15",
    fontWeight: "bold",
    textShadow: "0 0 18px rgba(57,208,255,0.35)",
  },

  heroText: {
    maxWidth: "900px",
    margin: "0 auto 30px",
    fontSize: "19px",
    lineHeight: "1.7",
    color: "#b7c9d9",
  },

  primaryButton: {
    background: "linear-gradient(90deg,#39d0ff,#4f8cff)",
    color: "#061826",
    padding: "15px 28px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 22px rgba(57,208,255,0.35)",
  },

  section: {
    padding: "70px 35px",
  },

  sectionLight: {
    padding: "70px 35px",
    backgroundColor: "#081c2f",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "38px",
    marginBottom: "35px",
    color: "#ffffff",
  },

  cards: {
    display: "flex",
    gap: "22px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    width: "310px",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
    border: "1px solid rgba(57,208,255,0.18)",
    backdropFilter: "blur(10px)",
    transition: "0.3s ease",
  },

  cardTitle: {
    fontSize: "22px",
    color: "#39d0ff",
    marginBottom: "12px",
  },

  cardText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#b7c9d9",
  },

  darkSection: {
    backgroundColor: "#081c2f",
    textAlign: "center",
    padding: "70px 35px",
  },

  darkTitle: {
    fontSize: "38px",
    marginBottom: "20px",
  },

  darkText: {
    maxWidth: "850px",
    margin: "0 auto",
    fontSize: "19px",
    lineHeight: "1.7",
    color: "#b7c9d9",
  },

  steps: {
    maxWidth: "850px",
    margin: "0 auto",
    display: "grid",
    gap: "18px",
  },

  step: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    border: "1px solid rgba(57,208,255,0.15)",
  },

  stepNumber: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: "#39d0ff",
    color: "#061826",
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
    color: "#b7c9d9",
  },

  contact: {
    padding: "70px 35px",
    backgroundColor: "#061826",
    textAlign: "center",
  },

  contactText: {
    fontSize: "18px",
    color: "#b7c9d9",
  },

  contactBox: {
    background: "rgba(255,255,255,0.05)",
    maxWidth: "520px",
    margin: "25px auto",
    padding: "25px",
    borderRadius: "16px",
    border: "1px solid rgba(57,208,255,0.18)",
    textAlign: "left",
  },

  socialButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  socialButton: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background:
      "linear-gradient(90deg,#39d0ff,#4f8cff)",
    color: "#061826",
    padding: "14px 24px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 0 20px rgba(57,208,255,0.25)",
    transition: "0.3s ease",
  },

  imageGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
  },

  portfolioImage: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "16px",
    border: "1px solid rgba(57,208,255,0.18)",
  },

  floatingBot: {
    position: "fixed",
    bottom: "90px",
    right: "35px",
    background:
      "linear-gradient(90deg,#39d0ff,#4f8cff)",
    color: "#061826",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "34px",
    boxShadow: "0 8px 22px rgba(57,208,255,0.45)",
    zIndex: 99999,
    cursor: "pointer",
  },

  chatBox: {
    position: "fixed",
    bottom: "170px",
    right: "35px",
    width: "320px",
    backgroundColor: "#081c2f",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    zIndex: 99999,
    border: "1px solid rgba(57,208,255,0.18)",
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
    backgroundColor: "#12324d",
    padding: "10px",
    borderRadius: "12px",
    marginBottom: "10px",
    maxWidth: "85%",
    textAlign: "left",
  },

  botMessage: {
    backgroundColor: "#39d0ff",
    color: "#061826",
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
    border: "1px solid rgba(57,208,255,0.25)",
    marginBottom: "10px",
    boxSizing: "border-box",
    backgroundColor: "#102942",
    color: "#ffffff",
  },

  footer: {
    backgroundColor: "#081c2f",
    color: "#ffffff",
    textAlign: "center",
    padding: "22px",
    borderTop: "1px solid rgba(57,208,255,0.18)",
  },
};