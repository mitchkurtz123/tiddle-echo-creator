
import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";

const brands = [
  { name: "Instagram", logo: "/placeholder.svg" },
  { name: "TikTok™", logo: "/placeholder.svg" },
  { name: "YouTube", logo: "/placeholder.svg" },
  { name: "TwitterX", logo: "/placeholder.svg" },
  { name: "Meta", logo: "/placeholder.svg" },
  { name: "Snapchat", logo: "/placeholder.svg" },
  { name: "LinkedIn", logo: "/placeholder.svg" },
  { name: "Pinterest", logo: "/placeholder.svg" }
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
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 flex flex-col items-center transition-transform duration-500">
              <div className="h-10 w-10 mb-3 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-8 w-8 object-contain" 
                />
              </div>
              <div className="font-medium text-xl text-gray-600">{brand.name}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ClientLogos;
