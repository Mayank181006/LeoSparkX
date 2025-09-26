"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export const AnimatedButton = ({
  label,
  children,
  className = "",
  bgClass = "bg-black dark:bg-white",
  textClass = "text-white dark:text-black",
  hoverTextClass = "text-black dark:text-white", // text color when active
  type = "button",
  ...props
}: {
  label: string;
  children?: React.ReactNode;
  className?: string;
  bgClass?: string;       // background for animation
  textClass?: string;     // default text color
  hoverTextClass?: string; // text color when overlay slides
  type?: "button" | "submit" | "reset";
}) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    gsap.set(bgRef.current, { y: "100%" });
  }, []);

  const animateIn = () => {
    gsap.to(bgRef.current, { y: "0%", duration: 0.4, ease: "power3.out" });
    if (iconRef.current) gsap.to(iconRef.current, { rotate: -45, duration: 0.4, ease: "power3.out" });
    setIsActive(true);
  };

  const animateOut = () => {
    gsap.to(bgRef.current, { y: "100%", duration: 0.4, ease: "power3.inOut" });
    if (iconRef.current) gsap.to(iconRef.current, { rotate: 0, duration: 0.4, ease: "power3.inOut" });
    setIsActive(false);
  };

  return (
    <button
      type={type}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      onTouchStart={() => (isActive ? animateOut() : animateIn())}
      {...props}
      className={`relative border rounded-full overflow-hidden cursor-pointer flex items-center gap-2 transition ${className}`}
    >
      {/* Background Animation */}
      <div
        ref={bgRef}
        className={`absolute inset-0 rounded-full ${bgClass}`}
        style={{ transform: "translateY(100%)" }}
      />

      {/* Button Label */}
      <span
        className={`relative z-10 transition-colors duration-300 ${
          isActive ? hoverTextClass : textClass
        }`}
      >
        {label}
      </span>

      {/* Optional Icon */}
      {children && (
        <span
          ref={iconRef}
          className={`relative z-10 flex items-center transition-colors duration-300 ${
            isActive ? hoverTextClass : textClass
          }`}
        >
          {children}
        </span>
      )}
    </button>
  );
};
