"use client";
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Wrapper from '@/components/Wrapper';

const projects = [
    {
        title: 'Personal Blog',
        description: 'A modern blog platform where I share my thoughts on web development, tech, and life.',
        link: 'https://anasdebloger.com/blog',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio showcasing my projects and skills.',
        link: 'https://anasdebloger.com',
        tech: ['React', 'TypeScript', 'Styled Components'],
    },
    {
        title: 'Open Source Contributions',
        description: 'Contributions to various open source projects on GitHub.',
        link: 'https://github.com/anasdebloger',
        tech: ['JavaScript', 'TypeScript', 'Node.js'],
    },
];

const services = [
    {
        name: 'Content Writing',
        description: 'Professional blog posts, articles, and web content tailored to your audience.'
    },
    {
        name: 'Web Development',
        description: 'Building modern, responsive websites and blogs using the latest technologies.'
    },
    {
        name: 'SEO Consulting',
        description: 'Optimizing your site for search engines to increase visibility and traffic.'
    },
];

function Portfolio() {
    const [showPopup, setShowPopup] = React.useState(false);
    return <Wrapper>
        <main className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
            {/* Media Profile Section */}
            <section className="flex flex-col items-center mb-8 sm:mb-10">
                {/* Overlay Popup (click to enlarge profile image) */}
                {showPopup && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 animate-fadeIn"
                        onClick={() => setShowPopup(false)}
                    >
                        <div className='w-full h-full bg-white blur-[6rem] opacity-70 absolute' />
                        <img
                            src="/profile-picture.jpeg"
                            alt="Steven Adu-Panyin (Anasdeblogger) profile large"
                            className="w-[90vw] max-w-[400px] sm:max-w-[500px] h-[60vw] sm:h-[80dvh] rounded-full border-8 border-white shadow-2xl object-cover bg-white animate-scaleIn z-10"
                            onClick={e => e.stopPropagation()}
                        />
                    </div>
                )}

                <img
                    src="/profile-picture.jpeg"
                    alt="Steven Adu-Panyin (Anasdeblogger) profile"
                    className="w-[130px] sm:w-[200px] rounded-full border-4 border-red-500 mb-4 shadow-lg object-cover bg-white cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setShowPopup(true)}
                />
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">STEVEN ADU-PANYIN <span className="block text-red-500">(Anasdeblogger)</span></h1>
                <span className="text-base sm:text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2 text-center">🎤 Storyteller | Content Curator | Digital Voice of the People</span>
                <p className="text-center text-sm sm:text-base text-gray-700 max-w-xl mb-4">
                    Welcome to the official media hub of Anasdeblogger – your daily spark for news, entertainment, lifestyle, sports, and social stories that matter! <span className="inline-block">🎬✨</span>
                </p>
                <p className="text-center text-sm sm:text-base text-gray-700 max-w-xl mb-4">
                    With a passion for truth, trends, and transformation, I deliver engaging digital content that connects communities, inspires creativity, and amplifies unheard voices. From exclusive event coverage to viral social moments and deep-dive stories, I bring the heat with every post. <span className="inline-block">🔥</span>
                </p>
                <div className="w-full max-w-lg bg-gray-50 border rounded-lg p-3 sm:p-4 mb-4">
                    <h2 className="text-base sm:text-lg font-bold text-red-500 mb-2">✅ Niche Focus:</h2>
                    <ul className="list-disc pl-4 sm:pl-6 text-gray-700 text-sm sm:text-base space-y-1">
                        <li>Breaking & Trending News</li>
                        <li>Entertainment & Celebrity Buzz</li>
                        <li>Lifestyle Tips & Social Vibes</li>
                        <li>Football Highlights & Rumors</li>
                        <li>Creative Faith-Based Messages</li>
                        <li>Local Culture & Festival Coverage</li>
                    </ul>
                </div>
                <div className="text-center text-sm sm:text-base text-gray-700 mb-2">📍 Based in Ghana, Reporting for the World 🌍</div>
                <div className="text-center text-sm sm:text-base text-gray-700 mb-4">🕊 Let’s connect, collaborate, and create content that moves culture forward.</div>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-4">
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs font-semibold text-gray-600">#Anasdeblogger</span>
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs font-semibold text-gray-600">#MediaVoice</span>
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs font-semibold text-gray-600">#GhanaTrends</span>
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs font-semibold text-gray-600">#SocialBuzz</span>
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs font-semibold text-gray-600">#ContentThatConnects</span>
                </div>
                {/* Socials */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 mb-2 justify-center">
                    <a href="https://x.com/anasdebloger" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-500 hover:text-black font-bold text-lg">X <span className="hidden sm:inline">@anasdeblogger</span></a>
                    <a href="https://instagram.com/anasdeblogger" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-500 font-bold text-lg">Instagram <span className="hidden sm:inline">@anasdeblogger</span></a>
                    <a href="https://facebook.com/anasdeblogger" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 font-bold text-lg">Facebook <span className="hidden sm:inline">@anasdeblogger</span></a>
                    <a href="https://tiktok.com/@anasdeblogger" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-500 hover:text-black font-bold text-lg">TikTok <span className="hidden sm:inline">@anasdeblogger</span></a>
                    <a href="https://snapchat.com/add/anasdeblogger" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="text-gray-500 hover:text-yellow-500 font-bold text-lg">Snapchat <span className="hidden sm:inline">@anasdeblogger</span></a>
                </div>
                {/* Contact Info */}
                <div className="flex flex-col items-center gap-1 mb-2">
                    <span className="text-sm sm:text-base text-gray-700 font-semibold">Phone: <a href="tel:0201114547" className="underline">0201114547</a> | <a href="tel:0243758885" className="underline">0243758885</a></span>
                    <span className="text-sm sm:text-base text-gray-700 font-semibold">Email: <a href="mailto:anasdeblogger@gmail.com" className="text-red-500 underline">anasdeblogger@gmail.com</a></span>
                </div>
                {/* Animations */}
                <style jsx>{`
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes scaleIn {
                        from { transform: scale(0.7); opacity: 0; }
                        to { transform: scale(1); opacity: 1; }
                    }
                    .animate-fadeIn {
                        animation: fadeIn 0.3s;
                    }
                    .animate-scaleIn {
                        animation: scaleIn 0.3s;
                    }
                `}</style>
            </section>

            {/* Services Section */}
            <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-red-500">Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white border rounded-lg shadow p-3 sm:p-5 flex flex-col items-center text-center">
                            <span className="font-semibold text-base sm:text-lg mb-2 text-gray-800">{service.name}</span>
                            <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-red-500">Featured Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="mb-6 sm:mb-8 p-4 sm:p-6 border rounded-lg shadow hover:shadow-lg transition bg-white flex flex-col"
                        >
                            <h3 className="text-base sm:text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                            <p className="mb-2 text-gray-600 text-xs sm:text-sm">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline mb-2 inline-block text-xs sm:text-sm"
                            >
                                View Project
                            </a>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs sm:text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    </Wrapper>
}

export default Portfolio;