'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Building2 } from 'lucide-react';

import { useApp } from '@/hooks/use-app';
import { translations } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LanguageSwitcher from '@/components/language-switcher';
import ThemeToggle from '@/components/theme-toggle';

export default function Header() {
  const { language } = useApp();
  const t = translations[language];
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/starlux-mall', label: t.nav.starlux },
    { href: '/shop-and-coffee', label: t.nav.shopAndCoffee },
    { href: '/cyberx-gaming', label: t.nav.cyberX },
    { href: '/contact', label: t.nav.contact },
  ];

  const NavLinkItems = ({ className }: { className?: string }) => (
    <>
      {navLinks.map((link) => (
        <Button key={link.href} asChild variant="ghost" className={cn(className)}>
          <Link
            href={link.href}
            className={cn(
              'transition-colors hover:text-primary',
              pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
            )}
          >
            {link.label}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Orlando Global</span>
        </Link>
        <div className="hidden md:flex flex-grow items-center space-x-2">
          <NavLinkItems />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  <NavLinkItems className="w-full justify-start" />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
