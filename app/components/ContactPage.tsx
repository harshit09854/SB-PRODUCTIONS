/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-gold text-sm tracking-widest mb-4">GET IN TOUCH</div>
          <h1 className="text-5xl font-bold text-white mb-4">LET'S CREATE TOGETHER</h1>
          <p className="text-gray-400 text-lg">Have a project in mind? Let's discuss how we can bring your vision to life</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-white text-sm mb-2">Your Name</label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-zinc-900 border border-gold/30 text-white px-4 py-3 focus:outline-none focus:border-gold"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Email Address</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-zinc-900 border border-gold/30 text-white px-4 py-3 focus:outline-none focus:border-gold"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Your Message</label>
                <textarea 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full bg-zinc-900 border border-gold/30 text-white px-4 py-3 focus:outline-none focus:border-gold"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  alert('Message sent! (This is a demo - integrate with your backend)');
                }}
                className="w-full bg-gold text-black font-semibold py-4 tracking-wider hover:bg-gold/90 transition-colors"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border border-gold/30 p-8">
              <div className="flex items-start gap-4 mb-6">
                <Mail className="text-gold w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">sanjaybhattproductions@gmail.com</p>
                  {/* <p className="text-gray-400">info@sbproductions.com</p> */}
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Phone className="text-gold w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-gray-400">+91 9825140710</p>
                  <p className="text-gray-400">+91 9426409333</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-gold w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Office</h3>
                  <p className="text-gray-400">“ 1204”12th floor ,north block ,Twinstar building near nana mava circle, 150 feet main road rajkot -360004</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="border border-gold/30 p-8">
              <h3 className="text-white font-semibold mb-4">Connect on Social Media</h3>
              <div className="flex gap-4">
                {['Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map((platform, i) => (
                  <button key={i} className="px-4 py-2 border border-gold/30 text-gray-400 text-sm hover:text-gold hover:border-gold transition-colors">
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