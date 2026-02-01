import React from "react";

export const ProjectCard = ({ title, description, tags, link }: { title: string, description: string, tags: string[], link?: string }) => (
    <div className="group relative border border-white/10 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors">
        <h3 className="text-xl font-bold text-white font-playfair mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-neutral-400 border border-white/5">
                    {tag}
                </span>
            ))}
        </div>
        {link && (
            <a href={link} className="text-xs font-bold text-yellow-500 uppercase tracking-widest flex items-center gap-2">
                View Project <span>→</span>
            </a>
        )}
    </div>
);
