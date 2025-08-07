'use client';

import Link from "next/link";
import { useApp } from "@/hooks/use-app";
import { translations } from "@/lib/translations";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "@/components/logo";

export default function Footer() {
  const { language } = useApp();
  const t = translations[language];

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/starlux-mall', label: t.nav.starlux },
    { href: '/shop-and-coffee', label: t.nav.shopAndCoffee },
    { href: '/cyberx-gaming', label: t.nav.cyberX },
    { href: '/contact', label: t.nav.contact },
  ];
  
  const socialLinks = [
    { href: 'https://www.facebook.com/orlandoshopandcoffee/', icon: <Facebook /> },
    { href: '#', icon: <Twitter /> },
    { href: 'https://www.instagram.com/orlando_shopandcoffee/?hl=en', icon: <Instagram /> },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 pt-8 md:pt-16 pb-6">
        {/* Mobile-first design with better spacing */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-12">
            {/* About - Full width on mobile */}
            <div className="space-y-3 md:col-span-2 lg:col-span-1">
                <div className="flex justify-center md:justify-start mb-4">
                    <Logo width={160} height={48} className="md:w-[200px] md:h-[60px]" />
                </div>
                <p className="text-muted-foreground text-sm md:text-base text-center md:text-left leading-relaxed">
                    {t.footer.about}
                </p>
            </div>

            {/* Quick Links - Compact on mobile */}
            <div className="space-y-3">
                <h3 className="font-bold text-base md:text-lg font-headline text-center md:text-left">
                    {t.footer.quickLinks}
                </h3>
                <nav className="flex flex-wrap justify-center md:justify-start md:flex-col gap-2 md:gap-0 md:space-y-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base px-2 md:px-0 py-1 md:py-0 rounded-md hover:bg-primary/10 md:hover:bg-transparent w-fit"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Contact - Compact layout */}
            <div className="space-y-3">
                <h3 className="font-bold text-base md:text-lg font-headline text-center md:text-left">
                    {t.footer.contactUs}
                </h3>
                <div className="text-muted-foreground space-y-1 text-center md:text-left">
                    <p className="text-sm md:text-base">Kyrenia, North Cyprus</p>
                    <p className="text-sm md:text-base">+90 533 830 5349</p>
                    <p className="text-sm md:text-base">info@orlandoglobal.com</p>
                </div>
                <div className="flex justify-center md:justify-start space-x-1 pt-2">
                    {socialLinks.map((link, i) => (
                        <Button 
                            key={i} 
                            asChild 
                            variant="ghost" 
                            size="icon" 
                            className="text-muted-foreground hover:text-primary hover:bg-primary/10 h-8 w-8 md:h-10 md:w-10"
                        >
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                            </a>
                        </Button>
                    ))}
                </div>
            </div>

            {/* Map - Hidden on mobile, shown on larger screens */}
            <div className="hidden md:block space-y-3">
                <h3 className="font-bold text-lg font-headline">{t.footer.ourLocation}</h3>
                <div className="overflow-hidden rounded-lg shadow-md">
                    <iframe 
                        src={`https://maps.google.com/maps?q=Starlux Cinema,35.3422161,33.2735431&z=17&output=embed&t=q&hl=${language}`}
                        width="100%" 
                        height="200" 
                        style={{border:0}} 
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Starlux Cinema - Orlando Global Location"
                    ></iframe>
                </div>
            </div>
        </div>
        
        {/* Mobile map section - shown only on mobile */}
        <div className="md:hidden mt-6 space-y-3">
            <h3 className="font-bold text-base font-headline text-center">{t.footer.ourLocation}</h3>
            <div className="overflow-hidden rounded-lg shadow-md">
                <iframe 
                    src={`https://maps.google.com/maps?q=Starlux Cinema,35.3422161,33.2735431&z=17&output=embed&t=q&hl=${language}`}
                    width="100%" 
                    height="150" 
                    style={{border:0}} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Starlux Cinema - Orlando Global Location"
                ></iframe>
            </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t pt-4 md:pt-6 mt-6 md:mt-8 text-center text-muted-foreground text-xs md:text-sm">
            <p>
                &copy; {new Date().getFullYear()} Orlando Global. {t.footer.rights} | Design and developed by{' '}
                <a 
                    href="https://t.me/Sachima" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                >
                    Arshia Rahmani
                </a>
            </p>
        </div>
      </div>
    </footer>
  );
}
