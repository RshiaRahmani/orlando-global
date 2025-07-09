'use client';
import ContactForm from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useApp } from '@/hooks/use-app';
import { translations } from '@/lib/translations';
import { Building2, Coffee, Gamepad2, MapPin } from 'lucide-react';

export default function ContactPage() {
  const { language } = useApp();
  const t = translations[language].contact;

  const locations = [
      { name: t.info.starlux, icon: <Building2 className="w-6 h-6 text-primary" /> },
      { name: t.info.shopAndCoffee, icon: <Coffee className="w-6 h-6 text-primary" /> },
      { name: t.info.cyberX, icon: <Gamepad2 className="w-6 h-6 text-primary" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">{t.title}</h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
            <Card className="p-8 rounded-xl shadow-lg">
                <ContactForm />
            </Card>
        </div>
        <div className="md:col-span-2">
            <Card className="p-8 rounded-xl shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-primary" />
                        {t.info.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {locations.map((loc, index) => (
                            <li key={index} className="flex items-center gap-4">
                                {loc.icon}
                                <span className="text-muted-foreground">{loc.name}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
