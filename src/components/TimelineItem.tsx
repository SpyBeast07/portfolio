import React from "react";

export const TimelineItem = ({ title, subtitle, date, description, tags }: { title: string, subtitle: string, date: string, description: string, tags?: string[] }) => (
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
