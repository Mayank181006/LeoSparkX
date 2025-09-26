'use client';

import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/marquee";
import { CheckSquare, BookMarked, Calendar, Heart, ClipboardList, ChevronUp } from "lucide-react";
import { StarsBackground } from "../shared/StarsBackground";
import { ShootingStars } from "../shared/ShootingStars";

const featuresRow1 = [
    {
        icon: <CheckSquare className="h-6 w-6 text-black dark:text-white" />,
        title: "Smart Todo Lists",
        description: "Organize tasks with reminders and prioritization."
    },
    {
        icon: <BookMarked className="h-6 w-6 text-black dark:text-white" />,
        title: "Link Management",
        description: "Categorize and retrieve bookmarks easily."
    },
    {
        icon: <Calendar className="h-6 w-6 text-black dark:text-white" />,
        title: "Calendar Tasks",
        description: "Plan with calendar view and deadlines."
    },
];

const featuresRow2 = [
    {
        icon: <Heart className="h-6 w-6 text-black dark:text-white" />,
        title: "Habit Tracker",
        description: "Build and track habits daily with streaks."
    },
    {
        icon: <ClipboardList className="h-6 w-6 text-black dark:text-white" />,
        title: "Organized Notes",
        description: "Capture and structure ideas neatly."
    },
    {
        icon: <CheckSquare className="h-6 w-6 text-black dark:text-white" />,
        title: "Quick Tasks",
        description: "Fast add small tasks without friction."
    },
];

export default function FeaturesMarquee() {
    return (
        <div className="flex relative flex-col gap-8 items-center justify-center py-10 bg-white dark:bg-black">
            <StarsBackground />
            <ShootingStars />

            {/* Heading */}
            <div className="text-center mb-4 flex items-center gap-3">
                <ChevronUp className="size-8 text-black dark:text-white" />
                <h2 className="text-2xl md:text-5xl font-bold text-black dark:text-white">
                    Features Overview
                </h2>
            </div>

            {/* Row 1 → Left to Right */}
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent speed={50}>
                    {featuresRow1.map((feature, idx) => (
                        <MarqueeItem key={idx}>
                            <div className="w-72 h-32 md:w-80 md:h-36 lg:w-96 lg:h-40 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 shadow-sm p-4 flex flex-col justify-center gap-2">
                                <div className="flex items-center gap-2">
                                    {feature.icon}
                                    <h3 className="font-semibold text-lg text-black dark:text-white">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>

            {/* Row 2 → Right to Left */}
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent speed={50} direction="right">
                    {featuresRow2.map((feature, idx) => (
                        <MarqueeItem key={idx}>
                            <div className="w-72 h-32 md:w-80 md:h-36 lg:w-96 lg:h-40 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 shadow-sm p-4 flex flex-col justify-center gap-2">
                                <div className="flex items-center gap-2">
                                    {feature.icon}
                                    <h3 className="font-semibold text-lg text-black dark:text-white">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </div>


    );
}
