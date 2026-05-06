import React from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #d4d4d4;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 28px 12px;
    min-height: 100vh;
  }

  .resume-page {
    width: 210mm;
    background: #ffffff;
    padding: 12mm 14mm 10mm 14mm;
    color: #0a0a0a;
    font-family: 'EB Garamond', serif;
    font-size: 9.4pt;
    line-height: 1.55;
    box-shadow: 0 6px 48px rgba(0,0,0,.18);
  }

  /* HEADER */
  .resume-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 7px;
    border-bottom: 2px solid #0a0a0a;
    margin-bottom: 9px;
  }
  .resume-name {
    font-family: 'Syne', sans-serif;
    font-size: 28pt;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1;
    text-transform: uppercase;
  }
  .resume-role {
    font-family: 'DM Mono', monospace;
    font-size: 7pt;
    letter-spacing: 0.18em;
    color: #666;
    text-transform: uppercase;
    margin-top: 3px;
  }
  .contact-bar {
    text-align: right;
    font-family: 'DM Mono', monospace;
    font-size: 7pt;
    color: #444;
    line-height: 1.8;
    letter-spacing: 0.03em;
  }
  .contact-bar a {
    color: #444;
    text-decoration: none;
    border-bottom: 0.5px solid #ccc;
  }

  /* SECTION */
  .section { margin-bottom: 9px; }
  .section-label {
    font-family: 'Syne', sans-serif;
    font-size: 6.8pt;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    padding-bottom: 3px;
    border-bottom: 0.75px solid #ccc;
    margin-bottom: 5px;
  }

  /* SUMMARY */
  .summary-text {
    font-size: 9.6pt;
    color: #3a3a3a;
    font-style: italic;
    line-height: 1.6;
  }

  /* SKILLS */
  .skills-grid {
    display: grid;
    grid-template-columns: 78px 1fr;
    row-gap: 3px;
    column-gap: 10px;
  }
  .skill-cat {
    font-family: 'DM Mono', monospace;
    font-size: 6.8pt;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: #888;
    text-transform: uppercase;
    padding-top: 1px;
  }
  .skill-val {
    font-size: 9pt;
    color: #111;
    line-height: 1.55;
  }

  /* PROJECTS */
  .project { margin-bottom: 8px; }
  .project:last-child { margin-bottom: 0; }
  .project-header {
    display: flex;
    align-items: baseline;
    gap: 7px;
    margin-bottom: 2px;
  }
  .project-name {
    font-family: 'Syne', sans-serif;
    font-size: 10.2pt;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
  .project-pipe { color: #ccc; font-weight: 300; font-size: 10pt; }
  .project-tag {
    font-family: 'DM Mono', monospace;
    font-size: 6.8pt;
    color: #888;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .project-desc {
    font-size: 9.1pt;
    color: #3a3a3a;
    line-height: 1.55;
    margin-bottom: 3px;
  }
  .project-features { list-style: none; margin-bottom: 3px; }
  .project-features li {
    font-size: 9pt;
    color: #3a3a3a;
    padding-left: 13px;
    position: relative;
    line-height: 1.5;
  }
  .project-features li::before {
    content: "—";
    position: absolute;
    left: 0;
    color: #ccc;
    font-weight: 300;
  }
  .tech-stack {
    font-family: 'DM Mono', monospace;
    font-size: 7pt;
    color: #888;
    letter-spacing: 0.06em;
  }
  .tech-stack strong { color: #444; font-weight: 500; }

  .thin-rule { border: none; border-top: 0.5px solid #e0e0e0; margin: 6px 0; }

  /* LOWER */
  .lower-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 20px;
  }
  .exp-note {
    font-size: 9.2pt;
    color: #3a3a3a;
    font-style: italic;
    line-height: 1.6;
  }
  .avail-badge {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 6.6pt;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #888;
    border: 0.75px solid #ccc;
    padding: 1px 6px;
    margin-top: 4px;
  }
  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .edu-degree { font-size: 9.3pt; font-weight: 600; }
  .edu-year {
    font-family: 'DM Mono', monospace;
    font-size: 7.2pt;
    color: #888;
  }
  .edu-institution { font-size: 9pt; color: #3a3a3a; margin-top: 1px; }

  @media print {
    body { background: white; padding: 0; }
    .resume-page { box-shadow: none; }
  }
`;

const skills = [
  {
    cat: "Frontend",
    val: "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS, DaisyUI, Framer Motion, Responsive Design",
  },
  {
    cat: "Backend",
    val: "Node.js, Express.js, MongoDB, Better Auth, REST API",
  },
  {
    cat: "Tools",
    val: "Git, GitHub, Vercel, VS Code, Figma",
  },
];

const projects = [
  {
    name: "SkillSphere",
    tag: "Online Learning Platform",
    desc: "Engineered a modern online learning platform featuring secure authentication, protected routes, a responsive UI, and dynamic course detail pages. Architected with Next.js App Router for optimal performance and SEO.",
    features: [
      "Secure user authentication and session management via Better Auth",
      "Protected routes with role-based access control",
      "Dynamic, server-rendered course pages for SEO and performance",
      "Fully responsive and accessible modern UI with Tailwind CSS",
    ],
    stack: "Next.js · Tailwind CSS · MongoDB · Better Auth",
  },
  {
    name: "Dragon News",
    tag: "Dynamic News Application",
    desc: "Built a dynamic news application with category-based filtering, REST API integration, a responsive design system, and user authentication — delivering a seamless content experience across all devices.",
    features: [
      "Category-wise dynamic news feeds with real-time API data fetching",
      "Secure login and registration system with Firebase Auth",
      "Responsive layout with dedicated article detail pages",
      "Optimized component architecture for fast re-renders",
    ],
    stack: "React.js · Tailwind CSS · Firebase Auth · REST API",
  },
  {
    name: "Personal Portfolio",
    tag: "Animated Developer Portfolio",
    desc: "Designed and developed a premium animated portfolio with smooth page transitions, Framer Motion micro-interactions, and a modular project showcase — focused on performance, visual storytelling, and developer branding.",
    features: [
      "Rich animations and scroll-triggered transitions with Framer Motion",
      "Premium hero section with staggered reveal sequences",
      "Responsive, mobile-first design system throughout",
      "Optimized static generation for near-instant page loads",
    ],
    stack: "Next.js · Tailwind CSS · Framer Motion",
  },
];

export default function EasinArafatResume() {
  return (
    <>
      <style>{styles}</style>
      <div className="resume-page">

        {/* ── HEADER ── */}
        <header className="resume-header">
          <div>
            <h1 className="resume-name">Easin Arafat</h1>
            <div className="resume-role">
              Frontend &amp; Next.js Developer &nbsp;·&nbsp; Bangladesh
            </div>
          </div>
          <div className="contact-bar">
            <a href="mailto:arafatgw5@gmail.com">arafatgw5@gmail.com</a>
            &ensp;|&ensp;+880 000-000-0000
            <br />
            <a href="https://github.com/arafatgw5-cpu">github.com/arafatgw5-cpu</a>
            &ensp;|&ensp;
            <a href="https://www.linkedin.com/in/easin-arafat-gw5">linkedin.com/in/easin-arafat-gw5</a>
            <br />
            <a href="https://yourportfolio.vercel.app">yourportfolio.vercel.app</a>
          </div>
        </header>

        {/* ── PROFILE ── */}
        <section className="section">
          <div className="section-label">Profile</div>
          <p className="summary-text">
            Self-driven, detail-oriented Frontend Developer specializing in React.js and Next.js
            — building responsive, scalable web applications with clean UI/UX, secure
            authentication via Better Auth, and fluid micro-interactions powered by Framer
            Motion. Performance-focused and continuously advancing through real-world project
            development, with a strong command of Tailwind CSS, MongoDB, and the modern
            full-stack JavaScript ecosystem.
          </p>
        </section>

        {/* ── SKILLS ── */}
        <section className="section">
          <div className="section-label">Core Skills</div>
          <div className="skills-grid">
            {skills.map(({ cat, val }) => (
              <React.Fragment key={cat}>
                <div className="skill-cat">{cat}</div>
                <div className="skill-val">{val}</div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="section">
          <div className="section-label">Projects</div>
          {projects.map((proj, i) => (
            <React.Fragment key={proj.name}>
              {i > 0 && <hr className="thin-rule" />}
              <div className="project">
                <div className="project-header">
                  <span className="project-name">{proj.name}</span>
                  <span className="project-pipe">|</span>
                  <span className="project-tag">{proj.tag}</span>
                </div>
                <p className="project-desc">{proj.desc}</p>
                <ul className="project-features">
                  {proj.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="tech-stack">
                  <strong>Stack:</strong>&nbsp; {proj.stack}
                </div>
              </div>
            </React.Fragment>
          ))}
        </section>

        {/* ── LOWER: EXPERIENCE + EDUCATION ── */}
        <div className="lower-grid">
          <section className="section">
            <div className="section-label">Experience</div>
            <p className="exp-note">
              Open to Internship &amp; Junior Frontend Developer Opportunities — available
              immediately for remote and on-site roles globally.
            </p>
            <div className="avail-badge">Available Now · Remote-Friendly</div>
          </section>

          <section className="section">
            <div className="section-label">Education</div>
            <div className="edu-row">
              <span className="edu-degree">B.Sc. in Computer Science &amp; Engineering</span>
              <span className="edu-year">2022 – Present</span>
            </div>
            <div className="edu-institution">
              [Your University Name] — Dhaka, Bangladesh
            </div>
          </section>
        </div>

      </div>
    </>
  );
}