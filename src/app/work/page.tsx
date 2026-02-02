import PageHeading from "@/components/ui/PageHeading";
import { pageHeadings, projects } from "@/data";
import Navbar from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import GithubStats from "@/components/GithubStats";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work | Kushagra",
    description: "A collection of projects and work by Kushagra.",
};

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
                        <PageHeading
                            title={pageHeadings.work.title}
                            description={<p>{pageHeadings.work.description}</p>}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>

                {/* GitHub Contribution Chart */}
                <h2
                    className="font-playfair text-5xl font-bold mb-12 mt-24"
                    style={{ color: "var(--foreground)" }}
                >
                    Github Stats
                </h2>
                <GithubStats />
            </div>
        </div>
    );
}
