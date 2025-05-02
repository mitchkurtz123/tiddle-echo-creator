
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import TopCreators from '@/components/TopCreators';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-tiddle-background dark:bg-gray-900">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-lg my-4 overflow-hidden">
        <Navigation />
        <Hero />
        <ClientLogos />
        
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Looking to collaborate with our creators?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We connect brands with the perfect influencers to tell their story. 
              Our team handles everything from creator selection to campaign execution.
            </p>
            <Button 
              className="bg-tiddle-purple hover:bg-tiddle-purple/90 text-white px-8 py-2.5 rounded-full text-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Start a Campaign
            </Button>
          </div>
        </div>
        
        <TopCreators />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
