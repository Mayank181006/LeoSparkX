"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ContainerScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "lg">("lg");

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth <= 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("lg");
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ GSAP animation
  useEffect(() => {
    if (!cardRef.current || !containerRef.current) return;

    let scaleFrom = 1.05;
    let scaleTo = 1;
    let rotateFrom = 50;

    // Adjust animation depending on screen
    if (screenSize === "mobile") {
      scaleFrom = 0.95;
      rotateFrom = 30;
    } else if (screenSize === "tablet") {
      scaleFrom = 1.02;
      rotateFrom = 40;
    } else {
      // large screens
      scaleFrom = 1.08;
      rotateFrom = 55;
    }

    gsap.fromTo(
      cardRef.current,
      {
        rotateX: rotateFrom,
        scale: scaleFrom,
        transformOrigin: "center center",
      },
      {
        rotateX: 0,
        scale: scaleTo,
        ease: "expo.inOut",
        scrollTrigger: { // shows start/end markers
          toggleActions: "play none none reverse",
          trigger: containerRef.current, // ✅ now it works
          start: "top 60%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [screenSize]);

  return (
    <div ref={containerRef} className="w-full " style={{ perspective: "1000px" }}>
      <Card ref={cardRef}>{children}</Card>
    </div>
  );
};

export const Card = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => (
  <div
    ref={ref}
    className="w-full h-[30rem] md:h-[35rem] lg:h-[40rem] overflow-hidden rounded-none"
  >
    <div className="h-full w-full overflow-hidden">{children}</div>
  </div>
));
