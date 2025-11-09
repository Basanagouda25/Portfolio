import React from 'react';
import { CERTIFICATES_DATA } from '../constants';
import Section from './Section';
import { ExternalLinkIcon } from './icons';

const Certificates: React.FC = () => {
  return (
    <Section id="certificates" title="Certificates">
      <div className="max-w-3xl mx-auto">
        {CERTIFICATES_DATA.map((cert, index) => (
          <div key={index} className="bg-slate-900/50 backdrop-blur-lg border border-slate-800 p-6 rounded-xl shadow-2xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 hover:shadow-accent/10">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-light-text">{cert.title}</h3>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-accent transition-colors duration-300">
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            </div>
            <p className="text-dark-text mt-2">{cert.description}</p>
            <p className="text-sm text-accent font-mono mt-2">{cert.year}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;