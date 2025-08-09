'use client';

import Wrapper from '@/components/Wrapper';
import React from 'react'

import NewsCard from "@/components/NewsCard";
import NewsBanner from "@/components/NewsBanner";
import { ghanaNews } from "@/lib/ghanaNews";

export default function NewsPage() {
  return (
    <Wrapper>
      <main className="w-full min-h-screen px-2 sm:px-8 py-8 flex flex-col items-center bg-white">
        <section className="w-full max-w-5xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-gray-900">Latest News</h1>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">Stay updated with trending stories, entertainment, lifestyle, sports, and more from Ghana and beyond.</p>
        </section>

        {/* Featured Banner */}
        <section className="w-full max-w-5xl mx-auto mb-10">
          <NewsBanner
            imageUrl={ghanaNews[0].imageUrl}
            title={ghanaNews[0].title}
            date={ghanaNews[0].date}
            readMoreUrl={ghanaNews[0].readMoreUrl}
          />
        </section>

        {/* News Grid */}
        <section className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {ghanaNews.slice(1).map((news, idx) => (
            <NewsCard key={idx} {...news} />
          ))}
        </section>

        {/* Call to Action */}
        <section className="w-full max-w-5xl mx-auto text-center py-8">
          <h2 className="text-2xl font-bold mb-2 text-red-600">Want more stories?</h2>
          <p className="text-gray-700 mb-4">Subscribe to AnasDebloger for exclusive updates, viral moments, and the digital voice of the people.</p>
          <a href="/contact" className="inline-block bg-red-500 text-white px-6 py-2 rounded font-semibold hover:bg-red-600 transition">Contact AnasDebloger</a>
        </section>
      </main>
    </Wrapper>
  );
}
