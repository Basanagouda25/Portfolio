import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <div className="background-container" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-48">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;