
import React from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Instagram } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={cn("w-full py-6 px-4 md:px-8", className)}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mr-10">
            <span className="text-tiddle-purple">Tiddle</span>.io
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-tiddle-purple transition-colors">About</a>
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-tiddle-purple transition-colors">Features</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-tiddle-purple transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <a href="https://www.instagram.com/tiddle.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-tiddle-purple">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        
        <button className="md:hidden text-gray-600 dark:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
