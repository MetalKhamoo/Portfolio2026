import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, ExternalLink,
  BrainCircuit, Code2, Database, Server, Smartphone, Menu, X,
  ChevronDown, Sparkles, MapPin, GraduationCap, Terminal, Cpu
} from "lucide-react";

const GITHUB = "https://github.com/MetalKhamoo";
const EMAIL = "mailto:pratham.deepak008.nmims.in";
const LINKEDIN = "https://www.linkedin.com/";

const projects = [
  {
    number: "01",
    title: "Broke But Thriving",
    type: "AI + Full-Stack",
    description:
      "A personal finance management system combining predictive machine learning with an AI copilot for expense logging, simulations and personalized recommendations.",
    stack: ["React", "FastAPI", "Python", "SQL", "LSTM", "ML"],
    repo: "https://github.com/MetalKhamoo/BrokeButThriving",
    featured: true
  },
  {
    number: "02",
    title: "AI-driven CRM",
    type: "AI + Frontend",
    description:
      "A modern CRM application focused on turning customer information and workflows into a more intelligent, usable interface.",
    stack: ["React", "TypeScript", "Vite", "React Query"],
    repo: "https://github.com/MetalKhamoo/AI-driven-CRM"
  },
  {
    number: "03",
    title: "Placement Cell Management System",
    type: "Full-Stack",
    description:
      "A role-based campus recruitment platform connecting students, administrators, HOD, principal and placement teams through centralized workflows.",
    stack: ["PHP", "MySQL", "JavaScript", "Role-based Access"],
    repo: "https://github.com/MetalKhamoo/PCMS"
  },
  {
    number: "04",
    title: "PawRescue",
    type: "Android",
    description:
      "An Android application for reporting injured or stray animals with image uploads, location pinning and database-backed rescue workflows.",
    stack: ["Java", "Android", "SQLite", "Google Maps API"],
    repo: "https://github.com/MetalKhamoo/PawRescue"
  }
];

