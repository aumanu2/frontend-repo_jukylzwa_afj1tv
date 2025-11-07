import React from 'react';
import Hero3D from './components/Hero3D';
import FeatureGrid from './components/FeatureGrid';
import OneLinePitch from './components/OneLinePitch';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero3D />
      <OneLinePitch />
      <FeatureGrid />
      <CTA />
      <footer className="border-t border-amber-100 bg-white/60 py-8 text-center text-sm text-gray-500 backdrop-blur">
        © {new Date().getFullYear()} Nityakarma. Crafted with respect for tradition and love for design.
      </footer>
    </div>
  );
}

export default App;
