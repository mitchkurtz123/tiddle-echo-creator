
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerTrigger, DrawerOverlay, DrawerClose } from "@/components/ui/drawer";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return <nav className={cn("w-full py-6", className)}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-2xl font-bold text-gray-800 mr-10">
            <img 
              src="/lovable-uploads/6682f033-039b-49e9-bbdd-7c2a43c0ed3a.png" 
              alt="Tiddle Logo" 
              className="h-6 mr-2"
            />
            <span className="text-tiddle-purple">Tiddle</span>.io
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/roster" className="text-gray-600 hover:text-tiddle-purple transition-colors">Roster</Link>
            <Link to="/contact" className="text-gray-600 hover:text-tiddle-purple transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.instagram.com/tiddle.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-tiddle-purple">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        
        {/* Mobile Menu with Drawer */}
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </DrawerTrigger>
          <DrawerOverlay className="bg-black/60 backdrop-blur-sm" />
          <DrawerContent className="w-full max-h-[85vh] bg-white p-6 rounded-t-xl">
            <div className="flex items-center justify-between mb-6 my-[10px]">
              <Link to="/" className="flex items-center text-xl font-bold" onClick={() => setIsOpen(false)}>
                <img 
                  src="/lovable-uploads/6682f033-039b-49e9-bbdd-7c2a43c0ed3a.png" 
                  alt="Tiddle Logo" 
                  className="h-5 mr-2"
                />
                <span className="text-tiddle-purple">Tiddle</span>.io
              </Link>
              <DrawerClose className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5 text-gray-600" />
              </DrawerClose>
            </div>
            <div className="flex flex-col space-y-6">
              <Link to="/roster" className="text-lg font-medium text-gray-800 hover:text-tiddle-purple transition-colors p-2 rounded-md hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                Roster
              </Link>
              <Link to="/contact" className="text-lg font-medium text-gray-800 hover:text-tiddle-purple transition-colors p-2 rounded-md hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <a href="https://www.instagram.com/tiddle.io" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-tiddle-purple p-2 rounded-md hover:bg-gray-100">
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>;
};

export default Navigation;
