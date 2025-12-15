/** @jsxImportSource react */
"use client";
import React from 'react';
import prem from '../prem.png';
import sangvi from '../sangvi.png';

 
// Home Page
const HomePage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void; }) => (

  
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FFF8EC]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7E6] to-white z-10" />
      <img 
        src="https://images.unsplash.com/photo-1574267432644-f610bcf57b02?w=1920&q=80" 
        alt="Cinematic background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      
      <div className="relative z-20 text-center px-6 max-w-5xl">
        
        <h1 className="text-5xl md:text-7xl font-bold text-[#1D1D1D] mb-6 tracking-tight">
          SANJAY BHATT PRODUCTION
        </h1>
        <p className="text-lg md:text-xl text-[#4F4F4F] mb-12 tracking-wide max-w-2xl mx-auto">
          Creative Producer | Storyteller | Visionary
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setCurrentPage('Films')}
            className="px-8 py-4 bg-gradient-to-r from-[#FFC93C] to-[#FF8C32] text-[#1A1A1A] font-bold tracking-wider rounded-full shadow-[0_8px_26px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_rgba(255,140,50,0.4)] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            VIEW WORK
          </button>
          <button 
            onClick={() => setCurrentPage('Contact')}
            className="px-8 py-4 border-2 border-[#FFE7A3] text-[#E66A00] font-bold tracking-wider hover:bg-[#FFF1D6] hover:border-[#FFC93C] transition-all duration-300 ease-in-out rounded-full"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
    
    {/* Featured Work Teaser */}
    <div className="bg-[#FFF8EC] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-12 text-center">
          FEATURED WORK
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { src: prem.src, title: 'PREM PRAKARAN' , year: '2022'},
            { src: sangvi.src, title: 'SANGHAVI AND SONS', year: '2025' },
            
          ].map((img, i) => (
            <div key={i} className="group cursor-pointer relative overflow-hidden aspect-[4/3] rounded-xl shadow-[0_8px_26px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_40px_rgba(255,140,50,0.25)] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <img 
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{img.title}</h3>
                  <p className="text-[#FFE7A3] text-sm">{img.year}</p>
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