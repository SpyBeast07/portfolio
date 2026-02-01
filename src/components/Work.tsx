import React from "react";

const TimelineItem = ({ title, subtitle, date, description, tags }: { title: string, subtitle: string, date: string, description: string, tags?: string[] }) => (
    <div className="relative pl-8 border-l border-white/10 last:border-0 pb-12 last:pb-0">
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-yellow-500/50 ring-4 ring-neutral-900" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="text-lg font-bold text-white font-playfair">{title}</h3>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{date}</span>
        </div>
        <div className="text-sm font-medium text-purple-400 mb-3">{subtitle}</div>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4 max-w-md">
            {description}
        </p>
        {tags && (
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-neutral-300 border border-white/5">
                        {tag}
                    </span>
                ))}
            </div>
        )}
    </div>
);

export default function Work() {
    return (
        <section id="work" className="mb-24 scroll-mt-24">
            <h2 className="font-playfair text-3xl font-bold mb-12 text-white">Work & Experience</h2>

            <div className="space-y-4">
                {/* Education */}
                <div className="mb-12">
                    <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Education</h4>
                    <TimelineItem
                        title="Computer Science & Engineering"
                        subtitle="Bachelor of Technology"
                        date="2020 — 2024"
                        description="Focused on Data Structures, Algorithms, and Artificial Intelligence. Led the technical club and organized 3 major hackathons."
                    />
                </div>

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

                {/* Projects */}
                <div>
                    <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Featured Projects</h4>
                    <TimelineItem
                        title="AI Code Assistant"
                        subtitle="Open Source"
                        date="2024"
                        description="A VS Code extension that uses local LLMs to suggest code completions. 1k+ installs on marketplace."
                        tags={["Python", "TypeScript", "LlamaCP"]}
                    />
                </div>
            </div>
        </section>
    );
}
