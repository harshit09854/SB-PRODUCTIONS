/** @jsxImportSource react */
"use client";
import React from 'react';
import Image from 'next/image';
import SanjayBhatt from '../SanjayBhatt.png';
import kevin from '../kevin.png';
import rohitsir from '../rohitsir.jpg';

// Note: For optimal font rendering, ensure "Montserrat" is imported globally
// (e.g., in globals.css or via _document.js/_app.js)
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');

const AboutPage = () => (
  <div className="min-h-screen bg-[#FAF7F2] text-[#0D0D0D] pt-20 pb-12 mt-20 px-4 sm:px-6 lg:px-8 font-['Montserrat']">
    <div className="max-w-7xl mx-auto">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0D0D0D] leading-tight mb-4 uppercase tracking-wider text-shadow-[0_0_8px_rgba(245,197,66,0.4)]">
          About Our Vision
        </h1>
        <p className="text-lg sm:text-xl text-[#333333] max-w-3xl mx-auto">
          Sanjay Bhatt Production, founded by Sanjay Bhatt and Kevin Bhatt, is dedicated to delivering excellence in film and entertainment. We focus on bringing unique stories to life by blending creativity with professionalism, making us a beacon for authentic storytelling in cinema.
        </p>
      </div>

      {/* Section Separator Line */}
      <div className="flex justify-center my-16">
        <div className="h-3 w-20 bg-gradient-to-r from-[#FF7A00] to-[#F5C542] rounded-full"></div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0D0D0D] mb-10 text-shadow-[0_0_12px_rgba(245,197,66,0.6)]">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Sanjay Bhatt */}
          <div className="group bg-[#FAF7F2] rounded-xl p-8 text-center shadow-[0px_4px_30px_rgba(0,0,0,0.12)] hover:shadow-[0px_8px_35px_rgba(0,0,0,0.18)] hover:-translate-y-5 transition-all duration-300 ease-in-out border border-transparent hover:border-[#F5C542]">
            <Image 
              src={SanjayBhatt}
              alt="Sanjay Bhatt"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#FAF7F2] group-hover:border-[#F5C542] shadow-md transition-all duration-300 ease-in-out"
              width={128}
              height={128}
            />
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-1">Sanjay Bhatt</h3>
            <p className="text-md font-semibold text-[#FF7A00] mb-2">Partner, Visionary Investor & Director – Express Elevator</p>
            <p className="text-[#333333] text-sm">
              A strategic entrepreneur with strong investment insights, Sanjay Bhatt brings leadership, financial expertise, and long-term vision to the company’s creative and commercial growth.
            </p>
          </div>

          {/* Kevin Bhatt */}
          <div className="group bg-[#FAF7F2] rounded-xl p-8 text-center shadow-[0px_4px_30px_rgba(0,0,0,0.12)] hover:shadow-[0px_8px_35px_rgba(0,0,0,0.18)] hover:-translate-y-5 transition-all duration-300 ease-in-out border border-transparent hover:border-[#F5C542]">
            <Image 
              src={kevin}
              alt="Kevin Bhatt"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#FAF7F2] group-hover:border-[#F5C542] shadow-md transition-all duration-300 ease-in-out"
              width={128}
              height={128}
            />
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-1">Kevin Bhatt</h3>
            <p className="text-md font-semibold text-[#FF7A00] mb-2">Partner & Growth Expert</p>
            <p className="text-[#333333] text-sm">
              Focused on business expansion and market strategy, Kevin Bhatt specializes in driving scalable growth, partnerships, and brand development for the production house.
            </p>
          </div>

          {/* Rohit Paliwal */}
          <div className="group bg-[#FAF7F2] rounded-xl p-8 text-center shadow-[0px_4px_30px_rgba(0,0,0,0.12)] hover:shadow-[0px_8px_35px_rgba(0,0,0,0.18)] hover:-translate-y-5 transition-all duration-300 ease-in-out border border-transparent hover:border-[#F5C542]">
            <Image 
              src={rohitsir}
              alt="Rohit Paliwal"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#FAF7F2] group-hover:border-[#F5C542] shadow-md transition-all duration-300 ease-in-out"
              width={128}
              height={128}
            />
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-1">Rohit Paliwal</h3>
            <p className="text-md font-semibold text-[#FF7A00] mb-2">Group CEO, Vayam Group – Partner, Visionary Entrepreneur & Technology Expert</p>
            <p className="text-[#333333] text-sm">
              A technology-driven entrepreneur with expertise in business development, operations, and strategic planning. Rohit Paliwal contributes innovation, digital transformation, and strong execution capabilities to the firm.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-10 border-t border-[rgba(0,0,0,0.06)]">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-6 text-shadow-[0_0_12px_rgba(245,197,66,0.6)]">Our Journey in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-b from-[#FFF4E1] to-[#FFFFFF] p-6 rounded-lg border border-[rgba(0,0,0,0.06)] shadow-[0px_4px_30px_rgba(0,0,0,0.12)]">
            <div className="text-4xl font-bold text-[#FF7A00] mb-2">15+</div>
            <div className="text-[#333333]">Years Experience</div>
          </div>
          <div className="bg-gradient-to-b from-[#FFF4E1] to-[#FFFFFF] p-6 rounded-lg border border-[rgba(0,0,0,0.06)] shadow-[0px_4px_30px_rgba(0,0,0,0.12)]">
            <div className="text-4xl font-bold text-[#FF7A00] mb-2">50+</div>
            <div className="text-[#333333]">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-b from-[#FFF4E1] to-[#FFFFFF] p-6 rounded-lg border border-[rgba(0,0,0,0.06)] shadow-[0px_4px_30px_rgba(0,0,0,0.12)]">
            <div className="text-4xl font-bold text-[#FF7A00] mb-2">12</div>
            <div className="text-[#333333]">Industry Awards</div>
          </div>
          <div className="bg-gradient-to-b from-[#FFF4E1] to-[#FFFFFF] p-6 rounded-lg border border-[rgba(0,0,0,0.06)] shadow-[0px_4px_30px_rgba(0,0,0,0.12)]">
            <div className="text-4xl font-bold text-[#FF7A00] mb-2">100+</div>
            <div className="text-[#333333]">Team Members</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;