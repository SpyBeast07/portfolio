"use client";

import Navbar from "@/components/Navbar";
import { TimelineItem } from "@/components/TimelineItem";
import { about, education, experiences, resume, socialLinks } from "@/data";
import PageHeading from "@/components/ui/PageHeading";
import { DownloadIcon, EmailIcon, FileTextIcon, GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function AboutContent() {
    const getIcon = (label: string) => {
        switch (label) {
            case "GitHub":
                return <GithubIcon width={20} height={20} />;
            case "LinkedIn":
                return <LinkedinIcon width={20} height={20} />;
            case "Email":
                return <EmailIcon width={20} height={20} />;
            default:
                return null;
        }
    };

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
                            title={about.headline}
                            description={
                                <div className="space-y-6">
                                    {about.long.map((paragraph, index) => (
                                        <p key={index} className={index === about.long.length - 1 ? "font-medium text-foreground/80" : ""}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            }
                        />
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 mb-12">
                    {socialLinks.map(({ href, label }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-200"
                            style={{
                                color: "color-mix(in oklab, var(--foreground) 60%, transparent)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "var(--foreground)";
                                e.currentTarget.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color =
                                    "color-mix(in oklab, var(--foreground) 60%, transparent)";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            {getIcon(label)}
                        </a>
                    ))}
                </div>

                {/* Resume Button */}
                <div className="mb-24 lg:mb-32">
                    <a
                        href="/resume"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-transform"
                        style={{
                            color: "var(--background)",
                            backgroundColor: "var(--foreground)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "0.9";
                            e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "1";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        <FileTextIcon width={16} height={16} />
                        View Resume
                    </a>
                </div>

                <div className="space-y-4">
                    {/* Experience */}
                    <div className="mb-24 lg:mb-32">
                        <h4
                            className="font-playfair text-5xl font-bold mb-12"
                            style={{ color: "var(--foreground)" }}
                        >
                            Experience
                        </h4>
                        {experiences.map((exp) => (
                            <TimelineItem
                                key={exp.title}
                                {...exp}
                            />
                        ))}
                    </div>

                    {/* Education */}
                    <div>
                        <h4
                            className="font-playfair text-5xl font-bold mb-12"
                            style={{ color: "var(--foreground)" }}
                        >
                            Education
                        </h4>
                        {education.map((edu) => (
                            <TimelineItem
                                key={edu.title}
                                {...edu}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
