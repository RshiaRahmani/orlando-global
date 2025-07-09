'use client';
import Image from 'next/image';
import ImageGallery from '@/components/image-gallery';
import { useApp } from '@/hooks/use-app';
import { translations } from '@/lib/translations';
import { CheckCircle, CalendarDays } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ShopAndCoffeePage() {
  const { language } = useApp();
  const t = translations[language].branches.shopAndCoffee;

  const galleryImages = [
    { src: 'https://placehold.co/600x400.png', alt: 'Coffee Pouring', hint: 'barista pouring coffee' },
    { src: 'https://placehold.co/600x400.png', alt: 'Fresh Pastries', hint: 'croissants display' },
    { src: 'https://placehold.co/600x400.png', alt: 'Lifestyle Products', hint: 'boutique store shelf' },
    { src: 'https://placehold.co/600x400.png', alt: 'Cozy Seating Area', hint: 'cafe interior design' },
    { src: 'https://placehold.co/600x400.png', alt: 'Storefront', hint: 'coffee shop exterior' },
    { src: 'https://placehold.co/600x400.png', alt: 'Latte Art', hint: 'coffee cup art' },
  ];

  return (
    <div className="space-y-16 py-16">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">{t.title}</h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">{t.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">What We Offer</h2>
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
                        <CardTitle className="text-3xl font-headline flex items-center gap-3">
                            <CalendarDays className="w-8 h-8 text-primary" />
                            {t.events.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <p className="text-muted-foreground text-lg">{t.events.description}</p>
                    </CardContent>
                </div>
              </div>
            </Card>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-headline">{t.galleryTitle}</h2>
        <ImageGallery images={galleryImages} />
      </section>
    </div>
  );
}
