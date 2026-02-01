import React from "react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

export default function Work() {
    return (
        <section id="work" className="mb-24 lg:mb-40 scroll-mt-24">
            {/* Heading */}
            <h2
                className="font-playfair text-3xl font-bold mb-8"
                style={{ color: "var(--foreground)" }}
            >
                Work
            </h2>

            {/* Project Count */}
            <div className="mb-8">
                <p
                    className="text-4xl font-bold font-playfair"
                    style={{ color: "var(--foreground)" }}
                >
                    10+{" "}
                    <span
                        className="text-2xl font-normal font-sans"
                        style={{
                            color: "color-mix(in oklab, var(--foreground) 55%, transparent)",
                        }}
                    >
                        projects and counting...
                    </span>
                </p>
            </div>

            {/* GitHub Contribution Card */}
            <div
                className="mb-12 rounded-lg p-4 overflow-hidden"
                style={{
                    backgroundColor:
                        "color-mix(in oklab, var(--background) 85%, transparent)",
                    border:
                        "1px solid color-mix(in oklab, var(--foreground) 10%, transparent)",
                }}
            >
                <div className="flex justify-between items-center mb-4">
                    <h4
                        className="text-sm font-bold"
                        style={{
                            color: "color-mix(in oklab, var(--foreground) 70%, transparent)",
                        }}
                    >
                        GitHub Contributions
                    </h4>
                    <span
                        className="text-xs"
                        style={{
                            color: "color-mix(in oklab, var(--foreground) 40%, transparent)",
                        }}
                    >
                        Last Year
                    </span>
                </div>

                {/* Contribution Graph */}
                <div
                    className="flex gap-1 overflow-x-auto pb-2 p-2 rounded-md"
                    style={{
                        backgroundColor:
                            "color-mix(in oklab, var(--foreground) 4%, var(--background))",
                        border:
                            "1px solid color-mix(in oklab, var(--foreground) 8%, transparent)",
                    }}
                >
                    {Array.from({ length: 53 }).map((_, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            {Array.from({ length: 7 }).map((_, j) => {
                                const pseudoRandom =
                                    ((i * 7 + j) * 1103515245 + 12345) % 2147483648;
                                const normalized = pseudoRandom / 2147483648;

                                const bg =
                                    normalized > 0.7
                                        ? normalized > 0.85
                                            ? "bg-green-500"
                                            : "bg-green-700"
                                        : "bg-neutral-500/30";

                                return (
                                    <div
                                        key={j}
                                        className={`w-2.5 h-2.5 rounded-sm ${bg}`}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 gap-6">
                <ProjectCard
                    title="AI Code Assistant"
                    description="A VS Code extension that uses local LLMs to suggest code completions. 1k+ installs on marketplace."
                    tags={["Python", "TypeScript", "LlamaCPP"]}
                    githubLink="https://github.com"
                    demoLink="https://demo.com"
                />
                <ProjectCard
                    title="Portfolio V1"
                    description="The first iteration of my personal portfolio built with pure HTML/CSS and minimal JS."
                    tags={["HTML", "CSS", "Gulp"]}
                    githubLink="https://github.com"
                    demoLink="https://demo.com"
                />
            </div>

            {/* CTA */}
            <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 mt-6 rounded-full text-sm font-medium transition-all"
                style={{
                    color: "var(--foreground)",
                    border: "1px solid color-mix(in oklab, var(--foreground) 15%, transparent)",
                    backgroundColor:
                        "color-mix(in oklab, var(--background) 85%, transparent)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                        "color-mix(in oklab, var(--foreground) 8%, var(--background))";
                    e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                        "color-mix(in oklab, var(--background) 85%, transparent)";
                    e.currentTarget.style.transform = "scale(1)";
                }}
            >
                View More Projects <span style={{ color: "var(--icon-color)" }}>→</span>
            </Link>
        </section>
    );
}