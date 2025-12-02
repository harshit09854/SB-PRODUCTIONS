/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../logo.jpg';

// Navigation Component
const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void; }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = ['Home', 'About', 'Films', 'Services', 'Contact'];
  
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gold tracking-wider cursor-pointer" onClick={() => setCurrentPage('Home')}>
           <img src={logo.src} alt="Logo" className="h-15 w-auto mr-2" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`text-sm tracking-wider transition-colors ${
                  currentPage === item ? 'text-gold' : 'text-white hover:text-gold'
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
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
                className={`block w-full text-left py-2 text-sm tracking-wider transition-colors ${
                  currentPage === item ? 'text-gold' : 'text-white hover:text-gold'
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