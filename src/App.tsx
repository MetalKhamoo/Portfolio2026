import React, { useEffect, useRef, useState } from "react";
import type { KeyboardEvent,} from "react";
import NeuralBackground from "./components/NeuralBackground";
import Lenis from "lenis";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  BrainCircuit,
  Code2,
  Database,
  Server,
  Menu,
  X,
  ChevronDown,
  MapPin,
  GraduationCap,
  Terminal,
} from "lucide-react";

import useHeroParallax from "./hooks/useHeroParallax";
import HeroEffects from "./components/HeroEffects";
import ContactEnding from "./components/ContactEnding";
import "./components/HeroIntro.css";


/* =========================================
   LINKS
========================================= */

const GITHUB =
  "https://github.com/MetalKhamoo";

const LINKEDIN =
  "https://www.linkedin.com/in/pratham2704";

const EMAIL =
  "mailto:pratham.deepak.2704@gmail.com";

const RESUME_URL = "/resume.pdf";


/* =========================================
   TYPES
========================================= */

interface ProjectDetails {
  overview: string;
  technical: string;
  features?: string[];
  problem?: string;
  architecture?: string;
  integration?: string;
  learning?: string;
  finalLearning?: string;
}

interface Project {
  year: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  repo: string;
  featured?: boolean;
  image?: string;
  details: ProjectDetails;
}

interface SkillGroup {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  items: string[];
}

/* =========================================
   PROJECT DATA
========================================= */

