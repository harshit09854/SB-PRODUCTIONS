/** @jsxImportSource react */
"use client";
import React from 'react';
import logo from '../logo.png';

// Footer Component
const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void; }) => (
  <footer className="bg-black border-t border-gold/20 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div onClick={() => setCurrentPage('Home')} >
          <h3  className=" cursor-pointer text-gold text-xl font-bold mb-4" >  <img  src={logo.src} alt="Logo" className="h-40 w-auto  mr-2" /></h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting cinematic stories that resonate. Excellence in every frame.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <div onClick={() => setCurrentPage('About')} className="cursor-pointer hover:text-gold">About</div>
            <div onClick={() => setCurrentPage('Films')} className="cursor-pointer hover:text-gold">Films</div>
            <div onClick={() => setCurrentPage('Services')} className="cursor-pointer hover:text-gold">Services</div>
            <div onClick={() => setCurrentPage('Contact')} className="cursor-pointer hover:text-gold">Contact</div>
          </div>
        </div>
        {/* <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <div>Instagram</div>
            <div>LinkedIn</div>
            <div>Twitter</div>
            <div>YouTube</div>
          </div>
        </div> */}
      </div>
      <div className="border-t border-gold/20 pt-8 text-center text-gray-500 text-sm">
        © 2025 Sanjay Bhatt Productions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;