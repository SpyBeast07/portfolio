import React from "react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

export default function Work() {
    return (
        <section id="work" className="mb-24 scroll-mt-24">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-white">Work</h2>

            {/* Project Count Text */}
            <div className="mb-8">
                <p className="text-4xl font-bold text-neutral-200 font-playfair">
                    10+ <span className="text-neutral-500 text-2xl font-normal font-sans">projects and counting...</span>
                </p>
            </div>

            {/* Contribution Graph (Placeholder) */}
            <div className="mb-12 border border-white/10 rounded-lg p-4 bg-[#0d1117] overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-neutral-400">GitHub Contributions</h4>
                    <span className="text-xs text-neutral-600">Last Year</span>
                </div>
                {/* Visual simulation of a contribution graph */}
                <div className="flex gap-1 overflow-x-auto pb-2 opacity-50">
                    {Array.from({ length: 53 }).map((_, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            {Array.from({ length: 7 }).map((_, j) => {
                                // Random contribution level
                                const level = Math.random() > 0.7 ? (Math.random() > 0.5 ? "bg-green-500" : "bg-green-900") : "bg-neutral-800";
                                return <div key={j} className={`w-2.5 h-2.5 rounded-sm ${level}`} />;
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Projects Grid */}
            <div className="grid grid-cols-1 gap-6">
                <ProjectCard
                    title="AI Code Assistant"
                    description="A VS Code extension that uses local LLMs to suggest code completions. 1k+ installs on marketplace."
                    tags={["Python", "TypeScript", "LlamaCP"]}
                    link="#"
                />
                <ProjectCard
                    title="Portfolio V1"
                    description="The first iteration of my personal portfolio built with pure HTML/CSS and minimal JS."
                    tags={["HTML", "CSS", "Gulp"]}
                    link="#"
                />
            </div>

            <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 mt-6 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
                View More Projects <span className="text-yellow-500">→</span>
            </Link>
        </section>
    );
}
