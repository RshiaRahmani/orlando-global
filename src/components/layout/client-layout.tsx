'use client';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/layout/loading-screen';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ThemeTransition from '@/components/theme-transition';
import { useApp } from '@/hooks/use-app';
import { cn } from '@/lib/utils';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { language, theme } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={isLoading} />
      <ThemeTransition />
      <div
        className={cn(
          "min-h-screen flex flex-col bg-background transition-colors duration-500",
          isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'
        )}
      >
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
