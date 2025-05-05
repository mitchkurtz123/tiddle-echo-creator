
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Instagram } from 'lucide-react';

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
            <a href="https://www.instagram.com/tiddle.io" target="_blank" rel="noopener noreferrer" className="text-tiddle-gray dark:text-gray-300 hover:text-tiddle-purple dark:hover:text-tiddle-purple-light transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@tiddle.io" target="_blank" rel="noopener noreferrer" className="text-tiddle-gray dark:text-gray-300 hover:text-tiddle-purple dark:hover:text-tiddle-purple-light transition-colors">
              {/* Custom TikTok SVG icon since it's not available in lucide-react */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                <path d="M19.321 5.562a5.124 5.124 0 0 1-5.956-1.328A5.144 5.144 0 0 1 12.48 2H9.592v13.8c0 1.23-.995 2.225-2.219 2.225A2.222 2.222 0 0 1 5.155 15.8a2.222 2.222 0 0 1 2.219-2.225c.122 0 .243.01.361.029V10.69a5.179 5.179 0 0 0-.668-.044A5.144 5.144 0 0 0 2 15.8a5.144 5.144 0 0 0 5.154 5.157A5.144 5.144 0 0 0 12.307 15.8V8.468a8.112 8.112 0 0 0 4.756 1.53V7.081a5.166 5.166 0 0 1-3.277-1.121l.002-.001A5.165 5.165 0 0 0 19.5 7.68V2a5.13 5.13 0 0 1-1.179.354V5.56l1-1" 
                  fill="currentColor"
                  strokeWidth="0"
                />
              </svg>
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
