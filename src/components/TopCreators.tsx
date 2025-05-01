import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from "@/components/ui/card";

type Creator = {
  name: string;
  username: string;
  image: string;
};

const creators: Creator[] = [
  {
    name: "Gianna Joyce",
    username: "@Giannamjoyce",
    image: "/lovable-uploads/4e16a1ad-2f86-48c8-9234-cf3d9a7e1270.png",
  },
  {
    name: "Saby Hesri",
    username: "@Sabyhesri",
    image: "/lovable-uploads/4e16a1ad-2f86-48c8-9234-cf3d9a7e1270.png",
  },
  {
    name: "Sophie Hesri",
    username: "@Sophiehesri",
    image: "/lovable-uploads/4e16a1ad-2f86-48c8-9234-cf3d9a7e1270.png",
  },
  {
    name: "Samara Ispink",
    username: "@Samaraispinkk",
    image: "/lovable-uploads/4e16a1ad-2f86-48c8-9234-cf3d9a7e1270.png",
  },
  {
    name: "Agga Yucita",
    username: "@Aggayucita",
    image: "/lovable-uploads/4e16a1ad-2f86-48c8-9234-cf3d9a7e1270.png",
  },
  {
    name: "Avani Reyes",
    username: "@Avanireyes",
    image: "/lovable-uploads/4e16a1ad-2f86-48c8-9234-cf3d9a7e1270.png",
  },
];

const TopCreators: React.FC = () => {
  return (
    <div className="py-16 pb-36 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-tiddle-purple mb-12">
          Our Top <span className="text-tiddle-purple">Creators</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {creators.map((creator, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl border-4 border-white mb-3 shadow-md bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="absolute inset-x-0 top-0 h-full rounded-3xl bg-gradient-to-br from-pink-200 to-blue-100 opacity-30"></div>
                <img 
                  src={creator.image} 
                  alt={creator.name}
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
              <a 
                href={`https://instagram.com/${creator.username.substring(1)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tiddle-purple font-medium text-center hover:underline font-sans"
              >
                {creator.username}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
