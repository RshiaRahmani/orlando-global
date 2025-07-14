'use client';
import { useEffect, useRef, useMemo, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

// Simple global GSAP loader
const loadGSAP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Check if already loaded
    if ((window as any).gsap && (window as any).ScrollTrigger) {
      return resolve(true);
    }

    // Load GSAP
    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    
    gsapScript.onload = () => {
      // Load ScrollTrigger
      const stScript = document.createElement('script');
      stScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      
      stScript.onload = () => {
        if ((window as any).gsap && (window as any).ScrollTrigger) {
          (window as any).gsap.registerPlugin((window as any).ScrollTrigger);
          resolve(true);
        } else {
          resolve(false);
        }
      };
      
      stScript.onerror = () => resolve(false);
      document.head.appendChild(stScript);
    };
    
    gsapScript.onerror = () => resolve(false);
    document.head.appendChild(gsapScript);
  });
};

// Helper function to get appropriate text styles based on element type
const getTextStyles = (element: string) => {
  const baseStyles = "leading-[1.5] font-semibold";
  
  switch (element) {
    case 'h1':
      return `text-[clamp(2.5rem,6vw,4rem)] ${baseStyles}`;
    case 'h2':
      return `text-[clamp(2rem,5vw,3.5rem)] ${baseStyles}`;
    case 'h3':
      return `text-[clamp(1.8rem,4vw,3rem)] ${baseStyles}`;
    case 'h4':
      return `text-[clamp(1.5rem,3.5vw,2.5rem)] ${baseStyles}`;
    case 'h5':
      return `text-[clamp(1.3rem,3vw,2rem)] ${baseStyles}`;
    case 'h6':
      return `text-[clamp(1.1rem,2.5vw,1.5rem)] ${baseStyles}`;
    case 'p':
      return `text-[clamp(1rem,2vw,1.2rem)] leading-[1.6] font-normal`;
    default:
      return `text-[clamp(1.6rem,4vw,3rem)] ${baseStyles}`;
  }
};

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.3,
  baseRotation = 1,
  blurStrength = 2,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  element = "h2"
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={`word-${index}`}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const initAnimations = async () => {
      try {
        // Clean up previous animations
        if (cleanupRef.current) {
          cleanupRef.current();
          cleanupRef.current = null;
        }

        const loaded = await loadGSAP();
        if (!loaded) {
          console.warn('Failed to load GSAP');
          return;
        }

        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        const el = containerRef.current;

        if (!el || !gsap || !ScrollTrigger) return;

        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const wordElements = el.querySelectorAll('.word');
          if (wordElements.length === 0) return;

          // Set initial states
          gsap.set(el, { 
            rotation: baseRotation,
            transformOrigin: 'left center'
          });

          gsap.set(wordElements, { 
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)'
          });

          // Create animations
          const rotationTween = gsap.to(el, {
            rotation: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom-=100px',
              end: 'top center',
              scrub: 1
            }
          });

          const wordTween = gsap.to(wordElements, {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom-=50px',
              end: 'top center-=50px',
              scrub: 1
            }
          });

          // Store cleanup function
          cleanupRef.current = () => {
            if (rotationTween.scrollTrigger) rotationTween.scrollTrigger.kill();
            if (wordTween.scrollTrigger) wordTween.scrollTrigger.kill();
            rotationTween.kill();
            wordTween.kill();
          };

        }, 100);

      } catch (error) {
        console.error('ScrollReveal error:', error);
      }
    };

    initAnimations();

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [children, baseOpacity, baseRotation, blurStrength, enableBlur]);

  // Render the appropriate element
  const renderElement = () => {
    const textStyles = getTextStyles(element);
    const className = `my-5 ${containerClassName}`;
    const textContent = (
      <span className={`${textStyles} ${textClassName}`}>
        {splitText}
      </span>
    );

    switch (element) {
      case 'h1':
        return <h1 ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>{textContent}</h1>;
      case 'h2':
        return <h2 ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>{textContent}</h2>;
      case 'h3':
        return <h3 ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>{textContent}</h3>;
      case 'h4':
        return <h4 ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>{textContent}</h4>;
      case 'h5':
        return <h5 ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>{textContent}</h5>;
      case 'h6':
        return <h6 ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>{textContent}</h6>;
      case 'p':
        return <p ref={containerRef as React.RefObject<HTMLParagraphElement>} className={className}>{textContent}</p>;
      default:
        return <h2 ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>{textContent}</h2>;
    }
  };

  return renderElement();
};

export default ScrollReveal;
