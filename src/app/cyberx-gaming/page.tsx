'use client';
import Masonry from '@/components/masonry';
import GoogleMap from '@/components/google-map';
import ScrollReveal from '@/components/scroll-reveal';
import ScrollImage from '@/components/scroll-image';
import { useApp } from '@/hooks/use-app';
import { translations } from '@/lib/translations';
import { CheckCircle, MapPin, Clock, Phone } from 'lucide-react';

export default function CyberXGamingPage() {
  const { language, theme } = useApp();
  const t = translations[language].branches.cyberX;

  const galleryImages = [
    { 
      id: '1', 
      img: '/assets/gallery/cyberx/1.jpg', 
      height: 500, 
      url: '#' 
    },
    { 
      id: '2', 
      img: '/assets/gallery/cyberx/2.jpg', 
      height: 400, 
      url: '#' 
    },
    { 
      id: '3', 
      img: '/assets/gallery/cyberx/3.jpg', 
      height: 600, 
      url: '#' 
    },
    { 
      id: '4', 
      img: '/assets/gallery/cyberx/4.jpg', 
      height: 450, 
      url: '#' 
    },
    { 
      id: '5', 
      img: '/assets/gallery/cyberx/5.jpg', 
      height: 550, 
      url: '#' 
    },
    { 
      id: '6', 
      img: '/assets/gallery/cyberx/6.jpg', 
      height: 400, 
      url: '#' 
    },
    {      id: '7', 
      img: '/assets/gallery/cyberx/7.jpg', 
      height: 500, 
      url: '#' 
    } ,
    { 
      id: '8', 
      img: '/assets/gallery/cyberx/8.jpg', 
      height: 600, 
      url: '#' 
    }
    ,
    {
      id: '9',
      img: '/assets/gallery/cyberx/9.jpg',
      height: 500,
      url: '#'
    }
    ,
    {
      id: '10',
      img: '/assets/gallery/cyberx/10.jpg',
      height: 600,
      url: '#'
    }
    ,
    {
      id: '11',
      img: '/assets/gallery/cyberx/11.jpg',
      height: 550,
      url: '#' 
    }
    ,
    {
      id: '12',
      img: '/assets/gallery/cyberx/12.jpg',
      height: 400,
      url: '#'
    }
    ,
    {
      id: '13',
      img: '/assets/gallery/cyberx/13.jpg', 
      height: 450,
      url: '#'
    }
    ,
    {
      id: '14',
      img: '/assets/gallery/cyberx/14.jpg',
      height: 500,
      url: '#'
    }
    ,
    {
      id: '15',
      img: '/assets/gallery/cyberx/15.jpg',
      height: 600,
      url: '#'
    }
    ,
    {
      id: '16',
      img: '/assets/gallery/cyberx/16.jpg',
      height: 550,
      url: '#'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/gallery/cyberx/image.png')`
          }}
        />
        <div className="absolute inset-0 bg-black/50 hero-overlay" />
        <div className="relative z-10 text-center text-white px-4">
          {/* Branch Logo */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/assets/gallery/cyberx/logo.png" 
              alt="CyberX Gaming Logo" 
              className="h-36 w-auto md:h-36 lg:h-36 object-contain drop-shadow-2xl transition-all duration-300 ease-in-out "
            />
          </div>
          <ScrollReveal 
            element="h1" 
            containerClassName="mb-6"
            textClassName="text-4xl md:text-6xl font-bold font-headline text-white transition-colors duration-300 ease-in-out"
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
            textClassName="text-lg md:text-xl opacity-90 text-white transition-all duration-300 ease-in-out"
            baseOpacity={0.2}
            baseRotation={0.5}
            enableBlur={true}
            blurStrength={1.5}
          >
            {t.description}
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <ScrollReveal 
              element="h2" 
              containerClassName="my-0"
              textClassName="text-3xl font-bold font-headline"
              baseOpacity={0.2}
              baseRotation={1.5}
              enableBlur={true}
              blurStrength={2}
            >
              What We Offer
            </ScrollReveal>
            <ul className="space-y-4">
              {t.features.map((feature, index) => (
                <li key={index} className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>          <ScrollImage 
            src="/assets/gallery/cyberx/8.jpg" 
            alt="Gaming Club Interior" 
            width={480} 
            height={360} 
            data-ai-hint="gaming computers neon"
            className="w-full h-full"
          />
        </div>
        
        {/* Location Section */}
        <div className="mb-16">
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
                  location="CyberX Gaming Club, Kyrenia, Cyprus"
                  title="CyberX Gaming Club Location"
                  className="w-full h-64"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pb-32">
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
        </div>
      </div>
    </div>
  );
}
