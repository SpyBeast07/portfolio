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
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        Download PDF
                    </a>
                </div>

                {/* PDF Viewer - Styled Card Frame */}
                <div className="w-full relative mb-12 h-[70vh] md:h-[85vh] lg:h-[90vh]">
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-30" />
                    <div className="relative h-full w-full bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col p-1">
                        <div className="bg-white/5 h-8 flex items-center px-4 gap-2 border-b border-white/5 md:hidden">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 relative bg-neutral-900 overflow-hidden rounded-b-lg md:rounded-lg">
                            <object
                                data="/Kushagra_Gupta_updated_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                                type="application/pdf"
                                className="w-full h-full block rounded-b-lg md:rounded-lg"
                                style={{ minHeight: '500px' }}
                            >
                                <div className="flex items-center justify-center h-full text-neutral-400">
                                    <p>Unable to display PDF. <a href="/Kushagra_Gupta_updated_Resume.pdf" className="text-white underline">Download</a> instead.</p>
                                </div>
                            </object>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
