
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-tiddle-background">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg my-4 overflow-hidden">
        <Navigation />
        <Hero />
        <ClientLogos />
      </div>
    </div>
  );
};

export default Index;
