'use client';

import React from 'react';

export type NewsCardProps = {
    imageUrl: string;
    title: string;
    date: string;
    categories: string;
    description: string;
    readMoreUrl: string;
};

function NewsCard({ imageUrl, title, date, categories, description, readMoreUrl }: NewsCardProps) {
    // Extract id from readMoreUrl if possible, fallback to 0
    let id = 0;
    if (readMoreUrl && readMoreUrl.startsWith('/news/')) {
        const parts = readMoreUrl.split('/');
        id = parts[parts.length - 1] ? parseInt(parts[parts.length - 1]) : 0;
    }
    return (
        <div className='w-full flex flex-col gap-2'>
            <div className="w-full h-[250px] relative">
                <img src={imageUrl} alt="news" className="size-full object-cover" />
            </div>
            <div className="bg-white p-2 pl-0 w-80 flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <span className="flex flex-col text-sm text-gray-500">
                    {date} • {categories}
                    <div className='w-[30%] mt-2 border-y border-red-500' />
                </span>
            </div>
            <p
                className="text-small text-gray-600 line-clamp-2"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2.5,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {description}
            </p>
            <a href={`/news/${id}`} className="text-red-500 font-semibold uppercase text-sm">Read more ...</a>
        </div>
    );
}

export default NewsCard;