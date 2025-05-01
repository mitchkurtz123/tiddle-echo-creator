
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import TopCreators from '@/components/TopCreators';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-tiddle-background dark:bg-gray-900">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-lg my-4 overflow-hidden">
        <Navigation />
        <Hero />
        <ClientLogos />
        <TopCreators />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
