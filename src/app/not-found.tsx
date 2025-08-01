'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '@/hooks/use-app';
import { translations } from '@/lib/translations';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  const { language } = useApp();
  const t = translations[language];

  const notFoundText = {
    en: {
      title: '404 - Page Not Found',
      subtitle: 'Oops! The page you\'re looking for doesn\'t exist.',
      description: 'The page you are trying to reach might have been moved, deleted, or you entered the wrong URL.',
      goHome: 'Go Home',
      goBack: 'Go Back',
      searchSite: 'Search Site'
    },
    ru: {
      title: '404 - Страница не найдена',
      subtitle: 'Упс! Страница, которую вы ищете, не существует.',
      description: 'Страница, которую вы пытаетесь открыть, могла быть перемещена, удалена, или вы ввели неправильный URL.',
      goHome: 'На главную',
      goBack: 'Назад',
      searchSite: 'Поиск по сайту'
    },
    tr: {
      title: '404 - Sayfa Bulunamadı',
      subtitle: 'Ops! Aradığınız sayfa mevcut değil.',
      description: 'Ulaşmaya çalıştığınız sayfa taşınmış, silinmiş olabilir veya yanlış URL girmiş olabilirsiniz.',
      goHome: 'Ana Sayfa',
      goBack: 'Geri Dön',
      searchSite: 'Sitede Ara'
    }
  };

  const text = notFoundText[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        {/* Logo */}
        {/* <div className="flex justify-center mb-8">
          <div className="p-4 ">
            <Logo className="h-16 w-auto" />
          </div>
        </div> */}

        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 backdrop-blur-sm border-2 border-primary/20 flex items-center justify-center">
              <Search className="w-8 h-8 md:w-10 md:h-10 text-primary/60" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {text.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {text.subtitle}
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-lg mx-auto">
            {text.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              {text.goHome}
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => router.back()}
            className="w-full sm:w-auto flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {text.goBack}
          </Button>
        </div>

        {/* Quick Links */}
        {/* <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            {t.nav.home} • {t.nav.starlux} • {t.nav.shopAndCoffee} • {t.nav.cyberX}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link 
              href="/starlux-mall" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {t.nav.starlux}
            </Link>
            <Link 
              href="/shop-and-coffee" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {t.nav.shopAndCoffee}
            </Link>
            <Link 
              href="/cyberx-gaming" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {t.nav.cyberX}
            </Link>
            <Link 
              href="/contact" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div> */}
        {/* </div> */}

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
}
