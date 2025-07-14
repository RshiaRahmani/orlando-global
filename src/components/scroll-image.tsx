'use client';
import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface ScrollImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  'data-ai-hint'?: string;
}

const ScrollImage = ({ 
  src, 
  alt, 
  width = 480, 
  height = 360, 
  className = "",
  'data-ai-hint': dataAiHint 
}: ScrollImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isAnimatingRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const animateIn = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    
    const container = containerRef.current;
    const image = imageRef.current;
    
    if (!container || !image) return;

    // Use CSS transitions for better performance with slower shadow transition
    container.style.transition = 'box-shadow 0.8s ease-out';
    image.style.transition = 'transform 0.25s ease-out, filter 0.25s ease-out';
    
    container.style.boxShadow = '0 20px 60px rgba(251, 146, 60, 0.4), 0 0 40px rgba(251, 146, 60, 0.3)';
    image.style.transform = 'scale(1.04)';
    image.style.filter = 'brightness(1.08)';
    
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 250);
  }, []);

  const animateOut = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    
    const container = containerRef.current;
    const image = imageRef.current;
    
    if (!container || !image) return;

    container.style.transition = 'box-shadow 0.8s ease-out';
    image.style.transition = 'transform 0.25s ease-out, filter 0.25s ease-out';
    
    container.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    image.style.transform = 'scale(1)';
    image.style.filter = 'brightness(1)';
    
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 250);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    
    if (!container || !image) return;

    // Set initial styles
    container.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    image.style.transform = 'scale(1)';
    image.style.filter = 'brightness(1)';
    image.style.transformOrigin = 'center center';

    // Use Intersection Observer with fewer thresholds for better performance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if element is in the center area of viewport
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;
            const centerThreshold = viewportHeight * 0.25; // 25% from center
            
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = viewportHeight / 2;
            
            if (Math.abs(elementCenter - viewportCenter) < centerThreshold) {
              animateIn();
            } else {
              animateOut();
            }
          } else {
            animateOut();
          }
        });
      },
      {
        threshold: [0.1, 0.5, 0.9], // Reduced thresholds for better performance
        rootMargin: '0px'
      }
    );

    observerRef.current.observe(container);

    // More efficient scroll listener with larger debounce
    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;
    
    const handleScroll = () => {
      if (isScrolling) return;
      
      isScrolling = true;
      clearTimeout(scrollTimeout);
      
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
        const threshold = viewportHeight * 0.2; // 20% threshold
        
        if (rect.top < viewportHeight && rect.bottom > 0) {
          if (distanceFromCenter < threshold) {
            animateIn();
          } else {
            animateOut();
          }
        }
        
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 16); // ~60fps throttle
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [animateIn, animateOut]);

  return (
    <div 
      ref={containerRef}
      className={`rounded-xl overflow-hidden ${className}`}
      style={{
        willChange: 'box-shadow',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)' // Force hardware acceleration
      }}
    >
      <Image 
        ref={imageRef}
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="w-full h-full object-cover" 
        data-ai-hint={dataAiHint}
        style={{
          willChange: 'transform, filter',
          transformOrigin: 'center center',
          backfaceVisibility: 'hidden'
        }}
        quality={75}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ScrollImage;