const skills = [
  { icon: BrainCircuit, label: "AI / ML", items: ["Machine Learning", "TensorFlow", "NLP", "LSTM", "Predictive Modeling"] },
  { icon: Code2, label: "Languages", items: ["Python", "Java", "C", "C++", "SQL", "JavaScript"] },
  { icon: Server, label: "Development", items: ["React", "FastAPI", "PHP", "Android", "HTML", "CSS"] },
  { icon: Database, label: "Data", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Power BI", "Tableau"] },
  { icon: Terminal, label: "Tools", items: ["Git", "Docker", "VS Code", "Android Studio"] }
];

function App() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="site">
      <div className="noise" />

      <header className="nav-wrap">
        <nav className="nav">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Go home">
            PD<span>.</span>
          </button>

          <div className={`nav-links ${open ? "show" : ""}`}>
            <button onClick={() => scrollTo("work")}>Work</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a>
          </div>

          <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
            >
              <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR INTERNSHIPS</div>
              <p className="kicker">AI & DATA SCIENCE / SOFTWARE ENGINEERING</p>
              <h1>
                Building software<br />
                <em>with intelligence.</em>
              </h1>
              <p className="hero-text">
                I'm Pratham Deepak, a B.Tech AI & Data Science student at NMIMS Navi Mumbai.
                I enjoy turning machine learning ideas into usable software and real-world systems.
              </p>

              <div className="hero-actions">
                <button className="primary" onClick={() => scrollTo("work")}>
                  Explore my work <ArrowUpRight size={17} />
                </button>
                <a className="secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Resume <Download size={16} />
                </a>
              </div>

              <div className="hero-meta">
                <span><MapPin size={15}/> Navi Mumbai, India</span>
                <span><GraduationCap size={15}/> B.Tech · 2027</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-art"
              initial={{ opacity: 0, scale: .95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .8, delay: .1 }}
            >
              <div className="orb">
                <div className="orb-core"><Cpu size={48}/></div>
                <div className="ring ring-a" />
                <div className="ring ring-b" />
                <div className="ring ring-c" />
                <span className="orbit-tag tag-a">ML</span>
                <span className="orbit-tag tag-b">AI</span>
                <span className="orbit-tag tag-c">API</span>
                <span className="orbit-tag tag-d">DATA</span>
              </div>
              <div className="code-card">
                <span>01</span><code>build(ideas)</code>
                <span>02</span><code>train(models)</code>
                <span>03</span><code>ship(products)</code>
              </div>
            </motion.div>
          </div>

          <button className="scroll-cue" onClick={() => scrollTo("work")}>
            <span>SCROLL TO EXPLORE</span><ChevronDown size={17}/>
          </button>
        </section>

        <section id="work" className="section work">
          <div className="section-head">
            <div>
              <span className="section-index">01 / SELECTED WORK</span>
              <h2>Things I've built.</h2>
            </div>
            <p>Projects where software, data and problem-solving meet.</p>
          </div>

          <div className="projects">
            {projects.map((p, i) => (
              <motion.article
                className={`project ${p.featured ? "featured" : ""}`}
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: .55, delay: i * .06 }}
              >
                <div className="project-top">
                  <span className="project-number">{p.number}</span>
                  <span className="project-type">{p.type}</span>
                </div>
                <div className="project-body">
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                  <a className="project-link" href={p.repo} target="_blank" rel="noreferrer">
                    View repository <ArrowUpRight size={17}/>
                  </a>
                </div>
                <div className="tags">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-left">
            <span className="section-index">02 / ABOUT</span>
            <h2>A student who likes building beyond the classroom.</h2>
          </div>
          <div className="about-right">
            <p className="large">
              My focus sits at the intersection of <strong>AI, data and software engineering</strong>.
              I like taking an idea from a problem statement to a working application.
            </p>
            <p>
              At NMIMS, I've worked on machine-learning systems, full-stack applications,
              Android development and database-backed platforms. Outside code, I've also led
              student teams and institute communications.
            </p>
            <div className="facts">
              <div><b>2027</b><span>Expected graduation</span></div>
              <div><b>NMIMS</b><span>School of Technology, Management & Engineering</span></div>
              <div><b>AI + SWE</b><span>Current direction</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-head">
            <div>
              <span className="section-index">03 / TOOLKIT</span>
              <h2>What I work with.</h2>
            </div>
          </div>

          <div className="skill-grid">
            {skills.map((group, i) => {
              const Icon = group.icon;
              return (
                <motion.div
                  className="skill-card"
                  key={group.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .05 }}
                >
                  <Icon size={21} />
                  <h3>{group.label}</h3>
                  <div className="skill-list">
                    {group.items.map(item => <span key={item}>{item}</span>)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="section leadership">
          <div className="section-head">
            <div>
              <span className="section-index">04 / BEYOND CODE</span>
              <h2>Leadership & involvement.</h2>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span>2025 — 2026</span>
              <div><h3>Head · Public Relations, STME</h3><p>Led campaigns for institute events, managed a team and ensured timely delivery.</p></div>
            </div>
            <div className="timeline-item">
              <span>2024 — 2025</span>
              <div><h3>Photography Head · Public Relations, STME</h3><p>Led event photography and visual documentation for reports, promotions and social media.</p></div>
            </div>
            <div className="timeline-item">
              <span>2024 — 2025</span>
              <div><h3>Sports Joint Director · Rotaract</h3><p>Helped organize fundraising and community events.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-card">
            <Sparkles size={22}/>
            <span className="section-index">05 / LET'S CONNECT</span>
            <h2>Have a problem worth building?</h2>
            <p>I'm open to technical internships, collaborative projects and opportunities to learn by building.</p>
            <a className="contact-email" href={EMAIL}>pratham.deepak008.nmims.in <ArrowUpRight size={18}/></a>
            <div className="socials">
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a href={EMAIL}><Mail size={17}/> Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>PRATHAM DEEPAK © 2026</span>
        <span>BUILT FOR THE WEB · DEPLOY ON VERCEL</span>
      </footer>
    </div>
  );
}

export default App;