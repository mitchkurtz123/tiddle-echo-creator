
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

type Creator = {
  name: string;
  username: string;
  image: string;
};

const creators: Creator[] = [
  {
    name: "GlowHouse",
    username: "@Realglowhouse",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Gianna",
    username: "@Giannamjoyce",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
  },
  {
    name: "preslee",
    username: "@iampresleefaith",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Samara Ispink",
    username: "@Samaraispinkk",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "paul",
    username: "@paultooreall",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Cesar",
    username: "@notces4r",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Zuza",
    username: "@zuzas.healing0",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Sophie",
    username: "@sophiehesri",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "neeveaha",
    username: "@neevaeha",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "ayiah",
    username: "@ayiahsoufi_",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "mysterious",
    username: "@mysterious.girl7708",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Aggayucita",
    username: "@Aggayucita",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];

const TopCreators: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const totalCreators = creators.length;
  const duplicatedCreators = [...creators, ...creators]; // Duplicate creators for seamless loop

  useEffect(() => {
    const startMarquee = () => {
      if (carouselRef.current) {
        const scrollAmount = 1; // Controls the speed (pixels per frame)
        let scrollPos = 0;
        const maxScroll = carouselRef.current.scrollWidth / 2;

        const scroll = () => {
          if (carouselRef.current) {
            scrollPos += scrollAmount;
            
            // Reset position when we've scrolled through the first set of items
            if (scrollPos >= maxScroll) {
              scrollPos = 0;
            }
            
            carouselRef.current.scrollLeft = scrollPos;
          }
          requestAnimationFrame(scroll);
        };

        requestAnimationFrame(scroll);
      }
    };

    // Start the marquee animation after a short delay to ensure the DOM is ready
    const timeoutId = setTimeout(startMarquee, 1000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="py-16 pb-36 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-tiddle-purple dark:text-tiddle-purple-light mb-12">
          Our Top <span className="text-tiddle-purple dark:text-tiddle-purple-light">Creators</span>
        </h2>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto no-scrollbar" 
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none' 
            }}
          >
            <div className="flex gap-4 md:gap-6 px-4">
              {duplicatedCreators.map((creator, index) => (
                <div 
                  key={index} 
                  className="flex-none w-36 md:w-48"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl border-4 border-white dark:border-gray-700 mb-3 shadow-md">
                      <img 
                        src={creator.image} 
                        alt={creator.username}
                        className="absolute inset-0 w-full h-full object-cover" 
                      />
                    </div>
                    <a 
                      href={`https://instagram.com/${creator.username.substring(1)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-tiddle-purple dark:text-tiddle-purple-light font-medium text-center hover:underline font-sans truncate w-full"
                    >
                      {creator.username}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlay on the sides for visual fade effect */}
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10"></div>
        </div>
      </div>
      
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TopCreators;
