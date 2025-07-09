'use client';

import Link from "next/link";
import { useApp } from "@/hooks/use-app";
import { translations } from "@/lib/translations";
import { Building2, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";

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
    { href: '#', icon: <Facebook /> },
    { href: '#', icon: <Twitter /> },
    { href: '#', icon: <Instagram /> },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
            {/* About */}
            <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                    <span className="font-bold text-2xl font-headline">Orlando Global</span>
                </div>
                <p className="text-muted-foreground">{t.footer.about}</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg font-headline">{t.footer.quickLinks}</h3>
                <nav className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors w-fit">
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
                 <h3 className="font-bold text-lg font-headline">{t.footer.contactUs}</h3>
                 <div className="text-muted-foreground space-y-2">
                    <p>Kyrenia, North Cyprus</p>
                    <p>+90 555 123 4567</p>
                    <p>info@orlandoglobal.com</p>
                 </div>
                 <div className="flex space-x-2 pt-2">
                    {socialLinks.map((link, i) => (
                        <Button key={i} asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.icon}</a>
                        </Button>
                    ))}
                 </div>
            </div>

            {/* Map */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg font-headline">{t.footer.ourLocation}</h3>
                <div className="overflow-hidden rounded-lg shadow-md">
                    <iframe 
                        src={`https://maps.google.com/maps?q=35.337,33.319&z=15&output=embed&t=q&hl=${language}`}
                        width="100%" 
                        height="200" 
                        style={{border:0}} 
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Orlando Global Location"
                    ></iframe>
                </div>
            </div>
        </div>
        <div className="border-t pt-8 mt-8 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Orlando Global. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
