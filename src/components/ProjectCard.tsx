import React from "react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    githubLink?: string;
    demoLink?: string;
}

export const ProjectCard = ({ title, description, tags, image, githubLink, demoLink }: ProjectCardProps) => (
    <div className="group relative border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-colors overflow-hidden flex flex-col h-full">
        {/* Project Image */}
        {image && (
            <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        )}

        <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-white font-playfair mb-2">{title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-neutral-400 border border-white/5">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 text-xs font-bold text-white uppercase tracking-wider transition-colors border border-white/5"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                        GitHub
                    </a>
                )}
                {demoLink && (
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                    >
                        Live Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </a>
                )}
            </div>
        </div>
    </div>
);
