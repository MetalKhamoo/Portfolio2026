import React from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import "./ContactEnding.css";

const GITHUB = "https://github.com/MetalKhamoo";
const LINKEDIN = "https://www.linkedin.com/in/pratham2704";
const EMAIL = "mailto:pratham.deepak.2704@gmail.com";

function ContactEnding() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="contact-ending" id="contact">
      <div className="contact-ending-inner">
        <span className="contact-ending-label">CONTACT</span>

        <h2>
          Let's Build Something
          <br />
          <em>Intelligent.</em>
        </h2>

        <p className="contact-ending-text">
          I'm interested in building AI-powered applications, data-driven
          systems, and practical software that solves real-world problems.
        </p>

        <a className="contact-ending-email" href={EMAIL}>
          pratham.deepak.2704@gmail.com
          <ArrowUpRight size={18} />
        </a>

        <div className="contact-ending-socials">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            GitHub
          </a>

          <a href={EMAIL}>
            <Mail size={16} />
            Email
          </a>
        </div>
      </div>

      <footer className="contact-ending-footer">
        <div className="contact-ending-footer-left">
          <strong>PRATHAM DEEPAK</strong>
          <span>
            Building intelligent systems for the real world.
          </span>
        </div>

        <div className="contact-ending-footer-right">
          <span>© 2026 · PRATHAM DEEPAK</span>

          <button onClick={backToTop}>
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </footer>
    </section>
  );
}

export default ContactEnding;