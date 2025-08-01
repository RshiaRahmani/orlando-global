'use client';
import Image from 'next/image';
import Masonry from '@/components/masonry';
import GoogleMap from '@/components/google-map';
import ScrollReveal from '@/components/scroll-reveal';
import ScrollImage from '@/components/scroll-image';
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
      image: '/assets/gallery/starlux/2.jpg',
      imageHint: 'luxury cinema seats'
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10 text-primary" />,
      title: t.restaurant.title,
      description: t.restaurant.description,
      image: '/assets/gallery/starlux/41.jpg',
      imageHint: 'fine dining restaurant'
    },
    {
      icon: <Martini className="w-10 h-10 text-primary" />,
      title: t.lasVegasBar.title,
      description: t.lasVegasBar.description,
      image: '/assets/gallery/starlux/23.jpg',
      imageHint: 'stylish cocktail bar'
    },
    {
      icon: <ToyBrick className="w-10 h-10 text-primary" />,
      title: t.kidsRoom.title,
      description: t.kidsRoom.description,
      image: '/assets/gallery/starlux/11.jpg',
      imageHint: 'kids indoor playground'
    },
    {
      icon: <Orbit className="w-10 h-10 text-primary" />,
      title: t.vrArena.title,
      description: t.vrArena.description,
      image: '/assets/gallery/starlux/7.jpg',
      imageHint: 'person wearing vr headset'
    },
  ];

  const galleryImages = [
    { id: '1', img: '/assets/gallery/starlux/1.jpg', height: 400, url: '#' },
    { id: '2', img: '/assets/gallery/starlux/2.jpg', height: 500, url: '#' },
    { id: '3', img: '/assets/gallery/starlux/3.jpg', height: 400, url: '#' },
    { id: '4', img: '/assets/gallery/starlux/4.jpg', height: 450, url: '#' },
    { id: '5', img: '/assets/gallery/starlux/5.jpg', height: 550, url: '#' },
    { id: '6', img: '/assets/gallery/starlux/6.jpg', height: 400, url: '#' },
    { id: '7', img: '/assets/gallery/starlux/7.jpg', height: 650, url: '#' },
    { id: '8', img: '/assets/gallery/starlux/8.jpg', height: 480, url: '#' },
    { id: '9', img: '/assets/gallery/starlux/9.jpg', height: 500, url: '#' },
    { id: '10', img: '/assets/gallery/starlux/10.jpg', height: 600, url: '#' },
    { id: '11', img: '/assets/gallery/starlux/11.jpg', height: 550, url: '#' },
    { id: '12', img: '/assets/gallery/starlux/12.jpg', height: 500, url: '#' },
    { id: '13', img: '/assets/gallery/starlux/13.jpg', height: 400, url: '#' },
    { id: '14', img: '/assets/gallery/starlux/14.jpg', height: 450, url: '#' },
    { id: '15', img: '/assets/gallery/starlux/15.jpg', height: 550, url: '#' },
    { id: '16', img: '/assets/gallery/starlux/16.jpg', height: 500, url: '#' },
    { id: '17', img: '/assets/gallery/starlux/17.jpg', height: 600, url: '#' },
    { id: '18', img: '/assets/gallery/starlux/18.jpg', height: 550, url: '#' },
    { id: '19', img: '/assets/gallery/starlux/19.jpg', height: 500, url: '#' },
    { id: '20', img: '/assets/gallery/starlux/20.jpg', height: 600, url: '#' },
    { id: '21', img: '/assets/gallery/starlux/21.jpg', height: 550, url: '#' },
    { id: '22', img: '/assets/gallery/starlux/22.jpg', height: 500, url: '#' },
    { id: '23', img: '/assets/gallery/starlux/23.jpg', height: 600, url: '#' },
    { id: '24', img: '/assets/gallery/starlux/24.jpg', height: 550, url: '#' },
    { id: '25', img: '/assets/gallery/starlux/25.jpg', height: 500, url: '#' },
    { id: '26', img: '/assets/gallery/starlux/26.jpg', height: 600, url: '#' },
    { id: '29', img: '/assets/gallery/starlux/29.jpg', height: 450, url: '#' },
    { id: '31', img: '/assets/gallery/starlux/31.jpg', height: 500, url: '#' },
    { id: '32', img: '/assets/gallery/starlux/32.jpg', height: 550, url: '#' },
    { id: '33', img: '/assets/gallery/starlux/33.jpg', height: 480, url: '#' },
    { id: '34', img: '/assets/gallery/starlux/34.jpg', height: 550, url: '#' },
    { id: '35', img: '/assets/gallery/starlux/35.jpg', height: 600, url: '#' },
    { id: '36', img: '/assets/gallery/starlux/36.jpg', height: 500, url: '#' },
    { id: '37', img: '/assets/gallery/starlux/37.jpg', height: 450, url: '#' },
    { id: '38', img: '/assets/gallery/starlux/38.jpg', height: 600, url: '#' },
    { id: '39', img: '/assets/gallery/starlux/39.jpg', height: 550, url: '#' },
    { id: '40', img: '/assets/gallery/starlux/40.jpg', height: 500, url: '#' },
    { id: '41', img: '/assets/gallery/starlux/41.jpg', height: 650, url: '#' },
    { id: '42', img: '/assets/gallery/starlux/42.jpg', height: 550, url: '#' },
    { id: '43', img: '/assets/gallery/starlux/43.jpg', height: 500, url: '#' },
    { id: '44', img: '/assets/gallery/starlux/44.jpg', height: 600, url: '#' },
    { id: '45', img: '/assets/gallery/starlux/45.jpg', height: 450, url: '#' },
    { id: '46', img: '/assets/gallery/starlux/46.jpg', height: 550, url: '#' },
    { id: '47', img: '/assets/gallery/starlux/47.jpg', height: 500, url: '#' },
    { id: '48', img: '/assets/gallery/starlux/48.jpg', height: 600, url: '#' },
    { id: '49', img: '/assets/gallery/starlux/49.jpg', height: 550, url: '#' }
  ];

  // Shuffle the gallery images for random display order
  const shuffledGalleryImages = [...galleryImages].sort(() => Math.random() - 0.5);

  return (
    <div className="space-y-16">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/gallery/starlux/1.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-black/50 hero-overlay" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6 flex justify-center">
            <img 
              src="/assets/gallery/starlux/logo.png" 
              alt="CyberX Gaming Logo" 
              className="h-36 w-auto md:h-36 lg:h-36 object-contain drop-shadow-2xl transition-all duration-300 ease-in-out "
            />
          </div>
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
                <div className={`${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                    <ScrollImage 
                      src={section.image} 
                      alt={section.title} 
                      width={400} 
                      height={300} 
                      data-ai-hint={section.imageHint}
                      className="w-full h-full"
                    />
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
                location={t.location.address}
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
