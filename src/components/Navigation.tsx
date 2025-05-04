
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Instagram, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className={cn("w-full py-6", className)}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-2xl font-bold text-gray-800 dark:text-gray-200 mr-10">
            <img 
              src="/lovable-uploads/0788fa2d-97dc-4fbc-a56b-dcc61c27bb32.png" 
              alt="Tiddle Logo" 
              className="h-8 mr-2 dark:invert" 
            />
            <span className="text-tiddle-purple">Tiddle</span>.io
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/roster" className="text-gray-600 dark:text-gray-300 hover:text-tiddle-purple transition-colors">Roster</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-tiddle-purple transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <a href="https://www.instagram.com/tiddle.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-tiddle-purple">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden text-gray-600 dark:text-gray-300" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] pt-12">
            <div className="flex flex-col space-y-6">
              <Link 
                to="/roster" 
                className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-tiddle-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Roster
              </Link>
              <Link 
                to="/contact" 
                className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-tiddle-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-4">
                <ThemeToggle />
                <a 
                  href="https://www.instagram.com/tiddle.io" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-300 hover:text-tiddle-purple"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
