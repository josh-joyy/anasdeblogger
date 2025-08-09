"use client";

import Wrapper from '@/components/Wrapper';
import React from 'react';

export default function ContactPage() {
    return (
        <Wrapper>
            <main className="min-h-screen h-fit w-full flex flex-col items-center py-10 px-4 sm:px-8 bg-[#f7ecdf]">
                <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left: Contact Form */}
                    <section>
                        <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 text-gray-900">
                            Contact <span className="relative inline-block font-light text-[#bfa98a]">AnasDebloger
                                <span className="absolute left-0 bottom-0 w-full h-2 bg-[#f15a29] opacity-40 -z-10" style={{ borderRadius: '2px' }}></span>
                            </span>
                        </h1>
                        <div className="mb-4 text-gray-700 text-base">
                            <b className="text-lg text-red-600">Steven Adu-Panyin (Anasdeblogger)</b><br />
                            <span className="text-sm text-gray-500 uppercase">🎤 Storyteller | Content Curator | Digital Voice of the People</span>
                            <div className="mt-2 text-xs text-gray-600">Based in Ghana, reporting for the world 🌍</div>
                        </div>
                        <form className="flex flex-col gap-4 mt-2">
                            <label className="font-medium text-gray-900 text-sm">Full name*</label>
                            <input type="text" placeholder="Enter your full name..." className="border border-black p-3 rounded text-gray-900 outline-none" />
                            <label className="font-medium text-gray-900 text-sm">Email address*</label>
                            <input type="email" placeholder="Enter your email address..." className="border border-black p-3 rounded text-gray-900 outline-none" />
                            <label className="font-medium text-gray-900 text-sm">Contact number</label>
                            <input type="text" placeholder="Enter your contact number..." className="border border-black p-3 rounded text-gray-900 outline-none" />
                            <label className="font-medium text-gray-900 text-sm">Message*</label>
                            <textarea placeholder="Type your message here..." rows={5} className="border border-black p-3 rounded text-gray-900 outline-none resize-none" />
                            <button type="submit" className="mt-2 bg-[#f15a29] text-white px-6 py-2 rounded font-semibold w-fit self-start relative">
                                <span className="relative z-10">Send message &rarr;</span>
                            </button>
                        </form>
                    </section>

                    {/* Right: Newsletter & Contact Info */}
                    <section className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-2 text-gray-900">Join the AnasDebloger newsletter</h2>
                            <p className="mb-4 text-gray-700 text-sm">Get exclusive updates, trending news, entertainment, lifestyle tips, and more from AnasDebloger. Stay connected with the digital voice of the people!</p>
                            <form className="flex flex-col gap-3">
                                <label className="font-medium text-gray-900 text-sm">Email Address</label>
                                <input type="email" placeholder="Enter your email address..." className="bg-[#e7dfd3] p-3 rounded text-gray-900 outline-none" />
                                <button type="submit" className="mt-2 bg-[#f15a29] text-white px-6 py-2 rounded font-semibold w-fit self-start relative">
                                    <span className="relative z-10">Sign up &rarr;</span>
                                </button>
                            </form>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">Contact & Socials:</h3>
                                <a href="mailto:anasdeblogger@gmail.com" className="text-[#f15a29] underline text-sm">anasdeblogger@gmail.com</a>
                                <div className="mt-2 text-gray-700 text-xs">
                                    <div>0201114547 | 0243758885</div>
                                    <div className="mt-2 flex gap-2">
                                        <a href="https://x.com/anasdebloger" target="_blank" rel="noopener noreferrer" className="underline">X</a>
                                        <a href="https://instagram.com/anasdeblogger" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>
                                        <a href="https://facebook.com/anasdeblogger" target="_blank" rel="noopener noreferrer" className="underline">Facebook</a>
                                        <a href="https://tiktok.com/@anasdeblogger" target="_blank" rel="noopener noreferrer" className="underline">TikTok</a>
                                        <a href="https://snapchat.com/add/anasdeblogger" target="_blank" rel="noopener noreferrer" className="underline">Snapchat</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">About AnasDebloger:</h3>
                                <div className="mt-2 text-gray-700 text-xs">
                                    <div>Steven Adu-Panyin</div>
                                    <div>Storyteller | Content Curator | Digital Voice of the People</div>
                                    <div>Based in Ghana, reporting for the world 🌍</div>
                                    <div>P.O. Box 760, Accra, Ghana</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </Wrapper>
    )
}
