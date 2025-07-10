'use client';

import { useEffect, useState } from 'react';
import { useApp } from '@/hooks/use-app';

export default function ThemeTransition() {
  const { theme } = useApp();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousTheme, setPreviousTheme] = useState(theme);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (theme !== previousTheme && previousTheme !== undefined) {
      setIsTransitioning(true);
      setAnimationKey(prev => prev + 1);
      
      // Small delay to ensure state is updated before animation starts
      const updateTimer = setTimeout(() => {
        setPreviousTheme(theme);
      }, 50);
      
      // End transition after animation completes
      const endTimer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600); // Reduced duration for smoother experience

      return () => {
        clearTimeout(updateTimer);
        clearTimeout(endTimer);
      };
    } else if (previousTheme === undefined) {
      setPreviousTheme(theme);
    }
  }, [theme, previousTheme]);

  if (!isTransitioning) return null;

  const newThemeColor = theme === 'dark' ? '#333333' : '#f0f0f0';

  return (
    <>
      {/* Primary expanding circle from top-right corner */}
      <div
        key={`primary-${animationKey}`}
        className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${newThemeColor} 0%, rgba(${theme === 'dark' ? '51, 51, 51' : '240, 240, 240'}, 0.4) 30%, rgba(${theme === 'dark' ? '51, 51, 51' : '240, 240, 240'}, 0.2) 50%, transparent 100%)`,
          animation: 'primaryWave 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        }}
      />
      
      {/* Secondary wave for smoother transition */}
      <div
        key={`secondary-${animationKey}`}
        className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden"
        style={{
          background: `radial-gradient(circle at 95% 5%, rgba(${theme === 'dark' ? '51, 51, 51' : '240, 240, 240'}, 0.3) 0%, rgba(${theme === 'dark' ? '51, 51, 51' : '240, 240, 240'}, 0.15) 25%, transparent 70%)`,
          animation: 'secondaryWave 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        }}
      />
      
      <style jsx>{`
        @keyframes primaryWave {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          40% {
            transform: scale(1.5);
            opacity: 0.6;
          }
          70% {
            transform: scale(3);
            opacity: 0.3;
          }
          90% {
            transform: scale(5);
            opacity: 0.1;
          }
          100% {
            transform: scale(6);
            opacity: 0;
          }
        }
        
        @keyframes secondaryWave {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          25% {
            opacity: 0.5;
          }
          50% {
            transform: scale(2);
            opacity: 0.3;
          }
          80% {
            transform: scale(4);
            opacity: 0.15;
          }
          100% {
            transform: scale(5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
