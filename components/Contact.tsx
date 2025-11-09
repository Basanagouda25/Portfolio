import React from 'react';
import { CONTACT_DATA } from '../constants';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-dark-text text-lg mb-8">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:basanagoudad25@gmail.com" className="inline-block bg-gradient-to-r from-accent to-purple-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-accent/40 hover:scale-105 transform transition-all duration-300 text-lg">
          Say Hello
        </a>
        <div className="mt-12 flex justify-center flex-wrap gap-x-8 gap-y-4">
          {CONTACT_DATA.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-dark-text hover:text-accent transition-colors duration-300">
                  <item.icon className="w-6 h-6"/>
                  <span className="font-mono">{item.value}</span>
              </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;