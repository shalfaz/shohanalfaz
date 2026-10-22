"use client";

import { useEffect, useRef } from "react";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let drops: number[] = [];
    let width = 0;
    let height = 0;
    let lastFrame = 0;
    const fontSize = 15;
    const characters = "010101001101001010101100101";
    const visibility = document.visibilityState;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.fillStyle = "#080B0A";
      context.fillRect(0, 0, width, height);
      drops = Array.from({ length: Math.ceil(width / fontSize) }, () => Math.random() * -40);
    };

    const draw = (timestamp: number) => {
      if (document.visibilityState !== "visible") {
        frame = 0;
        return;
      }
      if (timestamp - lastFrame < 42) {
        frame = window.requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;
      context.fillStyle = "rgba(8, 11, 10, 0.13)";
      context.fillRect(0, 0, width, height);
      context.font = `${fontSize}px monospace`;

      drops.forEach((drop, column) => {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = column * fontSize;
        const y = drop * fontSize;
        context.fillStyle = Math.random() > 0.985 ? "#65A9FF" : "rgba(57, 255, 136, 0.54)";
        context.fillText(char, x, y);
        if (y > height && Math.random() > 0.972) drops[column] = 0;
        else drops[column] = drop + 0.55;
      });
      frame = window.requestAnimationFrame(draw);
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };
    const start = () => {
      stop();
      if (!reducedMotion.matches && document.visibilityState === "visible") {
        frame = window.requestAnimationFrame(draw);
      }
    };
    const onMotionChange = () => {
      if (reducedMotion.matches) stop();
      else start();
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") start();
      else stop();
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    reducedMotion.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    if (visibility === "visible" && !reducedMotion.matches) start();

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      reducedMotion.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div className="matrix-backdrop" aria-hidden="true">
      <canvas ref={canvasRef} className="matrix-canvas" />
      <div className="matrix-shade" />
    </div>
  );
}
