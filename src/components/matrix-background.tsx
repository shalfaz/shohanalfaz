"use client";

import { useEffect, useRef } from "react";

type RainColumn = {
  headY: number;
  speed: number;
  brightness: number;
  glyphs: string[];
};

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const characters = "010101001101001010101100101";
    let frame = 0;
    let columns: RainColumn[] = [];
    let width = 0;
    let height = 0;
    let fontSize = 15;
    let columnGap = 27;
    let glyphGap = 27;
    let frameInterval = 40;
    let lastFrame = 0;
    let lastDraw = 0;

    const makeColumn = (headY: number): RainColumn => ({
      headY,
      speed: 17 + Math.random() * 17,
      brightness: 0.62 + Math.random() * 0.3,
      glyphs: Array.from(
        { length: 5 + Math.floor(Math.random() * 5) },
        () => characters[Math.floor(Math.random() * characters.length)],
      ),
    });

    const resize = () => {
      const mobile = window.matchMedia("(max-width: 650px)").matches;
      const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.25);
      width = window.innerWidth;
      height = window.innerHeight;
      fontSize = 15;
      columnGap = mobile ? 31 : 27;
      glyphGap = fontSize * 1.8;
      frameInterval = mobile ? 52 : 40;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Array.from(
        { length: Math.ceil(width / columnGap) },
        () => makeColumn(Math.random() * (height + glyphGap * 8)),
      );
      lastDraw = 0;
      paintBackground();
    };

    const paintBackground = () => {
      context.globalAlpha = 1;
      context.shadowBlur = 0;
      context.fillStyle = "#080B0A";
      context.fillRect(0, 0, width, height);
    };

    const draw = (timestamp: number) => {
      if (document.visibilityState !== "visible" || reducedMotion.matches) {
        frame = 0;
        return;
      }
      if (timestamp - lastFrame < frameInterval) {
        frame = window.requestAnimationFrame(draw);
        return;
      }

      const delta = lastDraw ? Math.min(timestamp - lastDraw, 80) / 1000 : frameInterval / 1000;
      lastDraw = timestamp;
      lastFrame = timestamp;
      paintBackground();
      context.font = `600 ${fontSize}px monospace`;
      context.textBaseline = "top";
      context.shadowColor = "#39FF88";

      columns.forEach((column, index) => {
        const x = Math.round(index * columnGap);
        column.glyphs.forEach((character, glyphIndex) => {
          const y = Math.round(column.headY - glyphIndex * glyphGap);
          if (y < -fontSize || y > height) return;

          const tailBrightness = 1 - glyphIndex / (column.glyphs.length + 1);
          context.globalAlpha = column.brightness * (0.38 + tailBrightness * 0.62);
          context.fillStyle = glyphIndex === 0 ? "#9CFFB9" : "#39FF88";
          context.shadowBlur = glyphIndex === 0 ? 4 : 1;
          context.fillText(character, x, y);
        });

        column.headY += column.speed * delta;
        if (column.headY - column.glyphs.length * glyphGap > height) {
          const nextColumn = makeColumn(0);
          nextColumn.headY = -Math.random() * nextColumn.glyphs.length * glyphGap;
          columns[index] = nextColumn;
        }
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;
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
      if (reducedMotion.matches) {
        stop();
        paintBackground();
      } else {
        start();
      }
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") start();
      else stop();
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    reducedMotion.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    if (!reducedMotion.matches && document.visibilityState === "visible") start();

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
