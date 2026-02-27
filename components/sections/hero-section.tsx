
"use client"

import { motion } from "framer-motion"
import { ArrowDown, Play, Send } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Background Elements - Soft Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-pink-200/40 rounded-full blur-[100px] animate-float delay-0" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/40 rounded-full blur-[100px] animate-float delay-1000" />
                <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-indigo-200/30 rounded-full blur-[80px] animate-float delay-2000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-pink-200/50 text-pink-900/80 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    <span className="text-sm font-medium tracking-wide font-sans">Available for new projects</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-indigo-950 mb-6 drop-shadow-sm"
                >
                    Sunny <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Editorax</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-indigo-900/60 max-w-2xl mx-auto mb-10 font-sans leading-relaxed"
                >
                    Professional Video Editor crafting viral stories for <span className="font-semibold text-indigo-950">Instagram Reels</span>, <span className="font-semibold text-indigo-950">YouTube Shorts</span> & <span className="font-semibold text-indigo-950">TikTok</span>.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="#projects"
                        className="px-8 py-4 rounded-full bg-indigo-950 text-white font-medium hover:bg-indigo-900 transition-all shadow-lg shadow-indigo-200/50 flex items-center gap-2 group"
                    >
                        <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                        View My Work
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 rounded-full glass-card hover:bg-white/90 text-indigo-950 font-medium transition-all flex items-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        Book a Call
                    </Link>
                </motion.div>

                {/* Social Proof / Trust */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 pt-8 border-t border-indigo-950/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {/* Simple Text Logos for platforms */}
                    {["Instagram", "YouTube", "TikTok"].map((platform) => (
                        <div key={platform} className="text-xl font-serif font-bold text-indigo-950/40">{platform}</div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-indigo-950/30 animate-bounce"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    )
}
