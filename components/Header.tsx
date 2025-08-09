'use client';

import React from 'react';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/dist/client/components/navigation';

export default function Header() {
    const pathname = usePathname();
    return (<>
        <header className="w-full text-gray-900 py-4 px-2 sm:px-6 flex flex-col gap-3 items-center justify-between z-10">
            <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-2 sm:gap-0">
                <div className="w-fit xl:min-w-[200px] flex justify-center sm:justify-start mb-2 sm:mb-0 md:mt-0 sm:mt-3">
                    <Button className="w-full sm:w-auto text-xs sm:text-base"><Phone className="mr-2" />Contact Anas</Button>
                </div>
                <div className="w-full text-center flex flex-col justify-center items-center sm:px-2">
                    <span className="text-[2.5rem] sm:text-[3rem] xl:text-[4rem] font-extrabold leading-tight">ANAS<span className='font-extralight'>DEBLOGER</span></span>
                    <span className="overflow-x-auto text-xs sm:text-sm text-gray-500 uppercase flex items-center gap-1 sm:gap-2 sm:flex-wrap text-nowrap justify-center">
                        <span>Storyteller |</span>
                        <span>Content Curator |</span>
                        <span>Digital Voice of the People</span>
                    </span>
                </div>
                <div className="w-fit xl:min-w-[200px] flex items-center gap-3 sm:gap-4 justify-center sm:justify-end mt-2 sm:mt-0 md:mb-0 sm:mb-2">
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook text-lg sm:text-xl"></i></a>
                    <a href="#" aria-label="X"><i className="fab fa-x-twitter text-lg sm:text-xl"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram text-lg sm:text-xl"></i></a>
                    <a href="#" aria-label="YouTube"><i className="fab fa-youtube text-lg sm:text-xl"></i></a>
                </div>
            </section>
        </header>
        <section className="border-y h-12 sm:h-16 w-full flex flex-wrap gap-3 sm:gap-6 bg-white sticky top-0 items-center justify-center text-sm sm:text-base z-20">
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
        </section>
    </>
    );
}
