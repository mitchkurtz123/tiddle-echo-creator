
import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";

// These will be replaced with your actual logo images once you upload them
const brands = [
  { name: "Instagram", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=100" },
  { name: "TikTok™", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=100" },
  { name: "YouTube", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=100" },
  { name: "TwitterX", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=100" },
  { name: "Meta", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=100" },
  { name: "Snapchat", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=100" },
  { name: "LinkedIn", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=100" },
  { name: "Pinterest", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=100" }
];

const ClientLogos: React.FC = () => {
  const [api, setApi] = useState<any>(null);

  // Set up auto scrolling
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext({ duration: 1500 });
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-gray-400 font-light text-sm mb-6">TRUSTED BY BRANDS</div>
      <Carousel 
        setApi={setApi} 
        className="w-full" 
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          duration: 1500,
        }}
      >
        <CarouselContent className="py-4">
          {brands.map((brand, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 flex justify-center items-center px-4">
              <div className="h-16 flex items-center justify-center">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ClientLogos;
