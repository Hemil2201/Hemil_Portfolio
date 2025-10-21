"use client";

import { useEffect, useState } from "react";

const codeSnippets = [
  "const",
  "function",
  "return",
  "import",
  "export",
  "async",
  "await",
  "{",
  "}",
  "=>",
  "( )",
  "[ ]",
  "if",
  "else",
  "for",
  "map",
  "filter",
  "React",
  "Node",
  "AWS",
  "Python",
  "Django",
];

// Logos stored in public/logos/
const logos = [
  { name: "React", src: "/logos/react.svg" },
  { name: "Python", src: "/logos/python.svg" },
  { name: "Django", src: "/logos/django.svg" },
  { name: "Node.js", src: "/logos/nodejs.svg" },
  { name: "Angular", src: "/logos/angular.svg" },
  { name: "JavaScript", src: "/logos/javascript.svg" },
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "PostgreSQL", src: "/logos/postgresql.svg" },
  { name: "MongoDB", src: "/logos/mongodb.svg" },
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "Jenkins", src: "/logos/jenkins.svg" },
];

interface FloatingItem {
  id: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  type: "text" | "logo";
  content: string;
  logoSrc?: string;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  scaleSpeed: number;
}

export default function AnimatedFloatingTech() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const newItems: FloatingItem[] = [];

    // Add logos (one of each)
    logos.forEach((logo, i) => {
      newItems.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        type: "logo",
        content: "",
        logoSrc: logo.src,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
        scale: 1,
        scaleSpeed: 0,
      });
    });

    // Add code snippets (one of each)
    codeSnippets.forEach((snippet, i) => {
      newItems.push({
        id: i + logos.length,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        type: "text",
        content: snippet,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
        scale: 1,
        scaleSpeed: (Math.random() - 0.5) * 0.005,
      });
    });

    setItems(newItems);

    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => {
          let newX = item.x + item.speedX;
          let newY = item.y + item.speedY;
          if (newX > window.innerWidth) newX = 0;
          if (newX < 0) newX = window.innerWidth;
          if (newY > window.innerHeight) newY = 0;
          if (newY < 0) newY = window.innerHeight;

          const newRotation = item.rotation + item.rotationSpeed;
          const newScale =
            item.type === "logo"
              ? 1
              : Math.max(0.8, Math.min(1.2, item.scale + item.scaleSpeed));

          return {
            ...item,
            x: newX,
            y: newY,
            rotation: newRotation,
            scale: newScale,
          };
        })
      );
    }, 16);

    const handleResize = () => {
      setItems((prev) =>
        prev.map((item) => ({
          ...item,
          x: Math.min(item.x, window.innerWidth),
          y: Math.min(item.y, window.innerHeight),
        }))
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {items.map((item) =>
        item.type === "logo" && item.logoSrc ? (
          <img
            key={item.id}
            src={item.logoSrc}
            alt={item.type}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
              width: 30,
              height: 30,
              opacity: 0.6,
              transform: `rotate(${item.rotation}deg)`,
              transformOrigin: "center center",
            }}
          />
        ) : (
          <span
            key={item.id}
            className="absolute text-gray-400 font-mono"
            style={{
              left: item.x,
              top: item.y,
              fontSize: 16 * item.scale,
              opacity: 0.5,
              transform: `rotate(${item.rotation}deg)`,
              transformOrigin: "center center",
            }}
          >
            {item.content}
          </span>
        )
      )}
    </div>
  );
}
