/** @jsxImportSource react */
"use client";
import React from 'react';
import { Film, Camera, Play, Award } from 'lucide-react';

// Services Page
const ServicesPage = () => {
  const services = [
    {
      icon: <Film className="w-12 h-12" />,
      title: 'Film Production',
      desc: 'Full-scale feature film production from concept to post-production'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Direction',
      desc: 'Creative direction for films, series, and documentary projects'
    },
    {
      icon: <Play className="w-12 h-12" />,
      title: 'Ad Films',
      desc: 'High-impact commercial advertisements and brand films'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Music Videos',
      desc: 'Cinematic music videos for artists and labels'
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#FAF7F2] mt-20 text-[#0D0D0D] pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0D0D0D] mb-4 uppercase tracking-wider text-shadow-[0_0_8px_rgba(245,197,66,0.4)]">SERVICES</h1>
          <p className="text-[#333333] text-lg max-w-2xl mx-auto">
            Comprehensive filmmaking services delivered with creativity, precision, and cinematic excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl p-10 shadow-[0px_4px_30px_rgba(0,0,0,0.12)] hover:shadow-[0px_8px_35px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 border border-transparent hover:border-[#F5C542] transition-all duration-300 ease-in-out group">
              <div className="text-[#FF7A00] mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ease-in-out">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-3">{service.title}</h3>
              <p className="text-[#333333] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Process Section */}
        <div className="border-t border-[rgba(0,0,0,0.06)] pt-20">
          <h2 className="text-3xl font-bold text-[#0D0D0D] mb-12 text-center text-shadow-[0px_0px_12px_rgba(245,197,66,0.6)]">OUR PROCESS</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Concept', desc: 'Story development & creative vision' },
              { num: '02', title: 'Pre-Production', desc: 'Planning, casting & logistics' },
              { num: '03', title: 'Production', desc: 'Filming & on-set direction' },
              { num: '04', title: 'Post-Production', desc: 'Editing, VFX & final delivery' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-bold text-[#F5C542]/40 mb-4">{step.num}</div>
                <h4 className="text-[#0D0D0D] text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-[#333333] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;