/** @jsxImportSource react */
"use client";
import React from 'react';
import prem from '../prem.png';
import sangvi from '../sangvi.png';

 
// Home Page
const HomePage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void; }) => (

  
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
      <img 
        src="https://images.unsplash.com/photo-1574267432644-f610bcf57b02?w=1920&q=80" 
        alt="Cinematic background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      
      <div className="relative z-20 text-center px-6 max-w-5xl">
        
        <h1 className="text-6xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          SANJAY BHATT PRODUCTION
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 tracking-wide">
          Creative Producer | Storyteller | Visionary
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setCurrentPage('Films')}
            className="px-8 py-4 bg-gold text-black font-semibold tracking-wider hover:bg-gold/90 transition-all"
          >
            VIEW WORK
          </button>
          <button 
            onClick={() => setCurrentPage('Contact')}
            className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wider hover:bg-white hover:text-black transition-all"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
    
    {/* Featured Work Teaser */}
    <div className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          FEATURED WORK
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { src: prem.src, title: 'PREM PRAKARAN' },
            { src: sangvi.src, title: 'SANGHAVI AND SONS' },
            
          ].map((img, i) => (
            <div key={i} className="group cursor-pointer relative overflow-hidden aspect-[2/3]">
              <img 
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{img.title}</h3>
                  <p className="text-gold text-sm">2024</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;