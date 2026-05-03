
"use client"

import { useState } from "react"
import { MessageCircle, Send } from "lucide-react"

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // WhatsApp Logic
        const number = "917518608357"
        const message = `New enquiry from ${formData.name} (${formData.email}):\n\n${formData.message}`
        const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`

        window.open(waUrl, '_blank')
    }

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-pink-200/40 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/40 rounded-3xl p-8 md:p-12 border border-white/60 shadow-xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold text-indigo-950 mb-4">Let&apos;s Create Magic</h2>
                        <p className="text-indigo-900/60 font-sans">
                            Ready to take your content to the next level? Drop me a message or connect directly on WhatsApp.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-100 text-green-600 rounded-full">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-indigo-950 mb-1">WhatsApp</h3>
                                    <a href="https://wa.me/917518608357" className="text-indigo-600 hover:text-pink-500 transition-colors font-sans block">
                                        +91 75186 08357
                                    </a>
                                    <span className="text-xs text-indigo-400">Best for quick replies</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-pink-100 text-pink-600 rounded-full">
                                    <Instagram className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-indigo-950 mb-1">Instagram</h3>
                                    <a href="https://www.instagram.com/_editorax2.1" className="text-indigo-600 hover:text-pink-500 transition-colors font-sans block">
                                        @_editorax2.1
                                    </a>
                                </div>
                            </div>


                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-indigo-900/70 mb-2 font-sans">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white focus:border-pink-300 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-sans"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-indigo-900/70 mb-2 font-sans">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white focus:border-pink-300 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-sans"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-indigo-900/70 mb-2 font-sans">Message</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white focus:border-pink-300 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-sans"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:shadow-lg hover:shadow-pink-200 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

import { Instagram } from "lucide-react" // Import added for missing Icon
