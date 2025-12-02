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
    <div className="min-h-screen bg-black pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-gold text-sm tracking-widest mb-4">WHAT WE DO</div>
          <h1 className="text-5xl font-bold text-white mb-4">SERVICES</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive filmmaking services delivered with creativity, precision, and cinematic excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, i) => (
            <div key={i} className="border border-gold/30 p-10 hover:bg-gold/5 hover:border-gold transition-all group">
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Process Section */}
        <div className="border-t border-gold/30 pt-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">OUR PROCESS</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Concept', desc: 'Story development & creative vision' },
              { num: '02', title: 'Pre-Production', desc: 'Planning, casting & logistics' },
              { num: '03', title: 'Production', desc: 'Filming & on-set direction' },
              { num: '04', title: 'Post-Production', desc: 'Editing, VFX & final delivery' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-bold text-gold/20 mb-4">{step.num}</div>
                <h4 className="text-white text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;