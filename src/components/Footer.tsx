
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-2xl text-tiddle-purple">Tiddle</h3>
            <p className="text-tiddle-gray mt-2 max-w-md">
              Connect with top creators and grow your influence with our platform.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-tiddle-gray hover:text-tiddle-purple transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-tiddle-gray hover:text-tiddle-purple transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-tiddle-gray hover:text-tiddle-purple transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-tiddle-gray hover:text-tiddle-purple transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-tiddle-gray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tiddle. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-tiddle-gray hover:text-tiddle-purple text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-tiddle-gray hover:text-tiddle-purple text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-tiddle-gray hover:text-tiddle-purple text-sm transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
