'use client';
import ImageGallery from '@/components/image-gallery';
import { useApp } from '@/hooks/use-app';
import { translations } from '@/lib/translations';
import { CheckCircle } from 'lucide-react';

export default function CyberXGamingPage() {
  const { language } = useApp();
  const t = translations[language].branches.cyberX;

  const galleryImages = [
    { src: 'https://placehold.co/600x400.png', alt: 'Gaming Setup', hint: 'rgb gaming pc' },
    { src: 'https://placehold.co/600x400.png', alt: 'Team playing', hint: 'esports team playing' },
    { src: 'https://placehold.co/600x400.png', alt: 'Tournament Event', hint: 'gaming tournament crowd' },
    { src: 'https://placehold.co/600x400.png', alt: 'Lounge Area', hint: 'gaming lounge' },
    { src: 'https://placehold.co/600x400.png', alt: 'Close-up on Keyboard', hint: 'mechanical keyboard rgb' },
    { src: 'https://placehold.co/600x400.png', alt: 'CyberX Logo', hint: 'gaming logo neon' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">{t.title}</h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">{t.description}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
           <img src="https://placehold.co/600x500.png" alt="Gaming Club Interior" className="w-full h-full object-cover" data-ai-hint="gaming computers neon" />
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 font-headline">{t.galleryTitle}</h2>
        <ImageGallery images={galleryImages} />
      </div>
    </div>
  );
}
