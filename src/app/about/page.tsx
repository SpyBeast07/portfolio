import React from "react";
import Navbar from "@/components/Navbar";
import { TimelineItem } from "@/components/TimelineItem";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground relative selection:bg-yellow-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-0 opacity-40" />
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_90%)] z-0" />

            <div className="relative z-10 container mx-auto px-6 py-24 max-w-4xl">
                <div className="mb-12">
                    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
                        <Navbar mode="floating" />
                    </div>
                    <div className="mt-24">
                        <h1 className="font-playfair text-5xl font-bold text-white mb-6">About Me</h1>
                        <div className="text-neutral-400 leading-relaxed max-w-2xl text-lg font-outfit space-y-6">
                            <p>
                                I'm a developer and AI enthusiast with a passion for building pixel-perfect,
                                intuitive user interfaces. I thrive at the intersection of design and engineering,
                                creating robust and scalable code while ensuring a seamless user experience.
                            </p>
                            <p>
                                Currently, I'm exploring the frontiers of Generative AI and Large Language Models,
                                looking for ways to integrate intelligent agents into everyday web applications.
                                When I'm not coding, you can find me reading about the latest tech trends or
                                experimenting with new frameworks.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Resume Button */}
                <div className="mb-16">
                    <a
                        href="/resume"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        View Resume
                    </a>
                </div>

                <div className="space-y-4">
                    {/* Experience */}
                    <div className="mb-12">
                        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Experience</h4>
                        <TimelineItem
                            title="Frontend Developer Intern"
                            subtitle="TechCorp Inc."
                            date="2023 — Present"
                            description="Developed and maintained critical components for the main product dashboard. Improved site performance by 40% through code splitting and image optimization."
                            tags={["React", "TypeScript", "Tailwind", "Redux"]}
                        />
                        <TimelineItem
                            title="Freelance Web Developer"
                            subtitle="Self-Employed"
                            date="2021 — 2023"
                            description="Delivered custom web solutions for 5+ clients including e-commerce sites and portfolio websites. Managed end-to-end development lifecycle."
                            tags={["Next.js", "Shopify", "Figma"]}
                        />
                    </div>

                    {/* Education */}
                    <div>
                        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Education</h4>
                        <TimelineItem
                            title="Computer Science & Engineering"
                            subtitle="Bachelor of Technology"
                            date="2020 — 2024"
                            description="Focused on Data Structures, Algorithms, and Artificial Intelligence. Led the technical club and organized 3 major hackathons."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
