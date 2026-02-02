import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data";
import SectionHeading from "./ui/SectionHeading";
import CustomButton from "./ui/CustomButton";

export default function Work() {
    return (
        <section id="work" className="mb-24 lg:mb-40 scroll-mt-24">
            {/* Heading */}
            <SectionHeading>Work</SectionHeading>

            {/* Project Count */}
            <div className="mb-8">
                <p
                    className="text-4xl font-bold font-playfair"
                    style={{ color: "var(--foreground)" }}
                >
                    {projects.length}+{" "}
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

            {/* Projects */}
            <div className="grid grid-cols-1 gap-6">
                {projects.slice(0, 2).map((project) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                        image={undefined}
                    />
                ))}
            </div>

            {/* CTA */}
            <div className="mt-6">
                <CustomButton href="/work">
                    View More Projects <span style={{ color: "var(--icon-color)" }}>→</span>
                </CustomButton>
            </div>
        </section>
    );
}