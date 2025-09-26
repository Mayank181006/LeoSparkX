import React from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";
const FooterCTA = () => {
  return (
    <footer className="bg-black relative dark:bg-white text-white dark:text-black px-6 py-16 md:py-24">
      {/* CTA Section */}

      <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Unlock Your Full Productivity Potential
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-80">
          LeoSparkX is built to keep you moving forward —{" "}
          <span className="font-semibold">try it for free.</span>
        </p>
        <AnimatedButton
          className="px-6 py-3 md:px-8 md:py-4 font-medium flex items-center"
          label="Try for free"
          bgClass="bg-white dark:bg-black"
          textClass="text-white dark:text-black"
          hoverTextClass="text-black dark:text-white"
        >
          <ArrowRight />
        </AnimatedButton>

      </div>

      {/* Divider */}
      <div className="my-12 border-t border-zinc-500 dark:border-zinc-800"></div>

      {/* Footer Links */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-70">
        {/* Left Side */}
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Twitter
          </a>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
          <a href="#" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
