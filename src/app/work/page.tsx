import React from "react";
import Navbar from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";

export default function WorkPage() {
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
                        <h1 className="font-playfair text-5xl font-bold text-white mb-6">All Projects</h1>
                        <p className="text-neutral-400 max-w-2xl text-lg">
                            A collection of my work, ranging from open-source tools to commercial applications.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCard
                        title="AI Code Assistant"
                        description="A VS Code extension that uses local LLMs to suggest code completions. 1k+ installs on marketplace."
                        tags={["Python", "TypeScript", "LlamaCP"]}
                        image="https://placehold.co/600x400/1a1a1a/ffffff?text=AI+Code+Assistant"
                        githubLink="https://github.com"
                        demoLink="https://demo.com"
                    />
                    <ProjectCard
                        title="Portfolio V1"
                        description="The first iteration of my personal portfolio built with pure HTML/CSS and minimal JS."
                        tags={["HTML", "CSS", "Gulp"]}
                        image="https://placehold.co/600x400/1a1a1a/ffffff?text=Portfolio+V1"
                        githubLink="https://github.com"
                        demoLink="https://demo.com"
                    />
                    <ProjectCard
                        title="E-Commerce Dashboard"
                        description="A comprehensive dashboard for managing products, orders, and analytics for an online store."
                        tags={["React", "Next.js", "Tremor"]}
                        image="https://placehold.co/600x400/1a1a1a/ffffff?text=E-Commerce+Dashboard"
                        githubLink="https://github.com"
                        demoLink="https://demo.com"
                    />
                    <ProjectCard
                        title="Task Management App"
                        description="A collaborative task manager with real-time updates and team workspaces."
                        tags={["Vue.js", "Firebase", "Tailwind"]}
                        image="https://placehold.co/600x400/1a1a1a/ffffff?text=Task+Manager"
                        githubLink="https://github.com"
                        demoLink="https://demo.com"
                    />
                </div>
            </div>
        </div>
    );
}
