"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseOpacity: number;
  twinkleSpeed: number | null;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]); // store stars outside state

  // Generate stars once on mount or resize
  const generateStars = (width: number, height: number) => {
    const area = width * height;
    const numStars = Math.floor(area * starDensity);

    starsRef.current = Array.from({ length: numStars }, () => {
      const shouldTwinkle =
        allStarsTwinkle || Math.random() < twinkleProbability;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.05 + 0.5,
        baseOpacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: shouldTwinkle
          ? minTwinkleSpeed +
            Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
          : null,
      };
    });
  };

  // Handle resizing
  useEffect(() => {
    const updateStars = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      generateStars(width, height);
    };

    updateStars();
    window.addEventListener("resize", updateStars);

    return () => window.removeEventListener("resize", updateStars);
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      starsRef.current.forEach((star) => {
        let opacity = star.baseOpacity;
        if (star.twinkleSpeed) {
          opacity =
            0.5 + Math.abs(Math.sin(time / star.twinkleSpeed) * 0.5);
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0", className)}
    />
  );
};
