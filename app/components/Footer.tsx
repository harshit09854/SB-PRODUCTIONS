/** @jsxImportSource react */
"use client";
import React from 'react';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import logo from '../logo.png';

// Footer Component
const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void; }) => (
  <footer className="bg-[#0D0D0D] text-[#F5C542] py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Logo and Brand */}
        <div className="md:col-span-2">
          <div onClick={() => setCurrentPage('Home')} className="cursor-pointer inline-block mb-4">
            <img src={logo.src} alt="Logo" className="h-24 w-auto brightness-0 invert" />
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-sm">
            Crafting cinematic stories that resonate. Excellence in every frame.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-white/90">
            <a onClick={() => setCurrentPage('About')} className="block cursor-pointer hover:text-[#F5C542] transition-colors duration-300">About</a>
            <a onClick={() => setCurrentPage('Films')} className="block cursor-pointer hover:text-[#F5C542] transition-colors duration-300">Films</a>
            <a onClick={() => setCurrentPage('Services')} className="block cursor-pointer hover:text-[#F5C542] transition-colors duration-300">Services</a>
            <a onClick={() => setCurrentPage('Contact')} className="block cursor-pointer hover:text-[#F5C542] transition-colors duration-300">Contact</a>
          </div>
        </div>
        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-[#F5C542] hover:text-white transition-colors duration-300"><Instagram className="filter hover:drop-shadow-[0_0_4px_rgba(245,197,66,0.8)]" /></a>
            <a href="#" className="text-[#F5C542] hover:text-white transition-colors duration-300"><Linkedin className="filter hover:drop-shadow-[0_0_4px_rgba(245,197,66,0.8)]" /></a>
            <a href="#" className="text-[#F5C542] hover:text-white transition-colors duration-300"><Twitter className="filter hover:drop-shadow-[0_0_4px_rgba(245,197,66,0.8)]" /></a>
            <a href="#" className="text-[#F5C542] hover:text-white transition-colors duration-300"><Youtube className="filter hover:drop-shadow-[0_0_4px_rgba(245,197,66,0.8)]" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
        © 2025 Sanjay Bhatt Productions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;