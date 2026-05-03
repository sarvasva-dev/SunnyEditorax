
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { scrollY } = useScroll()

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrolled(latest > 50)
        })
    }, [scrollY])

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Work", href: "#projects" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
                }`}
        >
            <div className="container mx-auto px-6">
                <nav
                    className={`mx-auto max-w-5xl rounded-full transition-all duration-300 px-6 py-3 flex items-center justify-between ${scrolled
                        ? "glass-card bg-white/80 shadow-sm"
                        : "bg-transparent"
                        }`}
                >
                    {/* Logo */}
                    <Link href="/" className="block">
                        <Image
                            src="/logo.png"
                            alt="Sunny Editorax Logo"
                            width={150}
                            height={64}
                            className="h-16 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-indigo-950/70 hover:text-pink-600 transition-colors font-sans"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="px-5 py-2 rounded-full bg-indigo-950 text-white text-sm font-medium hover:bg-indigo-900 transition-colors shadow-md shadow-indigo-200/50"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-indigo-950"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 p-4 mx-4 mt-2 rounded-2xl glass-card bg-white shadow-xl md:hidden flex flex-col gap-4 items-center z-50 border border-pink-100"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-indigo-950/80 hover:text-pink-600 py-2 font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.header>
    )
}
