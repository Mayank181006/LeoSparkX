import React from "react";
import { StarsBackground } from "@/components/shared/StarsBackground";
import { ShootingStars } from "@/components/shared/ShootingStars";
import { CometCard } from "../ui/comet-card";

const Features = () => {
    return (
        <section className="w-full bg-white dark:bg-black ">
            <div className="relative h-fit w-full px-6 flex flex-col items-center justify-center text-center -translate-y-[5%]">
                <ShootingStars className="z-0" />
                <StarsBackground className="z-0" />

                <div className="w-3/5 pt-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                        All-in-One Workspace
                        <span className="bg-gradient-to-t from-zinc-600 to-white bg-clip-text text-transparent text-stroke-2 "> for Your Productivity</span>
                    </h2>

                    {/* Subheading */}
                    <p className="mt-4 text-[16px] md:text-xl text-gray-600 dark:text-gray-400">
                        Manage tasks, track time, and stay organized — all in one seamless
                        platform designed to boost your productivity.
                    </p>
                </div>

                {/* Cards will go here */}
                <div className="mt-6 flex justify-evenly items-center space-y-6 md:my-10 flex-col md:flex-row gap-0 md:gap-8 w-full">
                    <CometCard className="">
                        <div
                            className="flex w-80 cursor-pointer flex-col rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-4"
                            aria-label="task and notes"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "none",
                                opacity: 1,
                            }}
                        >
                            <div className="px-2 flex">
                                <div className="relative mt-2 aspect-[5/4] w-full">
                                    <img
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] aspect-auto object-cover contrast-75"
                                        alt="todo background"
                                        src="/todo.png"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                            opacity: 1,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="p-2 flex w-full space-y-2 flex-col justify-between text-left">
                                <div className="text-transparent  font-mono bg-gradient-to-br from-zinc-500 to-white bg-clip-text">
                                    <h4>Task & Notes</h4>
                                </div>
                                <div className="text-white text-xl font-bold">
                                    <h1>Capture ideas, Conquer tasks!</h1>
                                </div>
                                <div className="text-xs text-gray-300 opacity-50">
                                    <p>Organize your thoughts, jot down quick notes, and keep track of tasks all in one place. From spontaneous ideas to daily to-dos, manage everything with ease.</p>
                                </div>
                            </div>
                        </div>
                    </CometCard>
                    <CometCard>
                        <div
                            className="flex w-80 cursor-pointer flex-col rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-4"
                            aria-label="task and notes"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "none",
                                opacity: 1,
                            }}
                        >
                            <div className="px-2 flex">
                                <div className="relative mt-2 aspect-[5/4] w-full">
                                    <img
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] aspect-auto object-cover contrast-75"
                                        alt="todo background"
                                        src="/todo.png"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                            opacity: 1,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="p-2 flex w-full space-y-2 flex-col justify-between text-left">
                                <div className="text-transparent  font-mono bg-gradient-to-br from-zinc-500 to-white bg-clip-text">
                                    <h4>Time Management</h4>
                                </div>
                                <div className="text-white text-xl font-bold">
                                    <h1>Master Your Schedule with Ease.</h1>
                                </div>
                                <div className="text-xs text-gray-300 opacity-50">
                                    <p>Stay on top of your schedule with timers, calendars, and a built-in stopwatch. Plan smartly, track your time, and boost productivity without the stress.</p>
                                </div>
                            </div>
                        </div>
                    </CometCard>
                    <CometCard>
                        <div
                            className="flex w-80 cursor-pointer flex-col rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-4"
                            aria-label="task and notes"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "none",
                                opacity: 1,
                            }}
                        >
                            <div className="px-2 flex">
                                <div className="relative mt-2 aspect-[5/4] w-full">
                                    <img
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] aspect-auto object-cover contrast-75"
                                        alt="todo background"
                                        src="/todo.png"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                            opacity: 1,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="p-2 flex w-full space-y-2 flex-col justify-between text-left">
                                <div className="text-transparent  font-mono bg-gradient-to-br from-zinc-500 to-white bg-clip-text">
                                    <h4>Progress Tracking</h4>
                                </div>
                                <div className="text-white text-xl font-bold">
                                    <h1>Measure Today, improve Tomorrow!</h1>
                                </div>
                                <div className="text-xs text-gray-300 opacity-50">
                                    <p>Track your progress effortlessly with visual insights and milestones. Reflect on your achievements today to shape a more productive tomorrow.</p>
                                </div>
                            </div>
                        </div>
                    </CometCard>
                </div>
            </div>
        </section>
    );
};

export default Features;
