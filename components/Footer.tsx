'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Footer() {
    const pathname = usePathname();

    return (
        <footer className="w-full bg-gray-50 border-gray-200 py-10 flex flex-col items-center mt-10">
            <div className="w-full max-w-4xl flex flex-col items-center gap-6">
                {/* Logo and tagline */}
                <div className="flex flex-col items-center gap-2">
                    <img src="/logo2.png" alt="Logo" className="h-10 mb-2" />
                    <span className="text-xs text-gray-500 tracking-widest">MULTIPURPOSE MAGAZINE AND BLOG THEME</span>
                </div>
                {/* Navigation links */}

                <nav className="flex gap-6 text-sm font-medium text-gray-700">
                    <Link
                        href="/"
                        className={`hover:text-red-500 ${pathname === '/' ? 'text-red-500 font-bold' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/news"
                        className={`hover:text-red-500 ${pathname.includes('news') ? 'text-red-500 font-bold' : ''}`}
                    >
                        News
                    </Link>
                    <Link
                        href="/contact"
                        className={`hover:text-red-500 ${pathname.includes('contact') ? 'text-red-500 font-bold' : ''}`}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/portfolio"
                        className={`hover:text-red-500 ${pathname.includes('portfolio') ? 'text-red-500 font-bold' : ''}`}
                    >
                        Portfolio
                    </Link>
                </nav>
                {/* Social icons */}
                <div className="flex gap-5 mt-2">
                    <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600"><Facebook size={20} /></a>
                    <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-sky-500"><Twitter size={20} /></a>
                    <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-500"><Instagram size={20} /></a>
                    <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-red-600"><Youtube size={20} /></a>
                </div>
                {/* Copyright */}
                <div className="text-xs text-gray-400 mt-6">&copy; {new Date().getFullYear()} AnasDeBloger. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer;