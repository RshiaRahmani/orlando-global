'use client';
import { useEffect } from 'react';
import Logo from '@/components/logo';

export default function SmoothScrollHero() {
  useEffect(() => {
    // Load GSAP scripts one by one
    const loadGSAP = async () => {
      try {
        // Load GSAP core first
        const gsapScript = document.createElement('script');
        gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        document.head.appendChild(gsapScript);
        
        await new Promise((resolve) => {
          gsapScript.onload = resolve;
        });

        // Load ScrollTrigger
        const scrollTriggerScript = document.createElement('script');
        scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
        document.head.appendChild(scrollTriggerScript);
        
        await new Promise((resolve) => {
          scrollTriggerScript.onload = resolve;
        });

        // Initialize GSAP effects
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;

        if (gsap && ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);

          // Animate SVG drawing
          gsap.fromTo('.draw-path', 
            {
              strokeDasharray: 1000,
              strokeDashoffset: 1000
            },
            {
              strokeDashoffset: 0,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: '.hero-title',
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1
              }
            }
          );

          // Image parallax effects
          gsap.utils.toArray('.parallax-img').forEach((img: any) => {
            const speed = parseFloat(img.getAttribute('data-speed') || '1');
            
            gsap.to(img, {
              y: () => -100 * speed,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true
              }
            });
          });

          // Refresh ScrollTrigger
          ScrollTrigger.refresh();
        }
      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };

    loadGSAP();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <Logo width={600} height={180} className="hero-logo mb-16" />
          <svg 
            className="title-underline" 
            viewBox="0 0 842.14 500" 
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>
      </div>
      
      <div className="hero-images">
        <img 
          className="parallax-img"
          data-speed="0.5"
          src="/assets/gallery/cyberx/cover.jpg"
          alt="Orlando Global Hub"
        />
        <img 
          className="parallax-img"
          data-speed="1.5"
          src="/assets/gallery/starlux/2.jpg"
          alt="Orlando Global Hub"
        />
        <img 
          className="parallax-img"
          data-speed="1.0"
          src="/assets/gallery/shopandcoffee/1.jpg"
          alt="Orlando Global Hub"
        />
        {/* <img 
          className="parallax-img"
          data-speed="0.8"
          src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
          alt="Orlando Global Hub"
        /> */}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap');
        
        .hero-section {
          min-height: 100vh;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          // background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .hero-content {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }
        
        .hero-title {
          position: relative;
          line-height: 1.1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-logo {
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.7));
          max-width: 90vw;
          height: auto;
        }
        
        .title-underline {
          position: absolute;
          width: 120%;
          height: 100px;
          top: 50%;
          left: -10%;
          transform: translateY(-50%) rotate(2deg);
          z-index: -1;
        }
        
        .hero-subtitle {
          font-family: 'Unbounded', sans-serif;
          font-size: clamp(2rem, 5vw, 5rem);
          font-weight: 400;
          color: #fff;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
          margin: 1rem 0 0 0;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }
        
        .hero-images {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          z-index: 1;
        }
        
        .parallax-img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
          will-change: transform;
          -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
          filter: grayscale(100%);
          
        }
        
        .parallax-img:hover {
          transform: scale(1.0) !important;
        }
        
        @media (max-width: 768px) {
          .hero-images {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .parallax-img {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
