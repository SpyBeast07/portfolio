"use client";

import React from "react";
import Navbar from "@/components/Navbar";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-background text-foreground relative selection:bg-yellow-500/30 flex flex-col">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-0 opacity-40" />
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_90%)] z-0" />

            <div className="relative z-10 container mx-auto px-6 py-8 flex flex-col max-w-5xl min-h-screen">
                <div className="relative flex justify-end items-center mb-8 mt-4 pt-24">
                    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
                        <Navbar mode="floating" />
                    </div>

                    <a
                        href="/Kushagra_Gupta_updated_Resume.pdf"
                        download="Kushagra_Gupta_Resume.pdf"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-transform shadow-lg hover:shadow-xl"
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        Download PDF
                    </a>
                </div>

                {/* PDF Viewer - Styled Card Frame */}
                <div className="w-full relative mb-12 h-[70vh] md:h-[85vh] lg:h-[90vh]">
                    <div className="absolute -inset-1 rounded-2xl blur opacity-30" style={{ background: "linear-gradient(to right, color-mix(in oklab, var(--foreground) 10%, transparent), color-mix(in oklab, var(--foreground) 5%, transparent))" }} />
                    <div
                        className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl flex flex-col p-1"
                        style={{
                            backgroundColor: "color-mix(in oklab, var(--background) 95%, transparent)",
                            border: "1px solid color-mix(in oklab, var(--foreground) 10%, transparent)",
                        }}
                    >
                        <div
                            className="h-8 flex items-center px-4 gap-2 md:hidden"
                            style={{
                                backgroundColor: "color-mix(in oklab, var(--foreground) 5%, transparent)",
                                borderBottom: "1px solid color-mix(in oklab, var(--foreground) 5%, transparent)",
                            }}
                        >
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 relative overflow-hidden rounded-b-lg md:rounded-lg" style={{ backgroundColor: "var(--background)" }}>
                            <object
                                data="/Kushagra_Gupta_updated_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                                type="application/pdf"
                                className="w-full h-full block rounded-b-lg md:rounded-lg"
                                style={{ minHeight: '500px' }}
                            >
                                <div className="flex items-center justify-center h-full">
                                    <p style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}>
                                        Unable to display PDF. <a href="/Kushagra_Gupta_updated_Resume.pdf" style={{ color: "var(--foreground)", textDecoration: "underline" }}>Download</a> instead.
                                    </p>
                                </div>
                            </object>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
