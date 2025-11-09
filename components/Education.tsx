import React from 'react';
import { EDUCATION_DATA } from '../constants';
import Section from './Section';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div className="space-y-8 max-w-3xl mx-auto">
                {EDUCATION_DATA.map((item, index) => (
                    <div key={index} className="bg-slate-900/50 backdrop-blur-lg border border-slate-800 p-6 rounded-xl shadow-2xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 hover:shadow-accent/10">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-light-text">{item.institution}</h3>
                                <p className="text-accent">{item.degree}</p>
                            </div>
                            <p className="text-sm text-dark-text font-mono whitespace-nowrap">{item.period}</p>
                        </div>
                        <p className="mt-2 text-dark-text">{item.grade}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;