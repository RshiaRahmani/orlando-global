'use client';
import Image from 'next/image';
import ImageGallery from '@/components/image-gallery';
import { useApp } from '@/hooks/use-app';
import { translations } from '@/lib/translations';
import { Clapperboard, UtensilsCrossed, Martini, ToyBrick, Orbit } from 'lucide-react';

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
    { src: 'https://placehold.co/600x400.png', alt: 'Cinema Hall', hint: 'luxury cinema seats' },
    { src: 'https://placehold.co/600x400.png', alt: 'Las Vegas Bar', hint: 'neon bar sign' },
    { src: 'https://placehold.co/600x400.png', alt: 'Restaurant Dining Area', hint: 'fine dining table' },
    { src: 'https://placehold.co/600x400.png', alt: 'Kids Room', hint: 'indoor playground' },
    { src: 'https://placehold.co/600x400.png', alt: 'VR Arena Setup', hint: 'vr headset person' },
    { src: 'https://placehold.co/600x400.png', alt: 'Mall Exterior', hint: 'modern shopping mall' },
  ];

  return (
    <div className="space-y-16 py-16">
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">{t.title}</h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">{t.description}</p>
      </section>

      {sections.map((section, index) => (
        <section key={index} className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`rounded-xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                    <Image src={section.image} alt={section.title} width={600} height={500} data-ai-hint={section.imageHint} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        {section.icon}
                        <h2 className="text-3xl font-bold font-headline">{section.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">{section.description}</p>
                </div>
            </div>
        </section>
      ))}
      
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-headline">{t.galleryTitle}</h2>
        <ImageGallery images={galleryImages} />
      </section>
    </div>
  );
}
