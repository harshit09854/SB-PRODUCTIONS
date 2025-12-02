/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import prem from '../prem.png';
import sangvi from '../sangvi.png';
import comingSoon from '../comingSoon.png';

interface Film {
  id: number;
  title: string;
  year: string;
  genre: string;
  img: string;
}

// Films Page
const FilmsPage = () => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  
  const films: Film[] = [
    // 1. Using the locally imported 'prem' image
    { id: 1, title: 'PREM PRAKARAN ', year: '2024', genre: 'Drama', img: prem.src }, 
    
    // 2. Using the locally imported 'sangvi' image
    { id: 2, title: 'SANGHAVI AND SONS ', year: '2023', genre: 'Thriller', img: sangvi.src }, 
    
    // 3. Using a remote image URL (e.g., Unsplash)
    { id:3,title:'Comming Soon ',year:"null",genre:"null",img:comingSoon.src }
];
  
  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-gold text-sm tracking-widest mb-4">PORTFOLIO</div>
          <h1 className="text-5xl font-bold text-white mb-4">FILMS & PROJECTS</h1>
          <p className="text-gray-400 text-lg">A collection of stories told through cinema</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
    {films.map(film => (
        <div 
            key={film.id} 
            onClick={() => setSelectedFilm(film)}
            className="group cursor-pointer relative overflow-hidden aspect-[2/3]"
        >
            <img 
                src={film.img} // Use film.img directly as it now holds the correct path/URL
                alt={film.title}
                // The styles below ensure the image covers the container and has a hover effect
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay for text and gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-gold text-xs tracking-widest mb-2">{film.genre}</div>
                    <h3 className="text-white text-2xl font-bold mb-2">{film.title}</h3>
                    <p className="text-gray-400 text-sm">{film.year}</p>
                </div>
            </div>
            {/* Overlay for Play Icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Ensure you have imported the Play icon component, e.g., from 'lucide-react' */}
                <Play className="text-gold w-16 h-16" /> 
            </div>
        </div>
    ))}
</div>
      </div>
      
      {/* Film Detail Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={() => setSelectedFilm(null)}>
          <div className="max-w-4xl w-full bg-zinc-900 border border-gold/30" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-video">
              <img 
                src={selectedFilm.img}
                alt={selectedFilm.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedFilm(null)}
                className="absolute top-4 right-4 text-white hover:text-gold"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="p-8">
              <div className="text-gold text-xs tracking-widest mb-2">{selectedFilm.genre}</div>
              <h2 className="text-3xl font-bold text-white mb-4">{selectedFilm.title}</h2>
              <p className="text-gray-400 mb-4">Year: {selectedFilm.year}</p>
              <p className="text-gray-300 leading-relaxed">
                A powerful cinematic experience that explores the depths of human emotion and storytelling. 
                This project showcases innovative cinematography and compelling narrative structure.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmsPage;