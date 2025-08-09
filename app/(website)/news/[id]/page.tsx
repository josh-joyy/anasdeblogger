'use client'

import Wrapper from '@/components/Wrapper'
import React from 'react'

import { ghanaNews } from "@/lib/ghanaNews";
import { useParams } from "next/navigation";

export default function NewsDetails() {
    const params = useParams();
    const rawId = Array.isArray(params.id) ? params.id[0] : params.id;
    const id = rawId ? parseInt(rawId) : 0;
    const news = ghanaNews[id] || ghanaNews[0];

    return (
        <Wrapper>
            <main className="w-full min-h-screen px-2 sm:px-8 py-8 flex flex-col items-center bg-white">
                <article className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
                    <img src={news.imageUrl} alt={news.title} className="w-full h-64 object-cover rounded mb-6" />
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">{news.title}</h1>
                    <div className="text-xs sm:text-sm text-gray-500 mb-4">{news.date} • {news.categories}</div>
                    <p className="text-base sm:text-lg text-gray-700 mb-6">{news.description}</p>
                    <a href={news.readMoreUrl} className="text-red-500 font-semibold underline">Read full story</a>
                </article>
                <section className="w-full max-w-3xl mx-auto mt-10">
                    <h2 className="text-xl font-bold mb-4 text-gray-900">More Stories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {ghanaNews.filter((n, idx) => idx !== Number(id)).slice(0, 2).map((n, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg shadow p-4">
                                <img src={n.imageUrl} alt={n.title} className="w-full h-32 object-cover rounded mb-2" />
                                <h3 className="text-lg font-semibold mb-1">{n.title}</h3>
                                <div className="text-xs text-gray-500 mb-2">{n.date}</div>
                                <a href={`/news/${idx}`} className="text-sky-600 underline font-medium">Read more</a>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </Wrapper>
    );
}