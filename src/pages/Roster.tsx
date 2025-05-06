import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Creator = {
  name: string;
  username: string;
  bio: string;
  imageUrl: string;
  tiktok: string;
};

const creators: Creator[] = [
  {
    name: "GlowHouse",
    username: "@Realglowhouse",
    bio: "GlowHouse is a collective of 15 influencers creating a positive space for young women, with their content averaging millions of views.",
    imageUrl: "/lovable-uploads/4cfb4b63-f92a-45dc-8796-844f0d631af8.png",
    tiktok: "Realglowhouse",
  },
  {
    name: "Gianna",
    username: "@Giannamjoyce",
    bio: "Gianna has over 13 million followers and is best known for her engaging POV videos, beauty and lifestyle content, and as an owner of The Glow House.",
    imageUrl: "/lovable-uploads/0faf56e6-6f94-4689-ba48-66db55572150.png",
    tiktok: "Giannamjoyce",
  },
  {
    name: "preslee",
    username: "@iampresleefaith",
    bio: "Preslee is a Texas girl known for her lip syncs, relatable content, and unapologetically being herself, earning love from fans across platforms.",
    imageUrl: "/lovable-uploads/14f2705c-f83d-4854-8e1b-c88c92765ac3.png",
    tiktok: "iampresleefaith",
  },
  {
    name: "Samara Ispink",
    username: "@Samaraispinkk",
    bio: "Samara is a self-proclaimed ‘pink diva mermaid queen,’ known for her infectious energy, bold vibes, and signature look featuring iconic hair rollers.",
    imageUrl: "/lovable-uploads/d26f0d18-6176-46d8-a4f4-969d49f523e3.png",
    tiktok: "Samaraispinkk",
  },
  {
    name: "paul",
    username: "@paultooreall",
    bio: "Paul is a lifestyle and skit creator known for his relatable content and comedic videos.",
    imageUrl: "/lovable-uploads/c4835c77-bd82-4bee-af86-e8a12a7b89a7.png",
    tiktok: "paultooreall",
  },
  {
    name: "Cesar",
    username: "@notces4r",
    bio: "Cesar is best known for his viral lip syncs, with every video pulling huge numbers. He’s consistently booking for music promos, fashion campaigns, and modeling work.",
    imageUrl: "/lovable-uploads/ce65a52b-8418-49ca-a5d8-068d28ebbf7b.png",
    tiktok: "notces4r",
  },
  {
    name: "Zuza",
    username: "@zuzas.healing0",
    bio: "Zuza is known for her get ready with me videos, telling her story, and spreading positivity to her audience.",
    imageUrl: "/lovable-uploads/162011a2-666a-4973-936a-87045a9222b3.png",
    tiktok: "zuzas.healing0",
  },
  {
    name: "Sophie",
    username: "@sophiehesri",
    bio: "Sophie is known as a trendsetter and creates makeup, lip sync, and fashion content on Instagram and Tiktok.",
    imageUrl: "/lovable-uploads/09b6b448-d66a-4f2e-b1c4-9ea6b47c8b1b.png",
    tiktok: "sophiehesri",
  },
  {
    name: "neeveaha",
    username: "@neevaeha",
    bio: "Nevaeha is a well-known GRWM, Beauty, and Fashion creator, sharing her life and school experiences with her highly engaged, audience!",
    imageUrl: "/lovable-uploads/56f7b558-ef0b-435e-91fc-f7a5bd506655.png",
    tiktok: "neevaeha",
  },
  {
    name: "ayiah",
    username: "@ayiahsoufi_",
    bio: "Ayiah is a beauty, lifestyle, and makeup creator - plus a singer, dancer, actor, and model.",
    imageUrl: "/lovable-uploads/4c286d5d-cc5f-45ea-8df3-ad710f25d301.png",
    tiktok: "ayiahsoufi_",
  },
  {
    name: "mysterious",
    username: "@mysterious.girl7708",
    bio: "Julia brings has standout personalities: the awkward, ‘rizz queen’ on @mysterious.girl7708, and a beauty-loving, GRWM creator on @julia.hill1.",
    imageUrl: "/lovable-uploads/b0637d4f-530b-4e49-b718-1f51789cdf3e.png",
    tiktok: "mysterious.girl7708",
  },
  {
    name: "Aggayucita",
    username: "@Aggayucita",
    bio: "Aggayucita is known for authentic GRWM beauty content, connecting with an older audience and partnering primarily with luxury brands.",
    imageUrl: "/lovable-uploads/1d153e94-623d-4d53-8f88-fac36e8b4ac6.png",
    tiktok: "Aggayucita",
  },
];

const Roster: React.FC = () => {
  return (
    <div className="min-h-screen bg-tiddle-background">
      <div className="w-full bg-white shadow-lg my-4 overflow-hidden">
        <Navigation />
        
        <div className="container mx-auto py-12 px-4 md:px-6 max-w-none">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Meet Our <span className="text-tiddle-purple">Creators</span></h1>
            <p className="text-lg text-gray-600">
              We represent a diverse group of talented creators who are making waves in social media. 
              Connect with them for partnerships, promotions, and campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {creators.map((creator, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={creator.imageUrl} 
                    alt={creator.username}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-tiddle-purple mb-3">{creator.username}</h3>
                  <p className="text-gray-600 mb-4">{creator.bio}</p>
                  <div className="flex items-center space-x-4">
                    <a 
                      href={`https://tiktok.com/@${creator.tiktok}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-tiddle-purple"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="mr-1">
                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                      </svg>
                      <span className="text-sm">TikTok</span>
                    </a>
                    <a 
                      href={`/contact?creator=${creator.username}`}
                      className="flex items-center text-gray-600 hover:text-tiddle-purple"
                    >
                      <Mail className="h-5 w-5 mr-1" />
                      <span className="text-sm">Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Looking to collaborate with our creators?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We connect brands with the perfect influencers to tell their story. 
              Our team handles everything from creator selection to campaign execution.
            </p>
            <Button 
              className="bg-tiddle-purple hover:bg-tiddle-purple/90 text-white px-8 py-2.5 rounded-full text-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Start a Campaign
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Roster;
