import React, { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
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
  overviewTitle?: string;
  technicalTitle?: string;
  architectureTitle?: string;
  learningTitle?: string;
  integrationTitle?: string;
  finalLearningTitle?: string;
}

interface Project {
  year: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  repo: string;
  duration?: string;
  role?: string;
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
    duration: "3 months",
    role: "Solo Developer",
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
    duration: "3 months",
    role: "Solo Developer",
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
      "A role-based campus recruitment platform that centralizes student profiles, departmental approvals, company eligibility filtering and end-to-end placement-drive tracking.",
    duration: "3 months",
    role: "Solo Developer",
    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "Role-based Access",
    ],
    repo:
      "https://github.com/MetalKhamoo/PCMS",
    details: {
      overview:
        "The Placement Cell Management System is a role-based web application designed to centralize the campus recruitment workflow. It connects students, HODs, the placement team and the principal through a shared system for managing student profiles, academic eligibility, placement drives and recruitment progress.",
      technical:
        "The application is built using PHP, MySQL, JavaScript and Bootstrap. PHP handles the application logic and session-based access, while MySQL stores student profiles, academic records, placement drives and recruitment outcomes. The system uses database queries to filter students against company-specific academic and backlog requirements.",
      features: [
        "Role-based access for students, HODs, placement team and principal",
        "Student academic and personal profile management",
        "HOD-based student profile approval",
        "Placement drive creation and management",
        "Company-specific eligibility filtering",
        "Academic and backlog-based student filtering",
        "Placement drive progress tracking",
        "Written test, GD and technical round tracking",
        "Final placement status tracking",
        "Placement statistics and dashboard information",
      ],
      problem:
        "Managing campus placements involves multiple stakeholders and large amounts of student and recruitment data. Manually checking academic eligibility, maintaining student information and tracking candidates across multiple recruitment stages can become difficult to manage. PCMS was built to bring these workflows into one centralized platform.",
      architecture:
        "The system follows a relational database-driven architecture built around student records, placement drives and drive outcomes. Student information and academic records are maintained in the student database, while company requirements are stored with individual placement drives. Student-drive relationships are then used to track recruitment progress from eligibility and attendance through written tests, group discussions, technical rounds and final placement.",
      integration:
        "The key integration is between company eligibility criteria and student academic data. Placement requirements such as branch, academic scores, current backlogs, previous backlogs and detained years can be used to query the student database and identify eligible candidates. These candidates can then be connected to a placement drive and tracked through its recruitment stages.",
      learning:
        "I learned how to design role-based web applications where different users need access to different workflows and information. I also gained practical experience with relational database design, PHP session handling, SQL queries, CRUD operations and building eligibility logic around multiple academic and placement criteria.",
      finalLearning:
        "The biggest takeaway from PCMS was learning that a real-world management system is more than a collection of individual features. The project taught me how users, permissions, database relationships and business workflows need to work together reliably. Designing the placement process from student registration through final selection helped me understand how software can turn a complex manual process into a structured workflow.",
      overviewTitle:
        "Centralising the campus placement workflow",
      technicalTitle:
        "Managing placement data with PHP and MySQL",
      architectureTitle:
        "Connecting students, drives and recruitment stages",
      learningTitle:
        "Building role-based workflows around relational data",
      integrationTitle:
        "Matching company requirements with eligible students",
      finalLearningTitle:
        "Turning a manual process into a structured system",
    },
  },

  {
    year: "2025",
    title: "PawRescue", 
    type: "ANDROID",
    description:
      "An Android application for reporting injured or stray animals with image uploads, location pinning and database-backed rescue workflows.",
    duration: "3 months",
    role: "Solo Developer",
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
      if (event.key === "Escape") closeProject();
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


        /* Section labels — match the SIGNAL typography */
        .section-index,
        .about-reference-copy .section-index {
          font-family: "Geist Mono", monospace !important;
          font-weight: 500 !important;
          letter-spacing: 0.22em !important;
          text-transform: uppercase !important;
          font-variant-numeric: tabular-nums !important;
        }




        #work .section-head h2 {
          margin: 0 !important;
          max-width: 760px !important;
          font-family: "Syne", sans-serif !important;
          font-size: clamp(58px, 6vw, 92px) !important;
          font-weight: 600 !important;
          line-height: 1.02 !important;
          letter-spacing: -0.055em !important;
          text-transform: none !important;
          color: #e9f1fb !important;
        }

        @media (max-width: 820px) {
          #work .section-head h2 {
            max-width: 650px !important;
            font-size: 58px !important;
          }
        }

        @media (max-width: 520px) {
          #work .section-head h2 {
            font-size: 44px !important;
          }
        }

        /* SIGNAL-style section labels */
        .section-index,
        .projects-section-label {
          display: block !important;
          font-family: "Geist Mono", monospace !important;
          font-size: 11px !important;
          font-weight: 500 !important;
          line-height: 1.2 !important;
          letter-spacing: 0.24em !important;
          text-transform: uppercase !important;
          color: #4f6b86 !important;
          opacity: 0.9 !important;
        }

        .about-reference-copy .section-index {
          color: #4f6b86 !important;
        }

        #work .projects-section-label {
          margin-bottom: 28px !important;
        }

        #work .section-head h2 {
          margin-top: 0 !important;
        }

        @media (max-width: 820px) {
          .section-index,
          .projects-section-label {
            font-size: 10px !important;
          }
        }

        /* Projects heading — match the supplied compact mono reference */
        #work .section-head h2 {
          margin: 0 !important;
          font-family: "Geist Mono", monospace !important;
          font-size: clamp(20px, 1.7vw, 24px) !important;
          font-weight: 500 !important;
          line-height: 1.1 !important;
          letter-spacing: 0.16em !important;
          text-transform: uppercase !important;
          color: #506b87 !important;
        }


        /* =========================================
           WHY I BUILD — SIGNAL REFERENCE LAYOUT
        ========================================= */

        #about.about {
          display: block !important;
          position: relative !important;
          width: 100% !important;
          max-width: 100% !important;
          overflow: hidden !important;
        }

        #about.about > .about-reference-grid {
          width: 100% !important;
          max-width: 100% !important;
        }

        .about-reference-grid {
          width: 100% !important;
          max-width: 100% !important;
          display: grid !important;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr) !important;
          align-items: center !important;
          gap: 70px !important;
          min-height: 690px !important;
        }

        .about-reference-copy {
          min-width: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          position: relative !important;
          z-index: 2 !important;
        }

        .about-reference-copy .section-index {
          display: block !important;
          margin-bottom: 42px !important;
          color: #4d7194 !important;
          font-family: "Geist Mono", monospace !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          line-height: 1 !important;
          letter-spacing: 0.2em !important;
          text-transform: uppercase !important;
        }

        .about-reference-copy h2 {
          margin: 0 0 48px !important;
          max-width: none !important;
          font-family: "Syne", sans-serif !important;
          font-size: clamp(54px, 5.2vw, 78px) !important;
          font-weight: 600 !important;
          line-height: 0.98 !important;
          letter-spacing: -0.045em !important;
          color: #dce9f7 !important;
        }

        .about-reference-text {
          display: block !important;
          width: 100% !important;
          max-width: 900px !important;
        }

        .about-reference-text p {
          display: block !important;
          width: 100% !important;
          max-width: 900px !important;
          margin: 0 0 30px !important;
          padding: 0 !important;
          font-family: "Figtree", sans-serif !important;
          font-size: clamp(20px, 1.45vw, 27px) !important;
          font-weight: 400 !important;
          line-height: 1.55 !important;
          letter-spacing: -0.018em !important;
          color: #7897b7 !important;
          white-space: normal !important;
          word-break: normal !important;
          overflow-wrap: normal !important;
        }


        #about .about-reference-text p,
        #about .about-reference-text p span {
          display: inline !important;
          width: auto !important;
        }

        #about .about-reference-text p {
          display: block !important;
        }

        .about-reference-text p:last-child {
          margin-bottom: 0 !important;
        }

        /* Subtle text-only highlight on paragraph hover */
        .about-reference-text p {
          transition:
            color 0.25s ease,
            text-shadow 0.25s ease !important;
          cursor: default !important;
        }

        .about-reference-text p:hover {
          color: #9fc4e5 !important;
          text-shadow: 0 0 14px rgba(91, 160, 207, 0.22) !important;
        }


        .about-reference-visual {
          position: relative !important;
          width: min(100%, 620px) !important;
          height: 620px !important;
          justify-self: end !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          pointer-events: none !important;
        }

        .about-signal-glow {
          position: absolute !important;
          width: 72% !important;
          height: 72% !important;
          border-radius: 50% !important;
          background: radial-gradient(
            circle,
            rgba(42, 125, 184, 0.14) 0%,
            rgba(24, 83, 126, 0.06) 32%,
            rgba(4, 10, 19, 0) 72%
          ) !important;
          filter: blur(16px) !important;
        }

        .about-signal-network {
          position: relative !important;
          width: 86% !important;
          height: 86% !important;
          opacity: 0.75 !important;
          filter: drop-shadow(0 0 18px rgba(54, 151, 211, 0.08)) !important;
        }

        .signal-node {
          position: absolute !important;
          width: 6px !important;
          height: 6px !important;
          border-radius: 50% !important;
          background: rgba(74, 163, 216, 0.72) !important;
          box-shadow: 0 0 12px rgba(54, 151, 211, 0.7) !important;
        }

        .signal-node-center {
          width: 16px !important;
          height: 16px !important;
          background: #4e9ac9 !important;
          box-shadow:
            0 0 12px rgba(65, 153, 207, 0.9),
            0 0 34px rgba(43, 126, 180, 0.32) !important;
          transform: translate(-50%, -50%) !important;
        }

        .signal-node-1 { left: 19%; top: 23%; }
        .signal-node-2 { left: 37%; top: 14%; }
        .signal-node-3 { left: 64%; top: 19%; }
        .signal-node-4 { left: 76%; top: 35%; }
        .signal-node-5 { left: 79%; top: 58%; }
        .signal-node-6 { left: 65%; top: 76%; }
        .signal-node-7 { left: 42%; top: 84%; }
        .signal-node-8 { left: 23%; top: 70%; }
        .signal-node-9 { left: 13%; top: 48%; }
        .signal-node-10 { left: 34%; top: 44%; }
        .signal-node-11 { left: 55%; top: 37%; }
        .signal-node-12 { left: 57%; top: 58%; }
        .signal-node-center { left: 51%; top: 50%; }

        .signal-line {
          position: absolute !important;
          height: 1px !important;
          transform-origin: left center !important;
          background: linear-gradient(
            90deg,
            rgba(62, 137, 184, 0.02),
            rgba(62, 137, 184, 0.25),
            rgba(62, 137, 184, 0.02)
          ) !important;
        }

        .signal-line-1 { left: 19%; top: 23%; width: 23%; transform: rotate(-22deg); }
        .signal-line-2 { left: 37%; top: 14%; width: 29%; transform: rotate(10deg); }
        .signal-line-3 { left: 64%; top: 19%; width: 20%; transform: rotate(57deg); }
        .signal-line-4 { left: 76%; top: 35%; width: 25%; transform: rotate(54deg); }
        .signal-line-5 { left: 79%; top: 58%; width: 23%; transform: rotate(139deg); }
        .signal-line-6 { left: 65%; top: 76%; width: 27%; transform: rotate(166deg); }
        .signal-line-7 { left: 42%; top: 84%; width: 26%; transform: rotate(-151deg); }
        .signal-line-8 { left: 23%; top: 70%; width: 27%; transform: rotate(-114deg); }
        .signal-line-9 { left: 13%; top: 48%; width: 27%; transform: rotate(-8deg); }
        .signal-line-10 { left: 34%; top: 44%; width: 20%; transform: rotate(18deg); }
        .signal-line-11 { left: 55%; top: 37%; width: 20%; transform: rotate(82deg); }
        .signal-line-12 { left: 57%; top: 58%; width: 20%; transform: rotate(-112deg); }

        @media (max-width: 1000px) {
          .about-reference-grid {
            grid-template-columns: minmax(0, 1fr) minmax(280px, 0.7fr) !important;
            gap: 40px !important;
          }

          .about-reference-visual {
            height: 500px !important;
          }

          .about-reference-text p {
            font-size: 20px !important;
          }
        }

        @media (max-width: 820px) {
          .about-reference-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            min-height: auto !important;
          }

          .about-reference-copy .section-index {
            margin-bottom: 30px !important;
          }

          .about-reference-copy h2 {
            margin-bottom: 34px !important;
            font-size: 52px !important;
          }

          .about-reference-text p {
            font-size: 19px !important;
            line-height: 1.55 !important;
            margin-bottom: 26px !important;
          }

          .about-reference-visual {
            width: 100% !important;
            max-width: 500px !important;
            height: 420px !important;
            justify-self: center !important;
            margin: 0 auto !important;
          }
        }

        @media (max-width: 520px) {
          .about-reference-copy h2 {
            font-size: 42px !important;
          }

          .about-reference-text p {
            font-size: 17px !important;
          }

          .about-reference-visual {
            height: 330px !important;
          }
        }

        /* =========================================
           PROJECT DETAIL — EDITORIAL META
           Matches the reference layout:
           DURATION / ROLE → TECH TAGS → DIVIDER → REPOSITORY
        ========================================= */

        .project-detail-meta {
          width: 100% !important;
          max-width: 100% !important;
          display: grid !important;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
          gap: 64px !important;
          margin: 26px 0 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }

        .project-detail-meta-item {
          display: flex !important;
          flex-direction: column !important;
          gap: 8px !important;
          min-width: 0 !important;
        }

        .project-detail-meta-label {
          display: block !important;
          font-family: "Geist Mono", monospace !important;
          font-size: 9px !important;
          line-height: 1.2 !important;
          letter-spacing: 0.18em !important;
          text-transform: uppercase !important;
          color: #5b8fc4 !important;
        }

        .project-detail-meta-value {
          display: block !important;
          font-family: "Figtree", sans-serif !important;
          font-size: 13px !important;
          line-height: 1.45 !important;
          color: #78a7d4 !important;
        }

        .project-detail-tech-tags {
          width: 100% !important;
          max-width: 100% !important;
          display: flex !important;
          flex-wrap: wrap !important;
          align-items: center !important;
          gap: 7px !important;
          margin: 20px 0 40px !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }

        .project-detail-tech-tags span {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 5px 9px !important;
          border: 1px solid rgba(75, 130, 190, 0.35) !important;
          border-radius: 999px !important;
          background: rgba(20, 40, 65, 0.16) !important;
          font-family: "Geist Mono", monospace !important;
          font-size: 8px !important;
          line-height: 1 !important;
          letter-spacing: 0.04em !important;
          text-transform: uppercase !important;
          color: #6698c9 !important;
          white-space: nowrap !important;
        }

        /* Every horizontal separator uses the exact same width. */
        .project-detail-divider,
        .project-detail-repository,
        .project-detail-row {
          width: 100% !important;
          max-width: 100% !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          box-sizing: border-box !important;
        }

        .project-detail-divider {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }

        .project-detail-repository {
          display: grid !important;
          grid-template-columns: 180px minmax(0, 1fr) !important;
          column-gap: 6px !important;
        }

        .project-detail-repository > span {
          min-width: 0 !important;
          overflow-wrap: anywhere !important;
        }

        .project-detail-row {
          box-sizing: border-box !important;
        }

        @media (max-width: 700px) {
          .project-detail-meta {
            gap: 34px !important;
          }

          .project-detail-repository {
            grid-template-columns: 1fr !important;
            row-gap: 10px !important;
          }
        }

        @media (max-width: 480px) {
          .project-detail-meta {
            gap: 24px !important;
          }

          .project-detail-meta-label {
            font-size: 8px !important;
          }

          .project-detail-meta-value {
            font-size: 12px !important;
          }

          .project-detail-tech-tags {
            gap: 6px !important;
            margin-bottom: 32px !important;
          }

          .project-detail-tech-tags span {
            font-size: 7px !important;
            padding: 5px 8px !important;
          }
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

              {/* PROJECT META — matches the editorial case-study layout */}
              <div className="project-detail-meta">
                <div className="project-detail-meta-item">
                  <span className="project-detail-meta-label">DURATION</span>
                  <span className="project-detail-meta-value">
                    {selectedProject.duration || "—"}
                  </span>
                </div>

                <div className="project-detail-meta-item">
                  <span className="project-detail-meta-label">ROLE</span>
                  <span className="project-detail-meta-value">
                    {selectedProject.role || "—"}
                  </span>
                </div>
              </div>

              {/* TECHNOLOGY TAGS */}
              <div className="project-detail-tech-tags">
                {selectedProject.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-detail-divider" />

              {/* REPOSITORY — plain text URL, not clickable */}
              <div className="project-detail-repository">
                <span>GITHUBURL</span>
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
                    <h2>
                      {selectedProject.details.overviewTitle ||
                        "Turning spending data into better decisions"}
                    </h2>
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
                    <h2>
                      {selectedProject.details.technicalTitle ||
                        "From financial data to predictive insight"}
                    </h2>
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
                    <h2>
                      {selectedProject.details.architectureTitle ||
                        "Connecting the application layers"}
                    </h2>
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
                    <h2>
                      {selectedProject.details.learningTitle ||
                        "Building reliable ML, not just accurate models"}
                    </h2>
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
                    <h2>
                      {selectedProject.details.integrationTitle ||
                        "Giving the AI copilot access to real application context"}
                    </h2>
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
                    <h2>
                      {selectedProject.details.finalLearningTitle ||
                        "Building an AI system as a product"}
                    </h2>
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
            WHY I BUILD
        ===================================================== */}

        <section
          id="about"
          className="section about"
        >

          <div className="about-reference-grid">

            <div className="about-reference-copy">

              <span className="section-index">
                SIGNAL
              </span>

              <h2>
                Why I Build
              </h2>


              <div className="about-reference-text">

                <p>
                  I've always been more interested in how things work than simply
                  using them.
                </p>

                <p>
                  A problem starts as an idea, an idea becomes a design, and a
                  design eventually becomes something people can interact with.
                  That process is what makes building software exciting to me.
                </p>

                <p>
                  My work has taken me across software engineering, AI, data,
                  mobile development and backend systems. I enjoy exploring
                  different technologies, but the technology itself is never the
                  goal. The goal is to understand the problem, find a better way
                  to solve it, and build something that actually works.
                </p>

                <p>
                  For me, good engineering is a continuous process — build,
                  break, learn, improve, repeat.
                </p>

              </div>

            </div>


            <div className="about-reference-visual" aria-hidden="true">
              <div className="about-signal-glow" />

              <div className="about-signal-network">
                <span className="signal-node signal-node-1" />
                <span className="signal-node signal-node-2" />
                <span className="signal-node signal-node-3" />
                <span className="signal-node signal-node-4" />
                <span className="signal-node signal-node-5" />
                <span className="signal-node signal-node-6" />
                <span className="signal-node signal-node-7" />
                <span className="signal-node signal-node-8" />
                <span className="signal-node signal-node-9" />
                <span className="signal-node signal-node-10" />
                <span className="signal-node signal-node-11" />
                <span className="signal-node signal-node-12" />
                <span className="signal-node signal-node-center" />

                <span className="signal-line signal-line-1" />
                <span className="signal-line signal-line-2" />
                <span className="signal-line signal-line-3" />
                <span className="signal-line signal-line-4" />
                <span className="signal-line signal-line-5" />
                <span className="signal-line signal-line-6" />
                <span className="signal-line signal-line-7" />
                <span className="signal-line signal-line-8" />
                <span className="signal-line signal-line-9" />
                <span className="signal-line signal-line-10" />
                <span className="signal-line signal-line-11" />
                <span className="signal-line signal-line-12" />
              </div>
            </div>

          </div>

        </section>


        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section
          id="experience"
          className="section experience"
        >

          <div className="section-head experience-head">

            <div>

              <span className="section-index">
                EXPERIENCE
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
            SELECTED WORK
        ===================================================== */}

        <section
          id="work"
          className="section work"
        >

          <div className="section-head">

            <div>

              <span className="section-index projects-section-label">
                SELECTED WORK
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
            TOOLKIT
        ===================================================== */}

        <section
          id="skills"
          className="section skills"
        >

          <div className="section-head">

            <div>

              <span className="section-index">
                TOOLKIT
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