/** @jsxImportSource react */
"use client";
import React from 'react';
import Image from 'next/image';
import SanjayBhatt from '../SanjayBhatt.png';
import kevin from '../kevin.png';
import rohitsir from '../rohitsir.jpg';

const AboutPage = () => (
  <div className="min-h-screen bg-black text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          About Our Vision
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Sanjay Bhatt Production, founded by Sanjay Bhatt and Kevin Bhatt, is dedicated to delivering excellence in film and entertainment. We focus on bringing unique stories to life by blending creativity with professionalism, making us a beacon for authentic storytelling in cinema.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Sanjay Bhatt */}
          <div className="bg-gray-800 rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <Image 
              src={SanjayBhatt}
              alt="Sanjay Bhatt"
              className="w-32 h-32 rounded-full mx-auto mb-4"
              width={128}
              height={128}
            />
            <h3 className="text-2xl font-bold text-gold">⭐ Sanjay Bhatt</h3>
            <p className="text-md font-semibold text-gray-400 mb-2">Partner, Visionary Investor & Director – Express Elevator</p>
            <p className="text-gray-300">
              A strategic entrepreneur with strong investment insights, Sanjay Bhatt brings leadership, financial expertise, and long-term vision to the company’s creative and commercial growth.
            </p>
          </div>

          {/* Kevin Bhatt */}
          <div className="bg-gray-800 rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <Image 
              src={kevin}
              alt="Kevin Bhatt"
              className="w-32 h-32 rounded-full mx-auto mb-4"
              width={128}
              height={128}
            />
            <h3 className="text-2xl font-bold text-gold">⭐ Kevin Bhatt</h3>
            <p className="text-md font-semibold text-gray-400 mb-2">Partner & Growth Expert</p>
            <p className="text-gray-300">
              Focused on business expansion and market strategy, Kevin Bhatt specializes in driving scalable growth, partnerships, and brand development for the production house.
            </p>
          </div>

          {/* Rohit Paliwal */}
          <div className="bg-gray-800 rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <Image 
              src={rohitsir}
              alt="Rohit Paliwal"
              className="w-32 h-32 rounded-full mx-auto mb-4"
              width={128}
              height={128}
            />
            <h3 className="text-2xl font-bold text-gold">⭐ Rohit Paliwal</h3>
            <p className="text-md font-semibold text-gray-400 mb-2">Group CEO, Vayam Group – Partner, Visionary Entrepreneur & Technology Expert</p>
            <p className="text-gray-300">
              A technology-driven entrepreneur with expertise in business development, operations, and strategic planning. Rohit Paliwal contributes innovation, digital transformation, and strong execution capabilities to the firm.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-10 border-t border-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Journey in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-gold mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-gold mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-gold mb-2">12</div>
            <div className="text-gray-400">Industry Awards</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl font-bold text-gold mb-2">100+</div>
            <div className="text-gray-400">Team Members</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;