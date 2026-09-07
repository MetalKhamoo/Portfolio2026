import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import "./HeroIntro.css";

function HeroIntro({ textY, textOpacity, scrollTo }) {
  return (
    <motion.div
      className="hero-intro"
      style={{
        y: textY,
        opacity: textOpacity,
      }}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <span className="hero-intro-kicker">
        HELLO, I'M
      </span>

      <h1 className="hero-intro-name">
        <span>Pratham</span>
        <span>Deepak</span>
      </h1>

      <p className="hero-intro-title">
        Building Intelligent Systems
      </p>

      <div className="hero-intro-education">
        <span>
          B.Tech Artificial Intelligence &amp; Data Science
        </span>

        <span>
          NMIMS Navi Mumbai · 2027
        </span>
      </div>

      <p className="hero-intro-description">
        I enjoy building intelligent applications, exploring
        machine learning, and creating software that turns
        ideas into practical solutions.
      </p>

      <div className="hero-intro-actions">
        <button
          className="primary"
          onClick={() => scrollTo("work")}
        >
          Explore my work
          <ArrowUpRight size={17} />
        </button>

        <a
          className="secondary"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download resume
          <Download size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default HeroIntro;