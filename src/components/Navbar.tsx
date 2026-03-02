"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/data";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="text-xl sm:text-2xl font-black tracking-tight text-white">
                        Cero Humo
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/bogota" className="text-sm text-muted hover:text-white transition-colors duration-200">
                            Bogotá
                        </Link>
                        <Link href="/medellin" className="text-sm text-muted hover:text-white transition-colors duration-200">
                            Medellín
                        </Link>
                        <Link href="/barranquilla" className="text-sm text-muted hover:text-white transition-colors duration-200">
                            Barranquilla
                        </Link>
                        <Link href="/recursos" className="text-sm font-bold text-amber-500 hover:text-amber-400 transition-colors duration-200">
                            Recursos y Trucos
                        </Link>
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-all duration-200"
                        >
                            Escribir por WhatsApp
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white"
                        aria-label="Menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-border">
                    <div className="px-4 py-6 space-y-4">
                        <Link
                            href="/bogota"
                            onClick={() => setIsOpen(false)}
                            className="block text-lg text-muted hover:text-white transition-colors"
                        >
                            Bogotá
                        </Link>
                        <Link
                            href="/medellin"
                            onClick={() => setIsOpen(false)}
                            className="block text-lg text-muted hover:text-white transition-colors"
                        >
                            Medellín
                        </Link>
                        <Link
                            href="/barranquilla"
                            onClick={() => setIsOpen(false)}
                            className="block text-lg text-muted hover:text-white transition-colors"
                        >
                            Barranquilla
                        </Link>
                        <Link
                            href="/recursos"
                            onClick={() => setIsOpen(false)}
                            className="block text-lg font-bold text-amber-500 hover:text-amber-400 transition-colors"
                        >
                            Recursos y Hacks SEO
                        </Link>
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-white text-black font-semibold px-5 py-3 rounded-full hover:bg-black hover:text-white border border-white transition-all duration-200"
                        >
                            Escribir por WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
