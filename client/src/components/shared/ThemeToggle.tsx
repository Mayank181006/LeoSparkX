"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
import { MoonIcon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="flex items-center transition p-2 rounded-xs hover:bg-black/10 dark:hover:bg-white/30 cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      {currentTheme === "dark" ? (
        <Sun className="size-5"/> 
      ) : (
        <MoonIcon className="size-5"/>
      )}
    </button>
  );
}
