/** @jsxImportSource react */
"use client";
import React from 'react';
import SanjayBhatt from '../SanjayBhatt.png';
import kevin from '../kevin.png'
import rohitsir from '../rohitsir.jpg'
// About Page
const AboutPage = () => (
  <div className="min-h-screen bg-black pt-15 pb-20 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      
      {/* Timeline */}
      {/* <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">JOURNEY</h2>
        <div className="space-y-8">
          {[
            { year: '2024', title: 'Award-Winning Director', desc: 'Best Director at Mumbai International Film Festival' },
            { year: '2022', title: 'Production House Launch', desc: 'Founded Sanjay Bhatt Productions' },
            { year: '2018', title: 'First Feature Film', desc: 'Debut feature film premiered at Cannes' },
            { year: '2010', title: 'Career Begins', desc: 'Started as assistant director' }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start border-l-2 border-gold/30 pl-8 hover:border-gold transition-colors">
              <div className="text-gold font-bold text-2xl min-w-[80px]">{item.year}</div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* Intro// */}
      <div className='mt-2 '>
        <h1 className=' text-5xl font-bold text-white mb-6 text-center mt-10' >Introduction</h1>
        <p className="text-gray-300 text-2xl leading-relaxed mb-6 ">Sanjay Bhatt Production, founded by Sanjay Bhatt and Kevin Bhatt. The company focuses on delivering excellence in film and entertainment production, combining creativity with professionalism to bring unique stories to life. It stands as a beacon for authentic storytelling in cinema. Founded on a vision to showcase rich cultural narratives, we blend traditional artistry with contemporary filmmaking techniques to create compelling and resonant cinematic experiences.</p>
        </div>
        <div>
        <h1 className=' text-5xl font-bold text-white mb-6 text-center' >Our Team</h1>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img 
              src={SanjayBhatt.src}
              alt="Sanjay Bhatt"
              className="w-full h-auto object-cover transition-all duration-700"
            />
             <h1 className="text-xl font-bold text-white mb-6 ">Sanjay Bhatt</h1>
            <p className="text-white mt-2">CEO - EXPRESS ELEVATORS</p>
          </div>
          <div>
            <img 
              src={kevin.src}
              alt="Kevin"
              className="w-full h-auto object-cover transition-all duration-700"
            />
             <h1 className="text-xl font-bold text-white mb-6 ">Kevin Bhatt</h1>
            <p className="text-white mt-2">CEO - EXPRESS ELEVATORS</p>
          </div>
          <div>
            <img 
              src={rohitsir.src}
              alt="Rohitsir"
              className="w-full h-auto object-cover transition-all duration-700"
            />
            <p className="text-white mt-2">Rohitsir</p>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-8 text-center mt-10">
        {[
          { num: '15+', label: 'Years Experience' },
          { num: '50+', label: 'Projects' },
          { num: '12', label: 'Awards' },
          { num: '100+', label: 'Team Members' }
        ].map((stat, i) => (
          <div key={i} className="border border-gold/30 p-8 hover:bg-gold/5 transition-colors">
            <div className="text-4xl font-bold text-gold mb-2">{stat.num}</div>
            <div className="text-gray-400 text-sm tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;