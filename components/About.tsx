
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-dark-text leading-relaxed text-left">
          Aspiring Software Developer skilled in Java, Kotlin, and Python, with hands-on experience in Android development using Kotlin and Jetpack Compose, and backend development using Django and MySQL. Familiar with AI-powered applications and strong in Data Structures and Algorithms. Passionate about building reliable, efficient, and user-focused solutions.
        </p>
      </div>
    </Section>
  );
};

export default About;
