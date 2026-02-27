
"use client"

import { motion } from "framer-motion"
import { TrendingUp, Video, Instagram } from "lucide-react"

export default function AboutSection() {
    const services = [
        {
            icon: <Instagram className="w-6 h-6 text-pink-500" />,
            title: "Instagram Reels",
            description: "Trendy, fast-paced edits designed to stop the scroll and maximize engagement."
        },
        {
            icon: <Video className="w-6 h-6 text-red-500" />,
            title: "YouTube Shorts",
            description: "High-retention vertical videos optimized for the YouTube algorithm."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
            title: "TikTok Content",
            description: "Creative effects and viral sounds to keep your audience hooked."
        }
    ]



    return (
        <section id="about" className="py-24 bg-white/50 relative">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-sm font-bold text-pink-500 uppercase tracking-widest mb-2 font-sans">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-indigo-950 mb-6">
                            I help creators <span className="italic text-pink-400">go viral.</span>
                        </h3>
                        <p className="text-lg text-indigo-900/70 mb-6 leading-relaxed font-sans">
                            Hi, I&apos;m <span className="font-semibold text-indigo-950">Sunny</span>. With over <span className="font-semibold text-pink-600">500+ videos</span> edited and <span className="font-semibold text-pink-600">25+ viral hits</span> (1M+ views), I know exactly what makes short-form content perform.
                        </p>
                        <p className="text-lg text-indigo-900/70 mb-8 leading-relaxed font-sans">
                            My editing style focuses on rhythm, storytelling, and retention. Whether it&apos;s a 15-second Reel or a 60-second Short, I ensure every frame counts.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-sm">
                                <div className="text-3xl font-bold text-indigo-950 mb-1 font-serif">500+</div>
                                <div className="text-sm text-indigo-900/60 font-sans">Videos Created</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-sm">
                                <div className="text-3xl font-bold text-indigo-950 mb-1 font-serif">1M+</div>
                                <div className="text-sm text-indigo-900/60 font-sans">Views Generated</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Services Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 grid gap-6"
                    >
                        {services.map((service, index) => (
                            <div key={index} className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:bg-white/80 transition-colors group">
                                <div className="p-3 rounded-full bg-pink-50 group-hover:bg-pink-100 transition-colors">
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-indigo-950 mb-2 font-serif">{service.title}</h4>
                                    <p className="text-indigo-900/60 text-sm font-sans">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Pricing Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-24 max-w-lg mx-auto"
                >
                    <div className="glass-card p-8 rounded-3xl text-center relative overflow-hidden group hover:shadow-xl transition-all duration-500 border-2 border-white/50">
                        {/* Background Gradient Animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-purple-100/30 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif font-bold text-indigo-950 mb-2">Simple Pricing</h3>
                            <p className="text-indigo-900/60 font-sans mb-8">Professional video editing made affordable.</p>

                            <div className="py-6">
                                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">$3</span>
                                <span className="text-xl text-indigo-950/60 font-medium"> USD</span>
                                <div className="text-sm text-pink-500 font-medium mt-2">Starting Price</div>
                            </div>

                            <div className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                                {[
                                    "Instagram Reels",
                                    "YouTube Shorts",
                                    "TikTok Videos",
                                    "Fast Turnaround",
                                    "Professional Quality"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-indigo-900/80">
                                        <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                            <span className="text-pink-500 text-xs">✓</span>
                                        </div>
                                        <span className="font-sans font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                className="block w-full py-4 rounded-xl bg-indigo-950 text-white font-bold hover:bg-indigo-900 transition-all shadow-lg hover:shadow-indigo-200/50 transform hover:-translate-y-1"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}
