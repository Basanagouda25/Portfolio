import React from 'react';
import { SKILLS_DATA } from '../constants';
import Section from './Section';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((category) => (
          <div key={category.title} className="bg-slate-900/50 backdrop-blur-lg border border-slate-800 p-6 rounded-xl shadow-2xl transition-all duration-300 hover:border-accent/50 hover:shadow-accent/10">
            <h3 className="text-xl font-bold text-light-text mb-4 border-b-2 border-accent/30 pb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill.name} className="bg-dark-bg text-accent text-sm font-mono px-3 py-1 rounded-full">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;