
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Instagram, TikTok } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-2xl text-tiddle-purple dark:text-tiddle-purple-light">Tiddle</h3>
            <p className="text-tiddle-gray dark:text-gray-300 mt-2 max-w-md">
              Connect with top creators and grow your influence with our platform.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-tiddle-gray dark:text-gray-300 hover:text-tiddle-purple dark:hover:text-tiddle-purple-light transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-tiddle-gray dark:text-gray-300 hover:text-tiddle-purple dark:hover:text-tiddle-purple-light transition-colors">
              <TikTok size={20} />
            </a>
          </div>
        </div>
        
        <Separator className="my-6 dark:bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-tiddle-gray dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tiddle. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-tiddle-gray dark:text-gray-400 hover:text-tiddle-purple dark:hover:text-tiddle-purple-light text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-tiddle-gray dark:text-gray-400 hover:text-tiddle-purple dark:hover:text-tiddle-purple-light text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-tiddle-gray dark:text-gray-400 hover:text-tiddle-purple dark:hover:text-tiddle-purple-light text-sm transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
