
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { DesignSystemOverlay } from './components/DesignSystemOverlay';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
      {/* 
        The prompt asked for a design system description. 
        I've included a toggleable UI element that explains the design choices 
        to help a WeWeb developer understand the logic.
      */}
      <DesignSystemOverlay />
    </div>
  );
};

export default App;
