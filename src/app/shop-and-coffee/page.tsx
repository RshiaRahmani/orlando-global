'use client';
import Image from 'next/image';
import Masonry from '@/components/masonry';
import GoogleMap from '@/components/google-map';
import ScrollReveal from '@/components/scroll-reveal';
import { useApp } from '@/hooks/use-app';
import { translations } from '@/lib/translations';
import { Coffee, ShoppingBag, Utensils, Wifi, MapPin, Clock, Phone, CheckCircle, CalendarDays } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ShopAndCoffeePage() {
  const { language } = useApp();
  const t = translations[language].branches.shopAndCoffee;

  const galleryImages = [
    { 
      id: '1', 
      img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=500&fit=crop', 
      height: 500, 
      url: '#' 
    },
    { 
      id: '2', 
      img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop', 
      height: 400, 
      url: '#' 
    },
    { 
      id: '3', 
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop', 
      height: 600, 
      url: '#' 
    },
    { 
      id: '4', 
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=450&fit=crop', 
      height: 450, 
      url: '#' 
    },
    { 
      id: '5', 
      img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=550&fit=crop', 
      height: 550, 
      url: '#' 
    },
    { 
      id: '6', 
      img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop', 
      height: 400, 
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
            backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080&fit=crop')`
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
            baseOpacity={0.1}
            baseRotation={1}
            enableBlur={true}
            blurStrength={2}
          >
            {t.description}
          </ScrollReveal>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image src="https://placehold.co/600x500.png" alt="Cozy Cafe" width={600} height={500} className="w-full h-full object-cover" data-ai-hint="cozy coffee shop" />
          </div>
        </div>
      </section>
      
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
            <Card className="overflow-hidden shadow-lg border-0 rounded-xl">
              <div className="grid md:grid-cols-5 items-center">
                <div className="md:col-span-2">
                   <Image src="https://placehold.co/600x500.png" alt="Community Event" width={600} height={500} className="w-full h-full object-cover" data-ai-hint="live music coffee shop" />
                </div>
                <div className="md:col-span-3 p-8 md:p-12">
                    <CardHeader className="p-0 mb-4">
                        <ScrollReveal 
                          element="h3" 
                          containerClassName="my-0"
                          textClassName="text-3xl font-headline flex items-center gap-3"
                          baseOpacity={0.2}
                          baseRotation={1}
                          enableBlur={true}
                          blurStrength={1.5}
                        >
                          <CalendarDays className="w-8 h-8 text-primary" />
                          {t.events.title}
                        </ScrollReveal>
                    </CardHeader>
                    <CardContent className="p-0">
                        <p className="text-muted-foreground text-lg">{t.events.description}</p>
                    </CardContent>
                </div>
              </div>
            </Card>
        </div>
      </section>

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
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-muted-foreground">{t.location.address}</p>
                    <p className="text-sm text-muted-foreground mt-2">{t.location.details}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <p className="text-muted-foreground">{t.location.hours}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contact</h3>
                    <p className="text-muted-foreground">{t.location.contact}</p>
                  </div>
                </div>
              </div>
              
              <GoogleMap 
                location="Orlando Shop & Coffee, Famagusta, Cyprus"
                title="Orlando Shop & Coffee Location"
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
