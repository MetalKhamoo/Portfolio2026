import React from "react";
import { motion } from "framer-motion";
import "./HeroEffects.css";

function HeroEffects({
  backgroundY,
  networkY,
  glowScale,
  glowOpacity,
}) {
  return (
    <div className="hero-effects" aria-hidden="true">

      {/* Deepest background glow */}

      <motion.div
        className="hero-depth-glow"
        style={{
          y: backgroundY,
        }}
      />

      {/* Large atmospheric ring */}

      <motion.div
        className="hero-orbit hero-orbit-one"
        style={{
          y: networkY,
        }}
      />

      <motion.div
        className="hero-orbit hero-orbit-two"
        style={{
          y: networkY,
        }}
      />

      {/* Expanding glow behind portrait */}

      <motion.div
        className="hero-photo-glow"
        style={{
          scale: glowScale,
          opacity: glowOpacity,
        }}
      />

    </div>
  );
}

export default HeroEffects;