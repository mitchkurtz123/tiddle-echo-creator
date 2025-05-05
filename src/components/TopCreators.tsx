
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
  tiktok: string;
};

const creators: Creator[] = [
  {
    name: "GlowHouse",
    username: "@Realglowhouse",
    image: "public/lovable-uploads/4cfb4b63-f92a-45dc-8796-844f0d631af8.png",
    tiktok: "Realglowhouse",
  },
  {
    name: "Gianna",
    username: "@Giannamjoyce",
    image: "public/lovable-uploads/0faf56e6-6f94-4689-ba48-66db55572150.png",
    tiktok: "Giannamjoyce",
  },
  {
    name: "preslee",
    username: "@iampresleefaith",
    image: "public/lovable-uploads/14f2705c-f83d-4854-8e1b-c88c92765ac3.png",
    tiktok: "iampresleefaith",
  },
  {
    name: "Samara Ispink",
    username: "@Samaraispinkk",
    image: "public/lovable-uploads/d26f0d18-6176-46d8-a4f4-969d49f523e3.png",
    tiktok: "Samaraispinkk",
  },
  {
    name: "paul",
    username: "@paultooreall",
    image: "public/lovable-uploads/c4835c77-bd82-4bee-af86-e8a12a7b89a7.png",
    tiktok: "paultooreall",
  },
  {
    name: "Cesar",
    username: "@notces4r",
    image: "public/lovable-uploads/ce65a52b-8418-49ca-a5d8-068d28ebbf7b.png",
    tiktok: "notces4r",
  },
  {
    name: "Zuza",
    username: "@zuzas.healing0",
    image: "public/lovable-uploads/162011a2-666a-4973-936a-87045a9222b3.png",
    tiktok: "zuzas.healing0",
  },
  {
    name: "Sophie",
    username: "@sophiehesri",
    image: "public/lovable-uploads/09b6b448-d66a-4f2e-b1c4-9ea6b47c8b1b.png",
    tiktok: "sophiehesri",
  },
  {
    name: "neeveaha",
    username: "@neevaeha",
    image: "public/lovable-uploads/56f7b558-ef0b-435e-91fc-f7a5bd506655.png",
    tiktok: "neevaeha",
  },
  {
    name: "ayiah",
    username: "@ayiahsoufi_",
    image: "public/lovable-uploads/4c286d5d-cc5f-45ea-8df3-ad710f25d301.png",
    tiktok: "ayiahsoufi_",
  },
  {
    name: "mysterious",
    username: "@mysterious.girl7708",
    image: "public/lovable-uploads/b0637d4f-530b-4e49-b718-1f51789cdf3e.png",
    tiktok: "mysterious.girl7708",
  },
  {
    name: "Aggayucita",
    username: "@Aggayucita",
    image: "public/lovable-uploads/1d153e94-623d-4d53-8f88-fac36e8b4ac6.png",
    tiktok: "Aggayucita",
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
                      href={`https://tiktok.com/@${creator.tiktok}`}
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
      
      <style>
        {`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        `}
      </style>
    </div>
  );
};

export default TopCreators;
