'use client';

import React from 'react';

export type NewsBannerProps = {
    imageUrl: string;
    title: string;
    date: string;
    readMoreUrl: string;
};

function NewsBanner({ imageUrl, title, date, readMoreUrl }: NewsBannerProps) {
    let id = 0;
    if (readMoreUrl && readMoreUrl.startsWith('/news/')) {
        const parts = readMoreUrl.split('/');
        id = parts[parts.length - 1] ? parseInt(parts[parts.length - 1]) : 0;
    }
    return (
        <div className="w-full h-[300px] relative flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden shadow-md mb-8">
            <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <div className="relative z-10 p-8 flex flex-col items-start bg-gradient-to-r from-black/60 to-transparent w-full h-full justify-center">
                <span className="text-xs text-white font-semibold mb-2">{date}</span>
                <h2 className="text-3xl font-bold text-white mb-4 max-w-2xl">{title}</h2>
                <a href={`/news/${id}`} className="px-4 py-2 bg-red-500 text-white rounded font-semibold text-sm hover:bg-red-600 transition">Read more</a>
            </div>
        </div>
    );
}

export default NewsBanner;