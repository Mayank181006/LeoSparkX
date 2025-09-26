"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, currentColor 0%, transparent 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, currentColor 0%, transparent 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, currentColor 0%, transparent 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, currentColor 0%, transparent 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15% at 50% 50%, currentColor 0%, transparent 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border transition duration-500 items-center justify-center overflow-visible p-px w-fit",
        "border-black dark:border-white",
        containerClassName
      )}
      {...props}
    >
      {/* Inner content */}
      <div
        className={cn(
          "w-auto z-10 px-4 py-2 rounded-[inherit]",
          "bg-white text-black dark:bg-black dark:text-white",
          className
        )}
      >
        {children}
      </div>

      {/* Glow animation - Light mode */}
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit] flex dark:hidden"
        style={{
          filter: "blur(6px)",
          width: "100%",
          height: "100%",
          color: "black",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      {/* Glow animation - Dark mode */}
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit] hidden dark:flex"
        style={{
          filter: "blur(6px)",
          width: "100%",
          height: "100%",
          color: "white",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      {/* Solid fill behind content */}
      <div className="absolute inset-[2px] rounded-[inherit] z-[1] bg-white dark:bg-black" />
    </Tag>
  );
}
