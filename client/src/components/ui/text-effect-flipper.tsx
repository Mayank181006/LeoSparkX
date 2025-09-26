"use client";

import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
  href: string;
  className?: string; // pass custom Tailwind classes
  target?: "_blank" | "_self"; // optional
}

const FlipLink: React.FC<FlipLinkProps> = ({
  children,
  href,
  className = "text-base sm:text-lg md:text-xl font-semibold uppercase dark:text-white/90",
  target = "_self",
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target={target}
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
      style={{ lineHeight: 1 }}
    >
      {/* Top letters */}
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* Bottom letters (hover) */}
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
