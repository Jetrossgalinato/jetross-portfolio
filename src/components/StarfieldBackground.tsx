"use client";
import { useState, useEffect, useRef } from "react";

interface StarryBackgroundProps {
  className?: string;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function StarryBackground({
  className = "",
}: StarryBackgroundProps) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [smoothPosition, setSmoothPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const animationFrameRef = useRef<number | null>(null); // Fixed: Added initial value

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const targetX = (e.clientX / window.innerWidth - 0.5) * 20;
      const targetY = (e.clientY / window.innerHeight - 0.5) * 20;

      setMousePosition({ x: targetX, y: targetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth interpolation for mouse movement
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.08), // Adjust lerp factor for smoothness (0.05-0.15)
        y: lerp(prev.y, mousePosition.y, 0.08),
      }));

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);

  // Generate star data for better performance
  const largeStars = [
    { id: 1, top: "20%", left: "20%", delay: 0, speed: 0.8 },
    { id: 2, top: "32%", right: "40%", delay: 300, speed: 0.6 },
    { id: 3, top: "60%", left: "60%", delay: 700, speed: 0.9 },
    { id: 4, top: "40%", right: "80%", delay: 500, speed: 0.7 },
    { id: 5, top: "80%", left: "40%", delay: 1000, speed: 0.5 },
    { id: 6, top: "24%", left: "80%", delay: 200, speed: 0.8 },
    { id: 7, top: "96%", right: "60%", delay: 800, speed: 0.6 },
    { id: 8, top: "12%", left: "96%", delay: 1200, speed: 0.7 },
    { id: 9, top: "56%", right: "12%", delay: 400, speed: 0.9 },
    { id: 10, top: "84%", left: "24%", delay: 1500, speed: 0.5 },
    { id: 11, top: "68%", right: "96%", delay: 600, speed: 0.8 },
  ];

  const mediumStars = [
    { id: 1, top: "16%", right: "20%", delay: 400, speed: 0.4 },
    { id: 2, top: "48%", left: "32%", delay: 600, speed: 0.3 },
    { id: 3, top: "72%", right: "32%", delay: 900, speed: 0.5 },
    { id: 4, top: "36%", left: "72%", delay: 100, speed: 0.6 },
    { id: 5, top: "88%", right: "88%", delay: 1100, speed: 0.4 },
    { id: 6, top: "8%", left: "56%", delay: 800, speed: 0.3 },
    { id: 7, top: "64%", right: "8%", delay: 1300, speed: 0.5 },
    { id: 8, top: "92%", left: "88%", delay: 200, speed: 0.4 },
    { id: 9, top: "28%", right: "72%", delay: 1000, speed: 0.6 },
  ];

  const smallStars = [
    { id: 1, top: "28%", left: "48%", opacity: 0.8, speed: 0.2 },
    { id: 2, top: "52%", right: "52%", opacity: 0.6, speed: 0.1 },
    { id: 3, top: "76%", left: "76%", opacity: 0.7, speed: 0.15 },
    { id: 4, top: "44%", right: "44%", opacity: 0.5, speed: 0.25 },
    { id: 5, top: "92%", left: "52%", opacity: 0.8, speed: 0.2 },
    { id: 6, top: "12%", right: "72%", opacity: 0.6, speed: 0.1 },
    { id: 7, top: "4%", left: "36%", opacity: 0.7, speed: 0.15 },
    { id: 8, top: "20%", right: "16%", opacity: 0.5, speed: 0.2 },
    { id: 9, top: "36%", left: "12%", opacity: 0.8, speed: 0.1 },
    { id: 10, top: "56%", right: "24%", opacity: 0.6, speed: 0.25 },
    { id: 11, top: "68%", left: "8%", opacity: 0.75, speed: 0.15 },
    { id: 12, top: "84%", right: "36%", opacity: 0.55, speed: 0.2 },
    { id: 13, top: "96%", left: "16%", opacity: 0.65, speed: 0.1 },
    { id: 14, top: "16%", left: "64%", opacity: 0.7, speed: 0.25 },
    { id: 15, top: "32%", right: "84%", opacity: 0.45, speed: 0.15 },
    { id: 16, top: "48%", left: "92%", opacity: 0.85, speed: 0.2 },
    { id: 17, top: "64%", right: "48%", opacity: 0.6, speed: 0.1 },
    { id: 18, top: "80%", left: "72%", opacity: 0.75, speed: 0.25 },
  ];

  const twinklingStars = [
    { id: 1, top: "25%", left: "25%", delay: 2000, speed: 0.3 },
    { id: 2, top: "75%", right: "25%", delay: 4000, speed: 0.4 },
    { id: 3, top: "50%", left: "75%", delay: 6000, speed: 0.2 },
    { id: 4, top: "17%", right: "33%", delay: 8000, speed: 0.5 },
    { id: 5, top: "83%", left: "17%", delay: 10000, speed: 0.3 },
  ];

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Glow Effect */}
      <div className="absolute inset-x-0 top-0 h-[300px] z-0 bg-gradient-radial from-transparent via-transparent to-transparent dark:from-green-500/30 dark:via-transparent dark:to-transparent blur-3xl animate-pulse" />

      {/* Night Sky / Day Sky Background */}
      <div className="absolute inset-0 bg-white dark:bg-black dark:from-gray-900 dark:via-indigo-950 dark:to-black light:from-blue-50 light:via-indigo-100 light:to-purple-100 transition-colors duration-500" />

      {/* Large Stars - Smooth Mouse Interactive */}
      <div className="absolute inset-0 overflow-hidden">
        {largeStars.map((star) => (
          <div
            key={`large-${star.id}`}
            className="absolute w-1 h-1 bg-black dark:bg-white light:bg-black rounded-full animate-pulse star-large"
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              animationDelay: `${star.delay}ms`,
              transform: `translate3d(${smoothPosition.x * star.speed}px, ${
                smoothPosition.y * star.speed
              }px, 0)`,
              transition: "transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        ))}
      </div>

      {/* Medium Stars - Smooth Mouse Interactive */}
      <div className="absolute inset-0 overflow-hidden">
        {mediumStars.map((star) => (
          <div
            key={`medium-${star.id}`}
            className="absolute w-0.5 h-0.5 bg-black dark:bg-white light:bg-gray-800 rounded-full animate-pulse star-medium"
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              animationDelay: `${star.delay}ms`,
              transform: `translate3d(${smoothPosition.x * star.speed}px, ${
                smoothPosition.y * star.speed
              }px, 0)`,
              transition:
                "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        ))}
      </div>

      {/* Small Stars - Subtle Smooth Movement */}
      <div className="absolute inset-0 overflow-hidden">
        {smallStars.map((star) => (
          <div
            key={`small-${star.id}`}
            className="absolute w-px h-px bg-black dark:bg-white light:bg-gray-600 rounded-full star-small"
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              opacity: star.opacity,
              transform: `translate3d(${smoothPosition.x * star.speed}px, ${
                smoothPosition.y * star.speed
              }px, 0)`,
              transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        ))}
      </div>

      {/* Twinkling Stars Animation - Smooth */}
      <div className="absolute inset-0">
        {twinklingStars.map((star) => (
          <div
            key={`twinkle-${star.id}`}
            className="absolute w-2 h-2 bg-white dark:bg-white light:bg-black rounded-full opacity-0 animate-ping star-twinkle"
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              animationDelay: `${star.delay}ms`,
              transform: `translate3d(${smoothPosition.x * star.speed}px, ${
                smoothPosition.y * star.speed
              }px, 0)`,
              transition:
                "transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shooting-star shooting-star-1" />
        <div className="shooting-star shooting-star-2" />
        <div className="shooting-star shooting-star-3" />
      </div>

      {/* Constellation Lines - Responsive to mouse */}
      <div className="absolute inset-0 constellation-lines">
        <svg className="w-full h-full opacity-20 dark:opacity-30">
          <line
            x1="20%"
            y1="20%"
            x2="32%"
            y2="40%"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400 dark:text-gray-300 constellation-line"
            style={{
              transform: `translate3d(${smoothPosition.x * 0.1}px, ${
                smoothPosition.y * 0.1
              }px, 0)`,
              transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
          <line
            x1="60%"
            y1="60%"
            x2="80%"
            y2="40%"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400 dark:text-gray-300 constellation-line"
            style={{
              transform: `translate3d(${smoothPosition.x * 0.05}px, ${
                smoothPosition.y * 0.05
              }px, 0)`,
              transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
          <line
            x1="24%"
            y1="80%"
            x2="40%"
            y2="80%"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400 dark:text-gray-300 constellation-line"
            style={{
              transform: `translate3d(${smoothPosition.x * 0.15}px, ${
                smoothPosition.y * 0.15
              }px, 0)`,
              transition:
                "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        </svg>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(-100px) translateY(50px) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-50px)
              rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes starFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1) rotate(0deg);
          }
          25% {
            transform: translateY(-2px) scale(1.05) rotate(1deg);
          }
          50% {
            transform: translateY(-1px) scale(0.95) rotate(-1deg);
          }
          75% {
            transform: translateY(-3px) scale(1.02) rotate(0.5deg);
          }
        }

        @keyframes starShimmer {
          0%,
          100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.7;
            filter: brightness(1.3);
          }
        }

        @keyframes constellationPulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .star-large {
          animation: starFloat 8s ease-in-out infinite,
            starShimmer 3s ease-in-out infinite;
          will-change: transform;
        }

        .star-medium {
          animation: starFloat 12s ease-in-out infinite,
            starShimmer 4s ease-in-out infinite;
          will-change: transform;
        }

        .star-small {
          animation: starFloat 15s ease-in-out infinite,
            starShimmer 5s ease-in-out infinite;
          will-change: transform;
        }

        .star-twinkle {
          animation: ping 6s cubic-bezier(0, 0, 0.2, 1) infinite;
          will-change: transform;
        }

        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, transparent, white, transparent);
          border-radius: 50%;
          opacity: 0;
        }

        .shooting-star-1 {
          top: 20%;
          left: -100px;
          animation: shootingStar 8s linear infinite;
          animation-delay: 3s;
        }

        .shooting-star-2 {
          top: 60%;
          left: -100px;
          animation: shootingStar 12s linear infinite;
          animation-delay: 8s;
        }

        .shooting-star-3 {
          top: 40%;
          left: -100px;
          animation: shootingStar 15s linear infinite;
          animation-delay: 15s;
        }

        .constellation-line {
          animation: constellationPulse 6s ease-in-out infinite;
          will-change: transform;
        }

        .dark .shooting-star {
          background: linear-gradient(45deg, transparent, #ffffff, transparent);
        }

        .light .shooting-star {
          background: linear-gradient(45deg, transparent, #000000, transparent);
        }

        /* Smooth performance optimizations */
        .constellation-lines {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
