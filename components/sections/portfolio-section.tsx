
"use client"

import { motion } from "framer-motion"

export default function PortfolioSection() {
    // ---------------------------------------------------------------------------
    // HOW TO REPLACE A YOUTUBE VIDEO
    // ---------------------------------------------------------------------------
    // Each YouTube entry below has a `type: 'youtube'` field and an `id` field.
    // The `id` is the part after "v=" in a YouTube URL.
    //
    // Example:
    //   YouTube URL  → https://www.youtube.com/watch?v=dQw4w9WgXcQ
    //   Video ID     → dQw4w9WgXcQ
    //
    // To swap a video, simply replace the `id` value with your new video ID,
    // and update the `title` to match:
    //
    //   Before: { type: 'youtube', id: "1tT-RP9Z1Yk", title: "Featured Work" }
    //   After:  { type: 'youtube', id: "YOUR_NEW_ID", title: "Your New Title" }
    //
    // To add a brand-new YouTube video, append a new entry to the array:
    //   { type: 'youtube', id: "YOUR_NEW_ID", title: "Your Title Here" }
    //
    // For local MP4 videos stored in the /public folder, use:
    //   { type: 'local', src: "/your-video-file.mp4", title: "Your Title Here" }
    // ---------------------------------------------------------------------------

    // Combine all videos into a single list for a unified grid
    const allVideos = [
        { type: 'youtube', id: "NLIvQqBf9PE", title: "Latest Short" },
        { type: 'local', src: "/Untitled%20(5).mp4", title: "Podcast Edit" },
        { type: 'local', src: "/car%20edit%202.mp4", title: "Recent Car Edit" },
        { type: 'youtube', id: "afr9kTEXJqg", title: "Featured Work" },
        { type: 'youtube', id: "-prtOBA9f8o", title: "Latest Short" },
        { type: 'youtube', id: "bDziX4cL-ro", title: "Featured Viral Short" },
        { type: 'youtube', id: "4LbDsJZhTYc", title: "Viral Short 1" },
        { type: 'youtube', id: "_JpUNyaboY4", title: "Viral Short 2" },
        { type: 'local', src: "/podcast-edit.mp4", title: "Podcast Edit" },
        { type: 'local', src: "/Podcast%20video%20edit.mp4", title: "Podcast Video Edit" },
        { type: 'local', src: "/lv_0_20260128161334.mp4", title: "Sunny Focus Edit" },
        { type: 'local', src: "/68c109db26c7e97eb1bfc69f91ddc7e2_720w.mp4", title: "Recent Edit 1" },
        { type: 'local', src: "/6d1726323d4e7991d85a17c3bd358735.mp4", title: "Recent Edit 2" },
        { type: 'local', src: "/d521074bc8f29e4274227441add90d7b_720w.mp4", title: "Recent Edit 3" },
    ]

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-indigo-950 mb-4"
                    >
                        Selected Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-indigo-900/60 max-w-2xl mx-auto font-sans"
                    >
                        A curated selection of high-performing vertical videos.
                    </motion.p>
                </div>

                {/* Unified Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {allVideos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-4 border-white bg-black"
                        >
                            {video.title && (
                                <div className="absolute top-3 left-3 z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-indigo-950 shadow-sm">
                                    {video.title}
                                </div>
                            )}
                            {video.type === 'local' ? (
                                <video
                                    src={video.src}
                                    controls
                                    className="absolute inset-0 w-full h-full object-cover"
                                    preload="metadata"
                                    playsInline
                                />
                            ) : (
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?controls=1&rel=0&playsinline=1&modestbranding=1`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
