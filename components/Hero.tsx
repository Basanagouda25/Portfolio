import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center opacity-0 animate-fade-in-up">
      <div className="max-w-4xl">
        <p className="text-accent font-mono text-lg mb-4">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Basanagouda D.</h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-text mt-2">Aspiring Software Developer.</h2>
        <p className="text-dark-text mt-6 max-w-xl mx-auto text-lg leading-relaxed">
          I build Android apps, backend systems, and practical AI-powered projects.
        </p>

        <div className="flex items-center justify-center space-x-6 mt-8">
          {SOCIAL_LINKS.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-dark-text hover:text-accent transform hover:scale-110 transition-all duration-300">
              <link.icon className="w-8 h-8" />
            </a>
          ))}
        </div>

        <a href="#contact" className="inline-block mt-12 bg-gradient-to-r from-accent to-purple-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-accent/40 hover:scale-105 transform transition-all duration-300 text-lg">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;