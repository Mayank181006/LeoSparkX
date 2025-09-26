import { cn } from "@/lib/utils";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { ContainerTextFlip } from "../ui/container-text-flip";

export function Hero() {
    return (
        <div>
            {/* Hero Main Container */}
            <div className="relative flex h-fit w-full items-center justify-center bg-white dark:bg-black transition-colors duration-500">

                {/* Grid Background */}
                <div
                    className={cn(
                        "absolute inset-0",
                        // tighter grid + thicker lines
                        "[background-size:50px_50px]",
                        "[background-image:linear-gradient(to_right,#616161_1px,transparent_1px),linear-gradient(to_bottom,#616161_1px,transparent_1px)]",
                        // dark mode more visible lines
                        "dark:[background-image:linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]"
                    )}
                />


                {/* Radial Gradient Mask */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] transition-colors duration-500" />

                {/* Hero Content */}
                <div className="relative h-[70vh] z-10 space-y-4 flex flex-col items-center justify-center text-center px-4">
                    {/* Logo */}
                    <div className="bg-[url('/logo.jpg')] bg-cover bg-center size-16 md:size-20 rounded-2xl hover:scale-105 hover:shadow-[2px_2px_3px_white] transition-all cursor-pointer duration-700 ease-in-out" />

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-gray-100 transition-colors duration-500">
                        Spark Your Productivity
                    </h1>

                    {/* Subtitle */}
                    <div className="flex flex-wrap items-center">
                        <p className="text-[16px] md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 transition-colors duration-500">
                            LeoSparkX helps you manage tasks, track time, and hit your goals —
                            <span className="ml-2 mt-1 md:mt-0 inline-block text-[16px] font-bold text-white md:text-xl lg:text-2xl dark:text-black">
                                <ContainerTextFlip />
                            </span>
                        </p>
                    </div>

                    {/* Button */}
                    <HoverBorderGradient>Get Started</HoverBorderGradient>

                </div>
            </div>

            {/* Scroll Section */}
            <div className="flex flex-col overflow-hidden -translate-y-[20%]">
                <ContainerScroll>
                    <img
                        src={`/dashboard.png`}
                        alt="hero"
                        className="mx-auto rounded-2xl object-cover h-100 lg:h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </div>
    );
}
