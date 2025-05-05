
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
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-none">
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
          <a href="https://www.tiktok.com/@tiddle.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-tiddle-purple">
            {/* Custom TikTok SVG icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
              <path d="M19.321 5.562a5.124 5.124 0 0 1-5.956-1.328A5.144 5.144 0 0 1 12.48 2H9.592v13.8c0 1.23-.995 2.225-2.219 2.225A2.222 2.222 0 0 1 5.155 15.8a2.222 2.222 0 0 1 2.219-2.225c.122 0 .243.01.361.029V10.69a5.179 5.179 0 0 0-.668-.044A5.144 5.144 0 0 0 2 15.8a5.144 5.144 0 0 0 5.154 5.157A5.144 5.144 0 0 0 12.307 15.8V8.468a8.112 8.112 0 0 0 4.756 1.53V7.081a5.166 5.166 0 0 1-3.277-1.121l.002-.001A5.165 5.165 0 0 0 19.5 7.68V2a5.13 5.13 0 0 1-1.179.354V5.56l1-1" fill="currentColor" strokeWidth="0" />
            </svg>
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
                <a href="https://www.tiktok.com/@tiddle.io" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-tiddle-purple p-2 rounded-md hover:bg-gray-100">
                  {/* Custom TikTok SVG icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                    <path d="M19.321 5.562a5.124 5.124 0 0 1-5.956-1.328A5.144 5.144 0 0 1 12.48 2H9.592v13.8c0 1.23-.995 2.225-2.219 2.225A2.222 2.222 0 0 1 5.155 15.8a2.222 2.222 0 0 1 2.219-2.225c.122 0 .243.01.361.029V10.69a5.179 5.179 0 0 0-.668-.044A5.144 5.144 0 0 0 2 15.8a5.144 5.144 0 0 0 5.154 5.157A5.144 5.144 0 0 0 12.307 15.8V8.468a8.112 8.112 0 0 0 4.756 1.53V7.081a5.166 5.166 0 0 1-3.277-1.121l.002-.001A5.165 5.165 0 0 0 19.5 7.68V2a5.13 5.13 0 0 1-1.179.354V5.56l1-1" fill="currentColor" strokeWidth="0" />
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>;
};

export default Navigation;
