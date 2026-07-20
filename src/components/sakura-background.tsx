"use client";

import { useEffect, useRef, useState } from "react";

type Leaf = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  phase: number;
};

function createLeaf(id: number, width: number, height: number): Leaf {
  const size = 8 + Math.random() * 8;
  return {
    id,
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: 0.05 + Math.random() * 0.12,
    size,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 0.12,
    phase: Math.random() * Math.PI * 2,
  };
}

export default function SakuraBackground() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const count = Math.max(28, Math.min(60, Math.round(width / 90)));

    setLeaves(
      Array.from({ length: count }, (_, index) => createLeaf(index, width, height))
    );

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { ...mouseRef.current, active: false };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let frameId = 0;

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mouse = mouseRef.current;
      const time = performance.now() * 0.0001;

      setLeaves((prev) =>
        prev.map((leaf) => {
          let { x, y, vx, vy, rotation, rotationSpeed, phase } = leaf;

          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const distance = Math.hypot(dx, dy) || 1;
            const radius = 110 + leaf.size * 1.1;

            if (distance < radius) {
              const push = ((radius - distance) / radius) * 0.018;
              vx += (dx / distance) * push;
              vy += (dy / distance) * push;
            }
          }

          vx *= 0.985;
          vy *= 0.985;
          vx += Math.sin(phase + time * 0.9) * 0.0008;
          vy += 0.00016;

          x += vx;
          y += vy;

          if (x < -leaf.size * 2) {
            x = width + leaf.size;
            vx = Math.abs(vx) * 0.35;
          } else if (x > width + leaf.size * 2) {
            x = -leaf.size;
            vx = -Math.abs(vx) * 0.35;
          }

          if (y < -leaf.size * 2) {
            y = height + leaf.size;
            vy = Math.abs(vy) * 0.35;
          } else if (y > height + leaf.size * 2) {
            y = -leaf.size;
            vy = -Math.abs(vy) * 0.35;
          }

          if (x <= 0 || x >= width) {
            vx *= -0.85;
            x = Math.max(0, Math.min(width, x));
          }

          if (y <= 0 || y >= height) {
            vy *= -0.85;
            y = Math.max(0, Math.min(height, y));
          }

          rotation += rotationSpeed * 1.2;

          return { ...leaf, x, y, vx, vy, rotation };
        })
      );

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute opacity-70"
          style={{
            left: leaf.x,
            top: leaf.y,
            width: leaf.size,
            height: leaf.size,
            transform: `translate(-50%, -50%) rotate(${leaf.rotation}deg)`,
            filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.12))",
          }}
        >
          <svg viewBox="0 0 16 16" className="h-full w-full">
            <rect x="5" y="1" width="6" height="4" fill="#ff9abd" />
            <rect x="4" y="5" width="8" height="3" fill="#ff86b8" />
            <rect x="3" y="8" width="10" height="3" fill="#ff72af" />
            <rect x="6" y="11" width="4" height="2" fill="#ffd5e6" />
            <rect x="7" y="2" width="2" height="8" fill="#9a3355" />
          </svg>
        </div>
      ))}
    </div>
  );
}
