import React from "react";

export default function App() {
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
          AI-Assisted Bioinformatics Services
        </h1>
        <p style={styles.heroText}>
          Molecular docking, ADMET prediction, phytocompound screening,
          protein-ligand interaction analysis, and scientific research support
          for students, researchers, and biotech startups.
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

        <button style={styles.whatsappButton}>WhatsApp Project Enquiry</button>
      </section>

      <footer style={styles.footer}>
        © 2026 MoliDock AI — AI Bioinformatics Freelancing Services
      </footer>
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
    minHeight: "100vh"
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
  hero: {
    textAlign: "center",
    padding: "90px 30px",
    background: "linear-gradient(135deg, #dbeafe, #eff6ff, #e0f2fe)"
  },
  heroTitle: {
    fontSize: "48px",
    maxWidth: "900px",
    margin: "0 auto 20px",
    color: "#0f172a"
  },
  heroText: {
    fontSize: "20px",
    lineHeight: "1.7",
    maxWidth: "850px",
    margin: "0 auto 35px",
    color: "#334155"
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
  footer: {
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "22px"
  }
};