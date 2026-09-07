import React, { useEffect, useRef } from "react";
import "./NeuralBackground.css";

function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrame;
    let nodes = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const createNodes = () => {
      const count = Math.min(
        55,
        Math.floor(window.innerWidth / 25)
      );

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,

        radius: Math.random() * 1.5 + 0.5,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      createNodes();
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const draw = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      nodes.forEach((node) => {
        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (
            node.x < 0 ||
            node.x > canvas.width
          ) {
            node.vx *= -1;
          }

          if (
            node.y < 0 ||
            node.y > canvas.height
          ) {
            node.vy *= -1;
          }
        }

        /* Mouse interaction */

        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (distance < 140 && !reducedMotion) {
          node.x += dx / distance * 0.25;
          node.y += dy / distance * 0.25;
        }

        /* Node */

        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          node.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(85, 170, 255, 0.55)";

        ctx.fill();
      });

      /* Connections */

      for (let i = 0; i < nodes.length; i++) {
        for (
          let j = i + 1;
          j < nodes.length;
          j++
        ) {
          const dx =
            nodes[i].x - nodes[j].x;

          const dy =
            nodes[i].y - nodes[j].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 125) {
            const opacity =
              (1 - distance / 125) * 0.16;

            ctx.beginPath();

            ctx.moveTo(
              nodes[i].x,
              nodes[i].y
            );

            ctx.lineTo(
              nodes[j].x,
              nodes[j].y
            );

            ctx.strokeStyle =
              `rgba(85, 170, 255, ${opacity})`;

            ctx.lineWidth = 0.6;

            ctx.stroke();
          }
        }
      }

      /* Mouse glow */

      if (
        mouse.x > 0 &&
        mouse.y > 0
      ) {
        const gradient =
          ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            170
          );

        gradient.addColorStop(
          0,
          "rgba(85, 170, 255, 0.08)"
        );

        gradient.addColorStop(
          1,
          "rgba(85, 170, 255, 0)"
        );

        ctx.fillStyle = gradient;

        ctx.fillRect(
          mouse.x - 170,
          mouse.y - 170,
          340,
          340
        );
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

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-background"
      aria-hidden="true"
    />
  );
}

export default NeuralBackground;