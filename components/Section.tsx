import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-light-text whitespace-nowrap mr-4">
          <span className="text-accent font-mono">#</span> {title}
        </h2>
        <div className="w-full h-px bg-slate-700"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;