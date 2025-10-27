"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const warpRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 400 }, () => ({
      x: Math.random() * w - w / 2,
      y: Math.random() * h - h / 2,
      z: Math.random() * w,
    }));

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    // 🌀 Warp effect control
    let warpFactor = 1;
    let warpTarget = 1;

    function triggerWarp() {
      warpTarget = 10; // warp boost
      setTimeout(() => (warpTarget = 1), 1500); // return to normal after 1.5s
    }

    // Expose trigger to window (you can call this anywhere)
    // e.g., window.startWarp()
    (window as any).startWarp = triggerWarp;

    function animate() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);

      // Smoothly interpolate warpFactor
      warpFactor += (warpTarget - warpFactor) * 0.05;

      for (const s of stars) {
        s.z -= warpFactor * 4;
        if (s.z <= 0) s.z = w;

        const k = 128.0 / s.z;
        const px = s.x * k + w / 2;
        const py = s.y * k + h / 2;

        if (px >= 0 && px <= w && py >= 0 && py <= h) {
          const size = (1 - s.z / w) * 2;
          ctx.fillStyle = "white";
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();

          // ⚡ Stretch trail during warp
          if (warpFactor > 1.2) {
            ctx.strokeStyle = "white";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px - (s.x / s.z) * warpFactor * 8, py - (s.y / s.z) * warpFactor * 8);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
