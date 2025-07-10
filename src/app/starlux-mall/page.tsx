'use client';
import Image from 'next/image';
import Masonry from '@/components/masonry';
import GoogleMap from '@/components/google-map';
import ScrollReveal from '@/components/scroll-reveal';
import { useApp } from '@/hooks/use-app';
import { translations } from '@/lib/translations';
import { Clapperboard, UtensilsCrossed, Martini, ToyBrick, Orbit, MapPin, Clock, Phone } from 'lucide-react';

export default function StarluxMallPage() {
  const { language } = useApp();
  const t = translations[language].branches.starlux;

  const sections = [
    {
      icon: <Clapperboard className="w-10 h-10 text-primary" />,
      title: t.cinema.title,
      description: t.cinema.description,
      image: 'https://placehold.co/600x500.png',
      imageHint: 'luxury cinema seats'
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10 text-primary" />,
      title: t.restaurant.title,
      description: t.restaurant.description,
      image: 'https://placehold.co/600x500.png',
      imageHint: 'fine dining restaurant'
    },
    {
      icon: <Martini className="w-10 h-10 text-primary" />,
      title: t.lasVegasBar.title,
      description: t.lasVegasBar.description,
      image: 'https://placehold.co/600x500.png',
      imageHint: 'stylish cocktail bar'
    },
    {
      icon: <ToyBrick className="w-10 h-10 text-primary" />,
      title: t.kidsRoom.title,
      description: t.kidsRoom.description,
      image: 'https://placehold.co/600x500.png',
      imageHint: 'kids indoor playground'
    },
    {
      icon: <Orbit className="w-10 h-10 text-primary" />,
      title: t.vrArena.title,
      description: t.vrArena.description,
      image: 'https://placehold.co/600x500.png',
      imageHint: 'person wearing vr headset'
    },
  ];

  const galleryImages = [
    { 
      id: '1', 
      img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop', 
      height: 400, 
      url: '#' 
    },
    { 
      id: '2', 
      img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=600&fit=crop', 
      height: 600, 
      url: '#' 
    },
    { 
      id: '3', 
      img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=500&fit=crop', 
      height: 500, 
      url: '#' 
    },
    { 
      id: '4', 
      img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=450&fit=crop', 
      height: 450, 
      url: '#' 
    },
    { 
      id: '5', 
      img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=550&fit=crop', 
      height: 550, 
      url: '#' 
    },
    { 
      id: '6', 
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop', 
      height: 400, 
      url: '#' 
    },
    { 
      id: '7', 
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=650&fit=crop', 
      height: 650, 
      url: '#' 
    },
    { 
      id: '8', 
      img: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600&h=480&fit=crop', 
      height: 480, 
      url: '#' 
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-black/50 hero-overlay" />
        <div className="relative z-10 text-center text-white px-4">
          <ScrollReveal 
            element="h1" 
            containerClassName="mb-6"
            textClassName="text-4xl md:text-6xl font-bold font-headline text-white"
            baseOpacity={0.3}
            baseRotation={1}
            enableBlur={true}
            blurStrength={2}
          >
            {t.title}
          </ScrollReveal>
          <ScrollReveal 
            element="p" 
            containerClassName="max-w-3xl mx-auto"
            textClassName="text-lg md:text-xl opacity-90 text-white"
            baseOpacity={0.2}
            baseRotation={0.5}
            enableBlur={true}
            blurStrength={1.5}
          >
            {t.description}
          </ScrollReveal>
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={index} className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`rounded-xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                    <Image src={section.image} alt={section.title} width={600} height={500} data-ai-hint={section.imageHint} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        {section.icon}
                        <ScrollReveal 
                          element="h2" 
                          containerClassName="my-0"
                          textClassName="text-3xl font-bold font-headline"
                          baseOpacity={0.3}
                          baseRotation={0.8}
                          enableBlur={true}
                          blurStrength={1.5}
                        >
                          {section.title}
                        </ScrollReveal>
                    </div>
                    <ScrollReveal 
                      element="p" 
                      containerClassName="my-0"
                      textClassName="text-lg text-muted-foreground"
                      baseOpacity={0.2}
                      baseRotation={0.3}
                      enableBlur={true}
                      blurStrength={1}
                    >
                      {section.description}
                    </ScrollReveal>
                </div>
            </div>
        </section>
      ))}
      
      {/* Location Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal 
            element="h2" 
            containerClassName="text-center mb-8"
            textClassName="text-3xl font-bold font-headline"
            baseOpacity={0.2}
            baseRotation={1.5}
            enableBlur={true}
            blurStrength={2}
          >
            {t.location.title}
          </ScrollReveal>
          <div className="bg-card rounded-xl shadow-lg p-8 border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.location.labels.address}</h3>
                    <p className="text-muted-foreground">{t.location.address}</p>
                    <p className="text-sm text-muted-foreground mt-2">{t.location.details}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.location.labels.hours}</h3>
                    <p className="text-muted-foreground">{t.location.hours}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.location.labels.contact}</h3>
                    <p className="text-muted-foreground">{t.location.contact}</p>
                  </div>
                </div>
              </div>
              
              <GoogleMap 
                location="Starlux Orlando Mall, Kyrenia, Cyprus"
                title="Starlux Orlando Mall Location"
                className="w-full h-64"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16 pb-32">
        <ScrollReveal 
          element="h2" 
          containerClassName="text-center mb-8"
          textClassName="text-3xl font-bold font-headline"
          baseOpacity={0.2}
          baseRotation={1.5}
          enableBlur={true}
          blurStrength={2}
        >
          {t.galleryTitle}
        </ScrollReveal>
        <Masonry 
          items={galleryImages}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={1.05}
          blurToFocus={true}
          colorShiftOnHover={true}
          stagger={0.1}
          duration={0.8}
        />
      </section>
    </div>
  );
}
