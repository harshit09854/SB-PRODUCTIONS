"use client";
import React, { useState } from 'react';
import { Camera, Film, Award, Mail, Phone, MapPin, Play, X, Menu } from 'lucide-react';

// Navigation Component
const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void; }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = ['Home', 'About', 'Films', 'Services', 'Contact'];
  
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gold tracking-wider cursor-pointer" onClick={() => setCurrentPage('Home')}>
            SB PRODUCTIONS
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

// Footer Component
const Footer = () => (
  <footer className="bg-black border-t border-gold/20 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-gold text-xl font-bold mb-4">SB PRODUCTIONS</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting cinematic stories that resonate. Excellence in every frame.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <div>About</div>
            <div>Films</div>
            <div>Services</div>
            <div>Contact</div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <div>Instagram</div>
            <div>LinkedIn</div>
            <div>Twitter</div>
            <div>YouTube</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/20 pt-8 text-center text-gray-500 text-sm">
        © 2025 Sanjay Bhatt Productions. All rights reserved.
      </div>
    </div>
  </footer>
);

// Home Page
const HomePage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void; }) => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
      <img 
        src="https://images.unsplash.com/photo-1574267432644-f610bcf57b02?w=1920&q=80" 
        alt="Cinematic background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <div className="mb-6 inline-block px-4 py-2 border border-gold/30 text-gold text-sm tracking-widest">
          FILM DIRECTOR
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          SANJAY BHATT
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 tracking-wide">
          Creative Producer | Storyteller | Visionary
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setCurrentPage('Films')}
            className="px-8 py-4 bg-gold text-black font-semibold tracking-wider hover:bg-gold/90 transition-all"
          >
            VIEW WORK
          </button>
          <button 
            onClick={() => setCurrentPage('Contact')}
            className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wider hover:bg-white hover:text-black transition-all"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
    
    {/* Featured Work Teaser */}
    <div className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          FEATURED WORK
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'photo-1542204165-65bf26472b9b',
            'photo-1535016120720-40c646be5580',
            'photo-1489599849927-2ee91cede3ba'
          ].map((img, i) => (
            <div key={i} className="group cursor-pointer relative overflow-hidden aspect-[2/3]">
              <img 
                src={`https://images.unsplash.com/${img}?w=600&q=80`}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Project Title {i + 1}</h3>
                  <p className="text-gold text-sm">2024</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// About Page
const AboutPage = () => (
  <div className="min-h-screen bg-black pt-24 pb-20 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Sanjay Bhatt"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 border-4 border-gold/30 -m-4" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-gold text-sm tracking-widest mb-4">ABOUT THE DIRECTOR</div>
          <h1 className="text-5xl font-bold text-white mb-6">Sanjay Bhatt</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            With over 15 years of experience in filmmaking, I bring stories to life through a unique blend of visual poetry and narrative depth. My work spans feature films, documentaries, and commercial projects.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every frame is a canvas. Every story deserves to be told with passion, precision, and purpose.
          </p>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">JOURNEY</h2>
        <div className="space-y-8">
          {[
            { year: '2024', title: 'Award-Winning Director', desc: 'Best Director at Mumbai International Film Festival' },
            { year: '2022', title: 'Production House Launch', desc: 'Founded Sanjay Bhatt Productions' },
            { year: '2018', title: 'First Feature Film', desc: 'Debut feature film premiered at Cannes' },
            { year: '2010', title: 'Career Begins', desc: 'Started as assistant director' }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start border-l-2 border-gold/30 pl-8 hover:border-gold transition-colors">
              <div className="text-gold font-bold text-2xl min-w-[80px]">{item.year}</div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {[
          { num: '15+', label: 'Years Experience' },
          { num: '50+', label: 'Projects' },
          { num: '12', label: 'Awards' },
          { num: '100+', label: 'Team Members' }
        ].map((stat, i) => (
          <div key={i} className="border border-gold/30 p-8 hover:bg-gold/5 transition-colors">
            <div className="text-4xl font-bold text-gold mb-2">{stat.num}</div>
            <div className="text-gray-400 text-sm tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Films Page
interface Film {
  id: number;
  title: string;
  year: string;
  genre: string;
  img: string;
}
const FilmsPage = () => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  
  const films = [
    { id: 1, title: 'Shadows of Tomorrow', year: '2024', genre: 'Drama', img: 'photo-1542204165-65bf26472b9b' },
    { id: 2, title: 'Urban Legends', year: '2023', genre: 'Thriller', img: 'photo-1535016120720-40c646be5580' },
    { id: 3, title: 'Echoes', year: '2023', genre: 'Mystery', img: 'photo-1489599849927-2ee91cede3ba' },
    { id: 4, title: 'The Last Frame', year: '2022', genre: 'Documentary', img: 'photo-1574267432644-f610bcf57b02' },
    { id: 5, title: 'Midnight Stories', year: '2022', genre: 'Horror', img: 'photo-1485846234160-0a1dd7228f2d' },
    { id: 6, title: 'Horizon', year: '2021', genre: 'Sci-Fi', img: 'photo-1536440136628-849c177e76a1' }
  ];
  
  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-gold text-sm tracking-widest mb-4">PORTFOLIO</div>
          <h1 className="text-5xl font-bold text-white mb-4">FILMS & PROJECTS</h1>
          <p className="text-gray-400 text-lg">A collection of stories told through cinema</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {films.map(film => (
            <div 
              key={film.id} 
              onClick={() => setSelectedFilm(film)}
              className="group cursor-pointer relative overflow-hidden aspect-[2/3]"
            >
              <img 
                src={`https://images.unsplash.com/${film.img}?w=600&q=80`}
                alt={film.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-gold text-xs tracking-widest mb-2">{film.genre}</div>
                  <h3 className="text-white text-2xl font-bold mb-2">{film.title}</h3>
                  <p className="text-gray-400 text-sm">{film.year}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="text-gold w-16 h-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Film Detail Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={() => setSelectedFilm(null)}>
          <div className="max-w-4xl w-full bg-zinc-900 border border-gold/30" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-video">
              <img 
                src={`https://images.unsplash.com/${selectedFilm.img}?w=1200&q=80`}
                alt={selectedFilm.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedFilm(null)}
                className="absolute top-4 right-4 text-white hover:text-gold"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="p-8">
              <div className="text-gold text-xs tracking-widest mb-2">{selectedFilm.genre}</div>
              <h2 className="text-3xl font-bold text-white mb-4">{selectedFilm.title}</h2>
              <p className="text-gray-400 mb-4">Year: {selectedFilm.year}</p>
              <p className="text-gray-300 leading-relaxed">
                A powerful cinematic experience that explores the depths of human emotion and storytelling. 
                This project showcases innovative cinematography and compelling narrative structure.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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
                  <p className="text-gray-400">contact@sanjaybhatt.com</p>
                  <p className="text-gray-400">info@sbproductions.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Phone className="text-gold w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-400">+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-gold w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Office</h3>
                  <p className="text-gray-400">Film City Complex<br/>Andheri West, Mumbai<br/>Maharashtra 400053</p>
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
        .bg-gold\\/5 { background-color: rgba(212, 175, 55, 0.05); }
        .border-gold\\/20 { border-color: rgba(212, 175, 55, 0.2); }
        .border-gold\\/30 { border-color: rgba(212, 175, 55, 0.3); }
      `}</style>
      
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'Home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'About' && <AboutPage />}
      {currentPage === 'Films' && <FilmsPage />}
      {currentPage === 'Services' && <ServicesPage />}
      {currentPage === 'Contact' && <ContactPage />}
      
      <Footer />
    </div>
  );
}