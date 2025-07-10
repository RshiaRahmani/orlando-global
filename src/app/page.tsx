"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useApp } from "@/hooks/use-app";
import { translations } from "@/lib/translations";
import { ArrowRight, Building2, Coffee, Gamepad2 } from "lucide-react";
import SmoothScrollHero from "@/components/smooth-scroll-hero";

export default function Home() {
  const { language } = useApp();
  const t = translations[language];

  const branches = [
    {
      name: t.branches.starlux.title,
      description: t.branches.starlux.description,
      href: "/starlux-mall",
      icon: <Building2 className="w-8 h-8 text-primary" />,
      image: "https://placehold.co/600x400.png",
      imageHint: "modern mall interior",
    },
    {
      name: t.branches.shopAndCoffee.title,
      description: t.branches.shopAndCoffee.description,
      href: "/shop-and-coffee",
      icon: <Coffee className="w-8 h-8 text-primary" />,
      image: "https://placehold.co/600x400.png",
      imageHint: "cozy coffee shop",
    },
    {
      name: t.branches.cyberX.title,
      description: t.branches.cyberX.description,
      href: "/cyberx-gaming",
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      image: "/assets/gallery/cyberx/image.png",
      imageHint: "gaming computers neon",
    },
  ];

  const galleryImages = [
    {
      src: "https://placehold.co/600x400.png",
      alt: "Starlux Mall",
      hint: "cinema movie theater",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Las Vegas Bar",
      hint: "cocktail bar",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Orlando Coffee",
      hint: "latte art",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "CyberX Gaming",
      hint: "esports competition",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "Kids Room",
      hint: "children playground",
    },
    {
      src: "https://placehold.co/600x400.png",
      alt: "VR Arena",
      hint: "virtual reality",
    },
  ];

  return (
    <>
      <SmoothScrollHero />
      <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-headline animate-fade-in">
          {t.homepage.hero.title}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground animate-fade-in animation-delay-300">
          {t.homepage.hero.subtitle}
        </p>
        <div className="mt-8 animate-fade-in animation-delay-600">
          <Button asChild size="lg">
            <Link href="/contact">{t.homepage.hero.cta}</Link>
          </Button>
        </div>
      </section>

      {/* Branches Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
          {t.homepage.branches.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <Card
              key={branch.name}
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-0 rounded-xl"
            >
              <CardHeader className="p-0">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={branch.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {branch.icon}
                  <CardTitle className="text-2xl font-headline">
                    {branch.name}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground mb-6 h-24">
                  {branch.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={branch.href}>
                    {t.homepage.branches.learnMore}{" "}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
            {t.homepage.mission.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            {t.homepage.mission.text}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
          {t.homepage.gallery.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                data-ai-hint={img.hint}
                className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
