
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Updated slideImages array with your new images
const slideImages = [
  "/lovable-uploads/458422e2-5e4d-4d15-a8ae-8b750d7f6e30.png",
  "/lovable-uploads/b828db6b-2c51-48bd-b5f9-6a70fad35cd1.png",
  "/lovable-uploads/beea9f3b-5121-4d1b-8501-fafde6f2e025.png",
  "/lovable-uploads/a0becbb8-ba80-4bff-a517-d7189e3b83dc.png",
  "/lovable-uploads/c0e9f30a-f8d6-45e8-ac05-901c200bade7.png"
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
            {/* Carousel without navigation arrows */}
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {slideImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <AspectRatio ratio={4/3} className="bg-muted">
                      <img 
                        src={image} 
                        alt={`Social media influencer slide ${index + 1}`} 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Simple dots navigation */}
            <div className="flex justify-center space-x-2 mt-4">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentSlide === index ? "bg-tiddle-purple" : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
