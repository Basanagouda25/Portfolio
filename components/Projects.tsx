import React from 'react';
import { PROJECTS_DATA } from '../constants';
import Section from './Section';
import { GithubIcon, ExternalLinkIcon } from './icons';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="bg-slate-900/50 backdrop-blur-lg border border-slate-800 p-6 rounded-xl shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 hover:shadow-accent/10">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-light-text hover:text-accent transition-colors duration-300">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </h3>
                <div className="flex space-x-3">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-accent transition-colors duration-300">
                    <GithubIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <ul className="list-disc list-inside text-dark-text space-y-2 mb-6">
                {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-accent text-sm font-mono">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;