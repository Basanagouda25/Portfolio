import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/70 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-accent font-mono">BD</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link, index) => (
            <a key={link.name} href={link.href} className="text-dark-text hover:text-light-text transition-colors duration-300">
              <span className="text-accent font-mono">{`0${index + 1}.`}</span> {link.name}
            </a>
          ))}
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/20 backdrop-blur-sm text-accent font-mono px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
            Resume
          </a>
        </div>
        
        {/* Mobile Nav Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-dark-bg/95 backdrop-blur-sm transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {NAV_LINKS.map((link, index) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl text-light-text hover:text-accent transition-colors duration-300">
                <span className="text-accent font-mono">{`0${index + 1}.`}</span> {link.name}
              </a>
            ))}
             <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-2xl bg-white/5 border border-white/20 backdrop-blur-sm text-accent font-mono px-6 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;