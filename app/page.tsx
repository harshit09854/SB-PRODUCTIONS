/** @jsxImportSource react */
"use client";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FilmsPage from './components/FilmsPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

// Main App
export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .text-gold { color: #d4af37; }
        .bg-gold { background-color: #d4af37; }
        .border-gold { border-color: #d4af37; }
        .bg-gold\/5 { background-color: rgba(212, 175, 55, 0.05); }
        .border-gold\/20 { border-color: rgba(212, 175, 55, 0.2); }
        .border-gold\/30 { border-color: rgba(212, 175, 55, 0.3); }
      `}</style>
      
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'Home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'About' && <AboutPage />}
      {currentPage === 'Films' && <FilmsPage />}
      {currentPage === 'Services' && <ServicesPage />}
      {currentPage === 'Contact' && <ContactPage />}
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
