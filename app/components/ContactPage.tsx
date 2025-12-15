/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0D0D0D] pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0D0D0D] mb-4 uppercase tracking-wider text-shadow-[0_0_8px_rgba(245,197,66,0.4)]">LET'S CREATE TOGETHER</h1>
          <p className="text-[#333333] text-lg">Have a project in mind? Let's discuss how we can bring your vision to life</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-[#333333] text-sm mb-2 font-semibold">Your Name</label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border border-[rgba(0,0,0,0.06)] text-[#333333] px-4 py-3 focus:outline-none focus:border-[#F5C542] focus:ring-2 focus:ring-[#F5C542]/30 rounded-lg transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[#333333] text-sm mb-2 font-semibold">Email Address</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border border-[rgba(0,0,0,0.06)] text-[#333333] px-4 py-3 focus:outline-none focus:border-[#F5C542] focus:ring-2 focus:ring-[#F5C542]/30 rounded-lg transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[#333333] text-sm mb-2 font-semibold">Your Message</label>
                <textarea 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full bg-white border border-[rgba(0,0,0,0.06)] text-[#333333] px-4 py-3 focus:outline-none focus:border-[#F5C542] focus:ring-2 focus:ring-[#F5C542]/30 rounded-lg transition-all duration-300"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  alert('Message sent! (This is a demo - integrate with your backend)');
                }}
                className="w-full bg-gradient-to-r from-[#F5C542] to-[#FF7A00] text-[#0D0D0D] font-semibold py-3.5 tracking-wider rounded-full shadow-[0px_6px_18px_rgba(255,165,0,0.35)] hover:shadow-[0px_8px_22px_rgba(255,165,0,0.5)] transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="border border-[rgba(0,0,0,0.06)] p-8 rounded-2xl bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.12)]">
              <div className="flex items-start gap-4 mb-6">
                <Mail className="text-[#FF7A00] w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-[#0D0D0D] font-semibold mb-2">Email</h3>
                  <p className="text-[#333333]">sanjaybhattproductions@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Phone className="text-[#FF7A00] w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-[#0D0D0D] font-semibold mb-2">Phone</h3>
                  <p className="text-[#333333]">+91 9825140710</p>
                  <p className="text-[#333333]">+91 9426409333</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-[#FF7A00] w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-[#0D0D0D] font-semibold mb-2">Office</h3>
                  <p className="text-[#333333]">“ 1204”12th floor ,north block ,Twinstar building near nana mava circle, 150 feet main road rajkot -360004</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="border border-[rgba(0,0,0,0.06)] p-8 rounded-2xl bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.12)]">
              <h3 className="text-[#0D0D0D] font-semibold mb-4">Connect on Social Media</h3>
              <div className="flex gap-4">
                {['Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map((platform, i) => (
                  <button key={i} className="px-4 py-2 border-2 border-[#D4A017] text-[#D4A017] text-sm hover:bg-[#D4A017] hover:text-black transition-colors duration-300 rounded-lg font-semibold">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;