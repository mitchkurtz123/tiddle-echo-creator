
import React, { useEffect, useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel';

const slideImages = [
  "/lovable-uploads/7d9910c6-cd6c-4699-b901-e70693d0c5e7.png",
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
];

const Hero: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Update current slide index when carousel changes
  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      if (currentSlide === slideImages.length - 1) {
        // If we're at the last slide, go back to the first
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, currentSlide]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-1.5 text-sm text-gray-700">
            <span className="bg-tiddle-purple text-white px-2 py-0.5 rounded-full text-xs font-medium mr-2">NEW</span>
            <span>Talent-driven social media success</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Shortcut to <br />
              <span className="text-tiddle-purple">Influence</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-md">
              Strategic talent management built for those who never back down from creating engaging content.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="button-primary">
              Book a consultation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="button-secondary">
              View our talent
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="checkmark h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Cross-platform growth strategies</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="checkmark h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Partnership and sponsorship deals</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="checkmark h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Personal brand development</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-tiddle-purple/20 rounded-full"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-tiddle-purple/10 rounded-full"></div>
          
          <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl animate-fade-in">
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {slideImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                      <img 
                        src={image} 
                        alt={`Social media influencer slide ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