const projects: Project[] = [
  {
    year: "2025",
    title: "Broke But Thriving",
    type: "AI + FULL-STACK",
    description:
      "A personal finance management system combining predictive machine learning with an AI copilot for expense logging, simulations and personalized recommendations.",
    stack: [
      "React",
      "FastAPI",
      "Python",
      "SQL",
      "LSTM",
      "ML",
    ],
    repo:
      "https://github.com/MetalKhamoo/BrokeButThriving",
    featured: true,
    details: {
      overview:
        "Broke But Thriving is a personal finance management system built to help users understand spending behaviour, track expenses and make better financial decisions using machine learning and an AI copilot.",
      technical:
        "The application combines a React frontend with a FastAPI and Python backend. Multiple machine-learning approaches including LSTM, MLP, Gradient Boosting and linear models are used for predictive analysis, while an AI copilot handles natural-language interaction and function-based actions.",
      features: [
        "Expense tracking and categorisation",
        "Predictive financial analysis",
        "Financial simulations",
        "Personalised recommendations",
        "AI-assisted expense logging",
        "Natural-language interaction with financial data",
      ],
      problem:
        "Managing personal finances is often less about a lack of data and more about not knowing what that data means. Students can track expenses, but turning spending history into useful predictions, simulations and actionable decisions is much harder. Broke But Thriving was built to bridge that gap by combining financial tracking with predictive analysis and an AI copilot.",
      architecture:
        "The system follows a full-stack architecture with a React frontend, FastAPI/Python backend and SQL-based data layer. Financial data flows from the application into preprocessing and machine-learning pipelines, where multiple models generate forecasts and risk signals. The resulting information is exposed back to the application so the dashboard and AI copilot can work with the same underlying financial context.",
      integration:
        "The most interesting part of the system was connecting the machine-learning layer with an LLM-powered AI copilot. Llama 3.3 70B was used with function calling so the copilot could work with application data and perform useful actions such as retrieving dashboard information, running simulations, logging expenses and supporting savings challenges instead of behaving like a standalone chatbot.",
      learning:
        "I learned that building an ML product requires much more than training a model. Working with financial data made preprocessing, feature design and preventing data leakage important parts of the engineering process. I also learned how to compare sequence models such as LSTMs with MLPs, Gradient Boosting and simpler linear baselines, which helped me understand when model complexity is actually justified.",
      finalLearning:
        "The biggest takeaway was learning to think of AI as a complete system rather than an isolated model. Connecting the frontend, backend, database, prediction pipelines and LLM-based interaction taught me to think about data flow, reliability, evaluation and user experience together. The goal is not simply to build the most complicated model, but to build a system that solves the right problem and turns predictions into something a user can actually act on.",
    },
  },

  {
    year: "2024",
    title: "AI-driven CRM",
    type: "AI + FRONTEND",
    description:
      "A modern CRM application focused on turning customer information and workflows into a more intelligent and usable interface.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Query",
    ],
    repo:
      "https://github.com/MetalKhamoo/AI-driven-CRM",
    details: {
      overview:
        "AI-driven CRM is a customer relationship management application focused on making customer information and workflows easier to understand, manage and act on.",
      technical:
        "The project uses React, TypeScript, Vite and React Query to build a structured frontend and manage application data and asynchronous workflows.",
      features: [
        "Customer information management",
        "Structured CRM workflows",
        "Responsive React interface",
        "Type-safe development with TypeScript",
        "Client-side data fetching and state management",
      ],
      learning:
        "The project strengthened my understanding of component-driven frontend architecture, typed development and managing application data cleanly in a modern React stack.",
    },
  },

  {
    year: "2024",
    title: "Placement Cell Management System",
    type: "FULL-STACK",
    description:
      "A role-based campus recruitment platform connecting students, administrators, HOD, principal and placement teams through centralized workflows.",
    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Role-based Access",
    ],
    repo:
      "https://github.com/MetalKhamoo/PCMS",
    details: {
      overview:
        "The Placement Cell Management System is a role-based campus recruitment platform designed to centralise placement workflows for students, administrators, HODs, the principal and the placement team.",
      technical:
        "The system was developed using PHP, MySQL and JavaScript, with role-based access controlling the workflows and information available to different users.",
      features: [
        "Role-based user access",
        "Centralised placement workflows",
        "Student and administrator management",
        "Placement coordination",
        "MySQL-backed data management",
      ],
      learning:
        "This project gave me practical experience with role-based application design, relational databases and building software around multiple user roles and institutional workflows.",
    },
  },

  {
    year: "2025",
    title: "PawRescue",
    type: "ANDROID",
    description:
      "An Android application for reporting injured or stray animals with image uploads, location pinning and database-backed rescue workflows.",
    stack: [
      "Java",
      "Android",
      "SQLite",
      "Google Maps API",
    ],
    repo:
      "https://github.com/MetalKhamoo/PawRescue",
    details: {
      overview:
        "PawRescue is an Android application for reporting injured or stray animals and connecting reports with location and rescue workflows.",
      technical:
        "The application was developed in Java with SQLite for local data storage and Google Maps API integration for location pinning and map-based reporting.",
      features: [
        "Animal incident reporting",
        "Image upload for reports",
        "Location pinning",
        "SQLite-backed data storage",
        "Map-based location support",
        "Rescue-oriented reporting workflow",
      ],
      learning:
        "The project helped me understand Android application development, local persistence, location-based features and designing technology around a real-world community problem.",
    },
  },
];


/* =========================================
   SKILL DATA
========================================= */

const skills: SkillGroup[] = [
  {
    icon: BrainCircuit,
    label: "AI / ML",
    items: [
      "Machine Learning",
      "TensorFlow",
      "NLP",
      "LSTM",
      "Predictive Modeling",
    ],
  },

  {
    icon: Code2,
    label: "Languages",
    items: [
      "Python",
      "Java",
      "C",
      "C++",
      "SQL",
      "JavaScript",
    ],
  },

  {
    icon: Server,
    label: "Development",
    items: [
      "React",
      "FastAPI",
      "PHP",
      "Android",
      "HTML",
      "CSS",
    ],
  },

  {
    icon: Database,
    label: "Data",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Power BI",
      "Tableau",
    ],
  },

  {
    icon: Terminal,
    label: "Tools",
    items: [
      "Git",
      "Docker",
      "VS Code",
      "Android Studio",
    ],
  },
];


