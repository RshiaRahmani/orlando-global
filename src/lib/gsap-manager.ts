'use client';

// Global GSAP manager for handling animations across page navigation
class GSAPManager {
  private static instance: GSAPManager;
  private isLoaded = false;
  private loadingPromise: Promise<void> | null = null;
  private animations: Set<any> = new Set();

  static getInstance(): GSAPManager {
    if (!GSAPManager.instance) {
      GSAPManager.instance = new GSAPManager();
    }
    return GSAPManager.instance;
  }

  async loadGSAP(): Promise<void> {
    if (this.isLoaded) return Promise.resolve();
    if (this.loadingPromise) return this.loadingPromise;

    this.loadingPromise = new Promise((resolve, reject) => {
      // Check if already loaded
      if ((window as any).gsap && (window as any).ScrollTrigger) {
        this.isLoaded = true;
        return resolve();
      }

      // Load GSAP core first
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      
      gsapScript.onload = () => {
        // Load ScrollTrigger
        const scrollTriggerScript = document.createElement('script');
        scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
        
        scrollTriggerScript.onload = () => {
          const gsap = (window as any).gsap;
          const ScrollTrigger = (window as any).ScrollTrigger;
          
          if (gsap && ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
            this.isLoaded = true;
            resolve();
          } else {
            reject(new Error('Failed to load GSAP'));
          }
        };
        
        scrollTriggerScript.onerror = () => reject(new Error('Failed to load ScrollTrigger'));
        document.head.appendChild(scrollTriggerScript);
      };
      
      gsapScript.onerror = () => reject(new Error('Failed to load GSAP'));
      document.head.appendChild(gsapScript);
    });

    return this.loadingPromise;
  }

  registerAnimation(animation: any): void {
    this.animations.add(animation);
  }

  unregisterAnimation(animation: any): void {
    this.animations.delete(animation);
  }

  cleanupAll(): void {
    if ((window as any).ScrollTrigger) {
      (window as any).ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    }
    
    this.animations.forEach(animation => {
      if (animation && typeof animation.kill === 'function') {
        animation.kill();
      }
    });
    
    this.animations.clear();
    
    if ((window as any).ScrollTrigger) {
      (window as any).ScrollTrigger.refresh();
    }
  }

  refreshScrollTrigger(): void {
    if ((window as any).ScrollTrigger) {
      // Use a more comprehensive refresh
      requestAnimationFrame(() => {
        (window as any).ScrollTrigger.refresh(true);
      });
    }
  }

  // Method to handle language/content changes
  refreshForContentChange(): void {
    if ((window as any).ScrollTrigger) {
      // Kill all existing triggers
      (window as any).ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      
      // Clear animations
      this.animations.forEach(animation => {
        if (animation && typeof animation.kill === 'function') {
          animation.kill();
        }
      });
      this.animations.clear();
      
      // Refresh after cleanup
      setTimeout(() => {
        if ((window as any).ScrollTrigger) {
          (window as any).ScrollTrigger.refresh(true);
        }
      }, 100);
    }
  }
}

export default GSAPManager;
