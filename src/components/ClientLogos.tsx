
import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

// Brand logos from uploaded images
const brands = [
  { name: "PacSun", logo: "/lovable-uploads/ba9aeb41-7f74-4489-8105-b68d1e38c024.png" },
  { name: "e.l.f.", logo: "/lovable-uploads/e82f7e30-b960-4315-aaf3-cec5643b4d71.png" },
  { name: "White Fox", logo: "/lovable-uploads/ee120379-1b3c-4c66-80bd-085d038d5e2f.png" },
  { name: "Prime", logo: "/lovable-uploads/dcddbc5f-8541-462b-a495-5983a821d955.png" },
  { name: "ZeeCool", logo: "/lovable-uploads/b085c9c4-87e4-4fb2-a9d4-07c6df2c1941.png" },
  { name: "Bloom", logo: "/lovable-uploads/07729c62-ca01-4c0b-bbd0-190078203f08.png" },
  { name: "Shein", logo: "/lovable-uploads/327869d1-f9ca-410b-b947-0855c5fd4d6b.png" },
  { name: "Summer Fridays", logo: "/lovable-uploads/c4b9ff63-61f2-4887-ba7d-323d2f37b75c.png" },
  { name: "EQB", logo: "/lovable-uploads/4f155dc8-7e74-4ee6-b44f-5374a20f618e.png" },
  { name: "Round Lab", logo: "/lovable-uploads/8faf6834-6f28-46a2-9899-aa6468b0a05f.png" },
  { name: "Pumiey", logo: "/lovable-uploads/22664884-db33-4cb6-82cc-1fb37e153017.png" },
  { name: "Sol De Janeiro", logo: "/lovable-uploads/8d5870c4-fa4d-45db-89c1-923e45af3fe2.png" },
  { name: "Brand13", logo: "/lovable-uploads/8079b258-e56d-4428-81e7-332046baf506.png" },
  { name: "GlowMode", logo: "/lovable-uploads/2d9241a9-faf6-48eb-82db-bea57133bfda.png" },
];

// Updated circle colors with blue tones
const circleColors = [
  "border-[#8E9196]", // Neutral Gray
  "border-[#0072ff]", // Primary Blue
  "border-[#4a9eff]", // Light Blue
  "border-[#005bbf]", // Darker Blue
  "border-[#c6e3ff]", // Very Light Blue
  "border-[#F2FCE2]", // Soft Green
  "border-[#FEF7CD]", // Soft Yellow
  "border-[#FEC6A1]", // Soft Orange
  "border-[#E5DEFF]", // Soft Purple
  "border-[#FFDEE2]", // Soft Pink
  "border-[#D3E4FD]", // Soft Blue
  "border-[#0072ff]", // Primary Blue again
  "border-[#0FA0CE]", // Bright Blue
  "border-[#F6F6F7]", // Dark Gray
];

// Split brands into two groups for the two rows
const firstRowBrands = brands.slice(0, Math.ceil(brands.length / 2));
const secondRowBrands = brands.slice(Math.ceil(brands.length / 2));

const ClientLogos: React.FC = () => {
  const [api1, setApi1] = useState<any>(null);
  const [api2, setApi2] = useState<any>(null);
  const isMobile = useIsMobile();

  // Set up auto scrolling for first row (left to right)
  useEffect(() => {
    if (!api1) return;
    
    const interval = setInterval(() => {
      api1.scrollNext({ duration: 1500 });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api1]);

  // Set up auto scrolling for second row (right to left)
  useEffect(() => {
    if (!api2) return;
    
    const interval = setInterval(() => {
      api2.scrollPrev({ duration: 1500 });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api2]);

  // Render a brand logo with appropriate styling
  const renderBrandLogo = (brand: typeof brands[0], index: number) => {
    if (isMobile) {
      // Mobile version without borders
      return (
        <div className="rounded-full h-14 w-14 flex items-center justify-center overflow-hidden bg-white mx-auto">
          <AspectRatio ratio={1/1} className="w-full h-full flex items-center justify-center">
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo`} 
              className="max-h-[70%] max-w-[70%] object-contain" 
            />
          </AspectRatio>
        </div>
      );
    } else {
      // Desktop version with colored borders and perfect circle
      return (
        <div className={`p-0.5 rounded-full ${circleColors[index % circleColors.length]} border-2 flex items-center justify-center bg-white`}>
          <div className="rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center overflow-hidden bg-white">
            <AspectRatio ratio={1/1} className="w-full h-full flex items-center justify-center">
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="max-h-[70%] max-w-[70%] object-contain" 
              />
            </AspectRatio>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-gray-400 font-light text-sm mb-6 text-center">TRUSTED BY BRANDS</div>
      
      {/* First row: scrolling left to right */}
      <div className="mb-4">
        <Carousel 
          setApi={setApi1} 
          className="w-full" 
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            duration: 1500,
          }}
        >
          <CarouselContent className="-ml-2 py-2">
            {firstRowBrands.map((brand, index) => (
              <CarouselItem key={index} className="basis-1/3 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 px-1">
                {renderBrandLogo(brand, index)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Second row: scrolling right to left */}
      <div>
        <Carousel 
          setApi={setApi2} 
          className="w-full" 
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            duration: 1500,
          }}
        >
          <CarouselContent className="-ml-2 py-2">
            {secondRowBrands.map((brand, index) => (
              <CarouselItem key={index + firstRowBrands.length} className="basis-1/3 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 px-1">
                {renderBrandLogo(brand, index + firstRowBrands.length)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ClientLogos;
