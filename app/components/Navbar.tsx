/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../logo.png';

// Navigation Component
const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void; }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = ['Home', 'About', 'Films', 'Services', 'Contact'];
  const ctaItem = 'Contact';
  
  return (
    <nav className="fixed top-0 w-full bg-[#e76f51]/80 backdrop-blur-md z-50 border-b border-white/10 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => setCurrentPage('Home')}>
           <img src={logo.src} alt="Logo" className="h-20 w-30 mr-2 brightness-0 invert" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.filter(item => item !== ctaItem).map(item => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`relative text-sm tracking-[0.5px] font-semibold transition-all duration-300 ease-out hover:text-[#F5C542] hover:-translate-y-px ${
                  currentPage === item 
                    ? 'text-[#FF7A00]' 
                    : 'text-white/90'
                }`}
              >
                {item.toUpperCase()}
                {currentPage === item && (
                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-[#FF7A00]"></span>
                )}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(ctaItem)}
              className="px-5 py-3 bg-gradient-to-r from-[#F5C542] to-[#FF7A00] text-black font-bold rounded-full shadow-[0px_4px_15px_rgba(255,165,0,0.3)] transition-all duration-300 ease-in-out hover:shadow-[0px_6px_20px_rgba(255,165,0,0.45)] hover:-translate-y-px"
            >
              {ctaItem.toUpperCase()}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && ( 
          <div className="md:hidden pt-4 pb-2">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => {
                  setCurrentPage(item);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 text-sm tracking-wider font-semibold transition-colors duration-300 ease-in-out ${
                  currentPage === item ? 'text-[#FF7A00]' : 'text-white/90 hover:text-[#F5C542]'
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;