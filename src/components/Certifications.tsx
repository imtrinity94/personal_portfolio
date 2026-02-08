"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Certifications() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="certifications">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Credentials</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Industry-recognized certifications validating my expertise in cloud automation and architecture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-56 h-56 mb-8 relative flex items-center justify-center p-6 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-300"
                                    onError={(e) => {
                                        // Fallback if image fails to load
                                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cert.issuer)}+${encodeURIComponent(cert.title)}&background=random&color=fff&size=128`;
                                    }}
                                />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="text-sm font-mono text-gray-400">
                                    <span className="text-blue-400">{cert.issuer}</span> • {cert.date}
                                </div>
                            </div>

                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
