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
  moviedes: string;
    youtubeVideoId?: string; // Optional YouTube video ID

}

// Films Page
const FilmsPage = () => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  
  const films: Film[] = [
    // 1. Using the locally imported 'prem' image
    { id: 1, title: 'PREM PRAKARAN ', year: '2022', genre: 'Drama', img: prem.src, youtubeVideoId: 'PD2wXtYbsQ4',moviedes: 'Prem Prakaran is a heartfelt romantic drama that explores love, emotions, and the complexities of relationships in today’s world. The film beautifully portrays how love can transform lives while testing trust, sacrifice, and destiny. With strong performances and an engaging storyline, Prem Prakaran connects deeply with the audience through its emotional depth and realistic portrayal of romance.' }, 
    
    // 2. Using the locally imported 'sangvi' image
    { id: 2, title: 'SANGHAVI AND SONS ', year: '2025', genre: 'Thriller', img: sangvi.src , youtubeVideoId: 'BheoI1BYinw', moviedes:'Sangavi and Sons is a creative production house known for producing meaningful and engaging films that connect with audiences emotionally. With a strong focus on storytelling, quality cinema, and artistic vision, the company is committed to delivering impactful content across films and entertainment projects, contributing to the growth of the Indian film industry.'}, 
    
    // 3. Using a remote image URL (e.g., Unsplash)
    { id:3,title:'Comming Soon ',year:"null",genre:"null",img:comingSoon.src, moviedes:'Coming Soon'},
    
];
  
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0D0D0D] pt-24 pb-20 mt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0D0D0D] mb-4 uppercase tracking-wider text-shadow-[0_0_8px_rgba(245,197,66,0.4)]">FILMS & PROJECTS</h1>
          <p className="text-[#333333] text-lg">A collection of stories told through cinema</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
    {films.map(film => (
        <div 
            key={film.id} 
            onClick={() => setSelectedFilm(film)}
            className="group cursor-pointer relative overflow-hidden aspect-[2/3] rounded-2xl shadow-[0px_4px_30px_rgba(0,0,0,0.12)] hover:shadow-[0px_8px_35px_rgba(0,0,0,0.18)] border border-transparent hover:border-[#F5C542] transition-all duration-300 ease-in-out transform hover:-translate-y-1.5"
        >
            <img 
                src={film.img} // Use film.img directly as it now holds the correct path/URL
                alt={film.title}
                // The styles below ensure the image covers the container and has a hover effect
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            {/* Overlay for text and gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[#F5C542] text-xs tracking-widest mb-2">{film.genre}</div>
                    <h3 className="text-white text-2xl font-bold mb-2">{film.title}</h3>
                    <p className="text-gray-300 text-sm">{film.year}</p>
                </div>
            </div>
            {/* Overlay for Play Icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#F5C542]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Ensure you have imported the Play icon component, e.g., from 'lucide-react' */}
                <Play className="text-white w-16 h-16 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" /> 
            </div>
        </div>
    ))}
</div>
      </div>
      
      {/* Film Detail Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 bg-[#0D0D0D]/90 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setSelectedFilm(null)}>
          <div className="max-w-4xl w-full bg-[#FAF7F2] border border-[rgba(0,0,0,0.06)] rounded-2xl shadow-2xl flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-video">
              {selectedFilm.youtubeVideoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedFilm.youtubeVideoId}?autoplay=1&rel=0`}
                  title={selectedFilm.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl auto-adjust"
                ></iframe>
              ) : (
                <img src={selectedFilm.img} alt={selectedFilm.title} className="w-full h-full object-cover rounded-t-2xl" />
              )}
              <button 
                onClick={() => setSelectedFilm(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-1 hover:bg-black/75 hover:text-[#F5C542] transition-all duration-300"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto">
              <div className="text-[#FF7A00] text-xs tracking-widest mb-2">{selectedFilm.genre}</div>
              <h2 className="text-3xl font-bold text-[#0D0D0D] mb-4">{selectedFilm.title}</h2>
              <p className="text-[#B11226] mb-4">Year: {selectedFilm.year}</p>
              <p className="text-[#333333] leading-relaxed">
                {selectedFilm.moviedes}
                
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmsPage;