/* =========================================
   PARTICLE FIELD
========================================= */

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrame;
    let particles = [];

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const count = Math.min(
        85,
        Math.floor(
          (window.innerWidth *
            window.innerHeight) /
            18000
        )
      );

      particles = Array.from(
        { length: count },
        () => ({
          x:
            Math.random() *
            canvas.width,

          y:
            Math.random() *
            canvas.height,

          vx:
            (Math.random() - 0.5) *
            0.18,

          vy:
            (Math.random() - 0.5) *
            0.18,

          size:
            Math.random() * 1.6 +
            0.4,
        })
      );
    };

    const draw = (): void => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((p) => {
        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (
            p.x < 0 ||
            p.x > canvas.width
          ) {
            p.vx *= -1;
          }

          if (
            p.y < 0 ||
            p.y > canvas.height
          ) {
            p.vy *= -1;
          }
        }

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(85, 170, 255, 0.55)";

        ctx.fill();
      });

      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const dx =
            particles[i].x -
            particles[j].x;

          const dy =
            particles[i].y -
            particles[j].y;

          const distance =
            Math.sqrt(
              dx * dx +
              dy * dy
            );

          if (distance < 135) {
            const opacity =
              (1 -
                distance / 135) *
              0.13;

            ctx.beginPath();

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            );

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            );

            ctx.strokeStyle =
              `rgba(85, 170, 255, ${opacity})`;

            ctx.lineWidth = 0.6;

            ctx.stroke();
          }
        }
      }

      animationFrame =
        requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener(
      "resize",
      resize
    );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-field"
    />
  );
}


/* =========================================
   APP
========================================= */

function App() {
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  // Reference portfolio typography: Figtree + Syne + Geist Mono
  useEffect(() => {
    const fontId = "portfolio-reference-fonts";

    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&family=Syne:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const getProjectSlug = (project: Project): string =>
    project.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const getProjectFromHistory = (): Project | null => {
    const state = window.history.state;

    if (state?.projectDetail && state?.projectTitle) {
      return (
        projects.find(
          (project) => project.title === state.projectTitle
        ) || null
      );
    }

    const hash = window.location.hash;

    if (hash.startsWith("#project-")) {
      const slug = hash.replace("#project-", "");

      return (
        projects.find(
          (project) => getProjectSlug(project) === slug
        ) || null
      );
    }

    return null;
  };

  const openProject = (project: Project): void => {
    const projectSlug = getProjectSlug(project);

    setSelectedProject(project);

    if (
      window.history.state?.projectDetail &&
      window.history.state?.projectTitle === project.title
    ) {
      return;
    }

    window.history.pushState(
      {
        ...(window.history.state || {}),
        projectDetail: true,
        projectTitle: project.title,
      },
      "",
      `#project-${projectSlug}`
    );
  };

  const closeProject = (): void => {
    if (window.history.state?.projectDetail) {
      window.history.back();
    } else {
      setSelectedProject(null);
    }
  };

  const heroRef = useRef<HTMLElement | null>(null);
  const projectDetailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!resumeOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setResumeOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.classList.add("resume-open");

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("resume-open");
    };
  }, [resumeOpen]);
  // Browser Back / Forward button support
  useEffect(() => {
    const syncProjectWithHistory = () => {
      const project = getProjectFromHistory();
      setSelectedProject(project);
    };

    window.addEventListener("popstate", syncProjectWithHistory);
    window.addEventListener("hashchange", syncProjectWithHistory);

    syncProjectWithHistory();

    return () => {
      window.removeEventListener("popstate", syncProjectWithHistory);
      window.removeEventListener("hashchange", syncProjectWithHistory);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.classList.add("project-detail-open");

    // Start the detail page at the top every time a project is opened.
    if (projectDetailRef.current) {
      projectDetailRef.current.scrollTop = 0;
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("project-detail-open");
    };
  }, [selectedProject]);

  /* =========================================
     PROJECT DETAIL SMOOTH SCROLL
     Uses its own Lenis instance so the project
     page scrolls exactly like the homepage while
     keeping the homepage untouched underneath.
  ========================================= */

  useEffect(() => {
    if (!selectedProject || !projectDetailRef.current) return;

    const detailLayer = projectDetailRef.current;
    const detailContent = detailLayer.querySelector(".project-detail-shell");

    const detailLenis = new Lenis({
      wrapper: detailLayer,
      content: detailContent,
      duration: 1.15,
      smoothWheel: true,
      syncTouch: true,
      autoRaf: true,
    });

    return () => {
      detailLenis.destroy();
    };
  }, [selectedProject]);


  /* =========================================
     LENIS SMOOTH SCROLL
  ========================================= */

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);


  /* =========================================
     ACTIVE NAVIGATION SECTION
  ========================================= */

  useEffect(() => {
    const sectionIds = [
      "home",
      "experience",
      "work",
      "skills",
      "contact",
    ];

    const updateActiveSection = () => {
      // Pick the section that currently occupies the activation point
      // in the viewport. This is more reliable than checking which
      // section top is closest to the navbar, especially for Contact.
      const activationPoint = window.innerHeight * 0.42;

      let current = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (
          rect.top <= activationPoint &&
          rect.bottom >= activationPoint
        ) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);


  /* =========================================
     HERO PARALLAX
  ========================================= */

  const {
    scrollYProgress,
    backgroundY,
    networkY,
    photoY,
    photoScale,
    textY,
    textOpacity,
    glowScale,
    glowOpacity,
  } = useHeroParallax(heroRef);


  /* =========================================
     SCROLL FUNCTION
  ========================================= */

  const scrollTo = (id: string): void => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setOpen(false);
  };


  return (
    <div className="site">

      {/* Reference portfolio typography */}
      <style>{`
        body,
        .site {
          font-family: "Figtree", sans-serif !important;
        }

        h1,
        h2,
        h3,
        .hero-intro-name,
        .project-detail-hero h1,
        .project-detail-copy h2,
        .project h3,
        .experience-card h3,
        .skill-card h3 {
          font-family: "Syne", sans-serif !important;
        }

        .section-index,
        .project-number,
        .project-type,
        .project-detail-kicker,
        .project-detail-label,
        .project-detail-repository > span:first-child,
        .project-detail-visual-label,
        .project-detail-visual-number,
        .resume-drawer-kicker,
        .experience-year,
        .tags span,
        .experience-tags span {
          font-family: "Geist Mono", monospace !important;
        }

        button,
        input,
        textarea,
        select {
          font-family: "Figtree", sans-serif !important;
        }
      `}</style>

      {/* Decorative background layers — never intercept project clicks */}
      <div className="neural-background-layer" aria-hidden="true">
        <NeuralBackground />
      </div>

      <div className="particle-background-layer" aria-hidden="true">
        <ParticleField />
      </div>

      {/* Noise */}

      <div className="noise" />

      {/* Scroll progress */}

      <motion.div
        className="scroll-progress"
        style={{
          scaleY:
            scrollYProgress,
        }}
      />


      {/* =====================================
          NAVIGATION
      ===================================== */}

      <header className="nav-wrap">

        <nav className="nav">

          <button
            className="brand"
            onClick={() =>
              scrollTo("home")
            }
            aria-label="Go home"
          >
            PD<span>.</span>
          </button>


          <div
            className={`nav-links ${
              open ? "show" : ""
            }`}
          >

            <button
              className={activeSection === "home" ? "active" : ""}
              onClick={() =>
                scrollTo("home")
              }
            >
              Home

              {activeSection === "home" && (
                <motion.span
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </button>


            <button
              className={activeSection === "experience" ? "active" : ""}
              onClick={() =>
                scrollTo("experience")
              }
            >
              Experience

              {activeSection === "experience" && (
                <motion.span
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </button>


            <button
              className={activeSection === "work" ? "active" : ""}
              onClick={() =>
                scrollTo("work")
              }
            >
              Work

              {activeSection === "work" && (
                <motion.span
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </button>


            <button
              className={activeSection === "skills" ? "active" : ""}
              onClick={() =>
                scrollTo("skills")
              }
            >
              Skills

              {activeSection === "skills" && (
                <motion.span
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </button>


            <button
              className={activeSection === "contact" ? "active" : ""}
              onClick={() =>
                scrollTo("contact")
              }
            >
              Contact

              {activeSection === "contact" && (
                <motion.span
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </button>


            <button
              className="nav-resume"
              type="button"
              onClick={() => {
                setOpen(false);
                setResumeOpen(true);
              }}
              aria-label="Open resume"
              aria-haspopup="dialog"
              aria-expanded={resumeOpen}
            >
              Resume
            </button>

          </div>


          {/* Mobile menu */}

          <button
            className="menu"
            onClick={() =>
              setOpen(!open)
            }
            aria-label="Toggle menu"
          >
            {open ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>

        </nav>

      </header>

      {resumeOpen && (
        <div
          className="resume-drawer-layer"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <button
            className="resume-backdrop"
            type="button"
            onClick={() => setResumeOpen(false)}
            aria-label="Close resume preview"
          />

          <motion.aside
            className="resume-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
          >
            <div className="resume-drawer-head">
              <div>
                <span className="resume-drawer-kicker">DOCUMENT</span>
                <h2>Resume</h2>
              </div>

              <button
                className="resume-close"
                type="button"
                onClick={() => setResumeOpen(false)}
                aria-label="Close resume"
              >
                <X size={20} />
              </button>
            </div>

            <div className="resume-viewer">
              <iframe
                src={`${RESUME_URL}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                title="Pratham Deepak Resume"
                loading="eager"
              style={{ background: "#fff" }}
              />
            </div>

            <div className="resume-drawer-actions">
              <a
                className="resume-download"
                href={RESUME_URL}
                download="Pratham_Deepak_Resume.pdf"
              >
                Download PDF <Download size={16} />
              </a>

              <a
                className="resume-open-new"
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open full PDF <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.aside>
        </div>
      )}


      {selectedProject && (
        <div ref={projectDetailRef} className="project-detail-layer">
          <div className="project-detail-shell">
            <header className="project-detail-nav">
              <button
                className="project-detail-brand"
                type="button"
                onClick={closeProject}
                aria-label="Back to portfolio"
              >
                PD<span>.</span>
              </button>

              <button
                className="project-detail-back"
                type="button"
                onClick={closeProject}
              >
                <span className="project-detail-back-arrow">←</span>
                All Projects
              </button>
            </header>

            <main className="project-detail-content">
              {/* PROJECT INTRO */}
              <section className="project-detail-hero">
                <div className="project-detail-kicker">
                  <span>{selectedProject.year}</span>
                  <span>{selectedProject.type}</span>
                  <span>SELECTED WORK</span>
                </div>

                <h1>{selectedProject.title}</h1>

                <p className="project-detail-intro">
                  {selectedProject.description}
                </p>

                <div className="project-detail-tags">
                  {selectedProject.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </section>

              {/* PROJECT VISUAL — optional image can be added later as project.image */}
              <section className="project-detail-visual">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} project preview`}
                  />
                ) : (
                  <div className="project-detail-visual-inner">
                    <span className="project-detail-visual-number">
                      {selectedProject.year}
                    </span>
                    <span className="project-detail-visual-label">
                      {selectedProject.type}
                    </span>
                    <h2>{selectedProject.title}</h2>
                    <div className="project-detail-visual-stack">
                      {selectedProject.stack.slice(0, 5).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              <div className="project-detail-divider" />

              {/* REPOSITORY — plain text URL, not clickable */}
              <div className="project-detail-repository">
                <span>PROJECT REPOSITORY</span>
                <span>{selectedProject.repo}</span>
              </div>

              {/* PROJECT CASE STUDY SECTIONS */}
              <div className="project-detail-sections">
                <motion.section
                  className="project-detail-row"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="project-detail-label">PROJECT OVERVIEW</div>
                  <div className="project-detail-copy">
                    <h2>Turning spending data into better decisions</h2>
                    <p>{selectedProject.details.problem || selectedProject.details.overview}</p>
                  </div>
                </motion.section>

                <motion.section
                  className="project-detail-row"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="project-detail-label">TECHNICAL APPROACH</div>
                  <div className="project-detail-copy">
                    <h2>From financial data to predictive insight</h2>
                    <p>{selectedProject.details.technical}</p>
                  </div>
                </motion.section>

                <motion.section
                  className="project-detail-row"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="project-detail-label">ARCHITECTURE</div>
                  <div className="project-detail-copy">
                    <h2>Connecting the application layers</h2>
                    <p>{selectedProject.details.architecture || selectedProject.details.technical}</p>
                  </div>
                </motion.section>

                <motion.section
                  className="project-detail-row"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="project-detail-label">MY LEARNING</div>
                  <div className="project-detail-copy">
                    <h2>Building reliable ML, not just accurate models</h2>
                    <p>{selectedProject.details.learning}</p>
                  </div>
                </motion.section>

                <motion.section
                  className="project-detail-row"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="project-detail-label">KEY INTEGRATION</div>
                  <div className="project-detail-copy">
                    <h2>Giving the AI copilot access to real application context</h2>
                    <p>{selectedProject.details.integration || selectedProject.details.learning}</p>
                  </div>
                </motion.section>

                <motion.section
                  className="project-detail-row"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="project-detail-label">WHAT I LEARNED</div>
                  <div className="project-detail-copy">
                    <h2>Building an AI system as a product</h2>
                    <p>{selectedProject.details.finalLearning || selectedProject.details.learning}</p>
                  </div>
                </motion.section>
              </div>

              {/* FOOTER */}
              <footer className="project-detail-footer">
                <a
                  className="project-detail-github"
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                  <ArrowUpRight size={15} />
                </a>

                <button
                  type="button"
                  onClick={closeProject}
                >
                  <span>←</span>
                  Back to Projects
                </button>
              </footer>
            </main>
          </div>
        </div>
      )}

      <main>


        {/* =====================================
            HERO / INTRO
        ===================================== */}

        <section
          id="home"
          className="hero section"
          ref={heroRef}
        >

          <HeroEffects
            backgroundY={
              backgroundY
            }
            networkY={
              networkY
            }
            glowScale={
              glowScale
            }
            glowOpacity={
              glowOpacity
            }
          />


          <div className="hero-grid">


            {/* =================================
                LEFT SIDE
            ================================= */}

            <motion.div
              className="hero-intro"
              style={{
                y: textY,
                opacity:
                  textOpacity,
              }}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            >

              <span className="hero-intro-kicker">
                HELLO, I'M
              </span>


              <h1 className="hero-intro-name">

                <span>
                  Pratham
                </span>

                <span>
                  Deepak
                </span>

              </h1>


              <p className="hero-intro-title">
                Building Intelligent
                Systems
              </p>


              <div className="hero-intro-education">

                <span>
                  B.Tech Artificial
                  Intelligence &
                  Data Science
                </span>

                <span>
                  NMIMS Navi Mumbai
                  · 2027
                </span>

              </div>


              <p className="hero-intro-description">
                I enjoy building
                intelligent
                applications,
                exploring machine
                learning, and
                creating software
                that turns ideas
                into practical
                solutions.
              </p>


              <div className="hero-intro-actions">

                <button
                  className="primary"
                  onClick={() =>
                    scrollTo("work")
                  }
                >
                  Explore My Work

                  <ArrowUpRight
                    size={17}
                  />
                </button>


                <button
                  className="secondary"
                  onClick={() =>
                    scrollTo("experience")
                  }
                >
                  Experience
                </button>

              </div>

            </motion.div>


            {/* =================================
                RIGHT SIDE PHOTO
            ================================= */}

            <motion.div
              className="hero-art"
              style={{
                y: photoY,
                scale:
                  photoScale,
              }}
              initial={{
                opacity: 0,
                x: 45,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: "easeOut",
              }}
            >

              <div className="profile-frame">

                <motion.div
                  className="profile-glow"
                  style={{
                    scale:
                      glowScale,
                    opacity:
                      glowOpacity,
                  }}
                />


                <img
                  src="/profile.jpg"
                  alt="Pratham Deepak"
                  className="profile-image"
                />

              </div>

            </motion.div>

          </div>


          {/* Scroll cue */}

          <motion.button
            className="scroll-cue"
            onClick={() =>
              scrollTo("about")
            }
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <span>
              SCROLL TO EXPLORE
            </span>

            <ChevronDown
              size={17}
            />

          </motion.button>

        </section>


        {/* =====================================================
            01 / WHY I BUILD
        ===================================================== */}

        <section
          id="about"
          className="section about"
        >

          <div className="about-left">

            <span className="section-index">
              01 / WHY I BUILD
            </span>

            <h2>
              Building beyond
              <br />
              the classroom.
            </h2>

          </div>


          <div className="about-right">

            <p className="large">

              My focus sits at
              the intersection
              of{" "}

              <strong>
                AI, data and
                software
                engineering
              </strong>
              .

              I like taking an
              idea from a
              problem statement
              to a working
              application.

            </p>


            <p>
              At NMIMS, I've
              worked on
              machine-learning
              systems,
              full-stack
              applications,
              Android
              development and
              database-backed
              platforms. Outside
              code, I've also
              led student teams
              and institute
              communications.
            </p>


            <div className="facts">

              <div>

                <b>
                  2027
                </b>

                <span>
                  Expected
                  graduation
                </span>

              </div>


              <div>

                <b>
                  NMIMS
                </b>

                <span>
                  School of
                  Technology,
                  Management &
                  Engineering
                </span>

              </div>


              <div>

                <b>
                  AI + SWE
                </b>

                <span>
                  Current
                  direction
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            02 / EXPERIENCE
        ===================================================== */}

        <section
          id="experience"
          className="section experience"
        >

          <div className="section-head experience-head">

            <div>

              <span className="section-index">
                02 / EXPERIENCE
              </span>

              <h2>
                Where I've made
                <br />
                an impact.
              </h2>

            </div>


            <p>
              Leadership,
              collaboration
              and experiences
              beyond writing
              code.
            </p>

          </div>


          <div className="experience-grid">


            {/* =================================
                EXPERIENCE 01
            ================================= */}

            <motion.article
              className="experience-card featured-experience"

              initial={{
                opacity: 0,
                y: 45,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                margin: "-100px",
              }}

              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >

              <div className="experience-year">
                2025 - 2026
              </div>


              <h3>
                Head · Public Relations
              </h3>


              <h4>
                STME, NMIMS Navi Mumbai              
              </h4>


              <p>
                Managed an 80+ member
                Public Relations team
                responsible for
                communication and
                execution across 10+
                institute events. Oversaw
                task delegation, cross-
                team coordination and
                delivery timelines,
                ensuring event
                requirements were
                completed on schedule.
              </p>


              <div className="experience-tags">

                <span>
                  Leadership
                </span>

                <span>
                  Team Management
                </span>

                <span>
                  Communications
                </span>

              </div>

            </motion.article>


            {/* =================================
                EXPERIENCE 02
            ================================= */}

            <motion.article
              className="experience-card"

              initial={{
                opacity: 0,
                y: 45,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                margin: "-100px",
              }}

              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: "easeOut",
              }}
            >

              <div className="experience-year">
                2024 - 2025
              </div>


              <h3>
                Photography Head · Public Relations
              </h3>


              <h4>
                STME, NMIMS Navi Mumbai
              </h4>


              <p>
                Led the photography
                team across 10+ institute
                events, overseeing event
                coverage, visual content
                and documentation for
                promotional campaigns,
                reports and social media.
                Managed timely delivery
                of visual assets.
              </p>


              <div className="experience-tags">

                <span>
                  Photography
                </span>

                <span>
                  Visual Media
                </span>

                <span>
                  Creative Direction
                </span>

              </div>

            </motion.article>


            {/* =================================
                EXPERIENCE 03
            ================================= */}

            <motion.article
              className="experience-card"

              initial={{
                opacity: 0,
                y: 45,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                margin: "-100px",
              }}

              transition={{
                duration: 0.7,
                delay: 0.24,
                ease: "easeOut",
              }}
            >

              <div className="experience-year">
                2024 - 2025
              </div>


              <h3>
                Sports Joint Director, Mumbai · 
              </h3>


              <h4>
                Rotaract Club of
                Parleshware Genz
              </h4>


              <p>
                Coordinated sports,
                community and fundraising
                initiatives, working with
                student teams to plan
                and execute events.
                Managed responsibilities,
                team coordination and
                on-ground execution.
              </p>


              <div className="experience-tags">

                <span>
                  Event Management
                </span>

                <span>
                  Teamwork
                </span>

                <span>
                  Community
                </span>

              </div>

            </motion.article>

            {/* =================================
                EXPERIENCE 04
            ================================= */}

            <motion.article
              className="experience-card"

              initial={{
                opacity: 0,
                y: 45,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                margin: "-100px",
              }}

              transition={{
                duration: 0.7,
                delay: 0.36,
                ease: "easeOut",
              }}
            >

              <div className="experience-year">
                May '24
              </div>


              <h3>
                Community Service Volunteer
              </h3>


              <h4>
                Smiles Foundation
              </h4>


              <p>
                Completed a 3-week community
                service program at the Nerul
                branch, contributing to NGO-led
                social initiatives. Participated
                in organizing and supporting
                community outreach activities
                aimed at improving local welfare.
              </p>


              <div className="experience-tags">

                <span>
                  Community Service
                </span>

                <span>
                  Social Impact
                </span>

                <span>
                  Outreach
                </span>

              </div>

            </motion.article>

            


          </div>

        </section>


        {/* =====================================================
            03 / SELECTED WORK
        ===================================================== */}

        <section
          id="work"
          className="section work"
        >

          <div className="section-head">

            <div>

              <span className="section-index">
                03 / SELECTED WORK
              </span>

              <h2>
                Things I've built.
              </h2>

            </div>


            <p>
              Projects where
              software, data and
              problem-solving meet.
            </p>

          </div>


          <div className="projects">

            {projects.map(
              (
                project: Project,
                index: number
              ) => (

                <motion.article
                  className={`project project-clickable ${
                    project.featured
                      ? "featured"
                      : ""
                  }`}

                  key={
                    project.title
                  }

                  onClick={() => openProject(project)}

                  onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openProject(project);
                    }
                  }}

                  role="button"
                  tabIndex={0}
                  aria-label={`Open details for ${project.title}`}

                  initial={{
                    opacity: 0,
                    y: 60,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                    margin:
                      "-100px",
                  }}

                  transition={{
                    duration: 0.7,
                    delay:
                      index * 0.1,
                    ease:
                      "easeOut",
                  }}
                >

                  <div className="project-top">

                    <span className="project-number">
                      {
                        project.year
                      }
                    </span>

                    <span className="project-type">
                      {
                        project.type
                      }
                    </span>

                  </div>


                  <div className="project-body">

                    <div>

                      <h3>
                        {
                          project.title
                        }
                      </h3>

                      <p>
                        {
                          project.description
                        }
                      </p>

                    </div>


                    <a
                      className="project-link"
                      href={
                        project.repo
                      }
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      View repository

                      <ArrowUpRight
                        size={17}
                      />

                    </a>

                  </div>


                  <div className="tags">

                    {project.stack.map(
                      (tech) => (

                        <span
                          key={tech}
                        >
                          {tech}
                        </span>

                      )
                    )}

                  </div>

                </motion.article>

              )
            )}

          </div>

        </section>


        {/* =====================================================
            04 / TOOLKIT
        ===================================================== */}

        <section
          id="skills"
          className="section skills"
        >

          <div className="section-head">

            <div>

              <span className="section-index">
                04 / TOOLKIT
              </span>

              <h2>
                What I work with.
              </h2>

            </div>

          </div>


          <div className="skill-grid">

            {skills.map(
              (
                group: SkillGroup,
                index: number
              ) => {

                const Icon =
                  group.icon;

                return (

                  <motion.div
                    className="skill-card"
                    key={
                      group.label
                    }

                    initial={{
                      opacity: 0,
                      y: 35,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    viewport={{
                      once: true,
                      margin:
                        "-80px",
                    }}

                    transition={{
                      duration:
                        0.55,
                      delay:
                        index * 0.08,
                    }}
                  >

                    <Icon
                      size={21}
                    />

                    <h3>
                      {
                        group.label
                      }
                    </h3>


                    <div className="skill-list">

                      {group.items.map(
                        (item) => (

                          <span
                            key={
                              item
                            }
                          >
                            {item}
                          </span>

                        )
                      )}

                    </div>

                  </motion.div>

                );
              }
            )}

          </div>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <ContactEnding />

      </main>

    </div>
  );
}


export default App;