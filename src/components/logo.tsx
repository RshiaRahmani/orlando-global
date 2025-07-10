'use client';

import Image from 'next/image';
import { useApp } from '@/hooks/use-app';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width = 200, height = 60 }: LogoProps) {
  const { theme } = useApp();
  
  const logoSrc = theme === 'dark' 
    ? '/assets/logos/orlandoGlobal/Globallogo-W.svg'
    : '/assets/logos/orlandoGlobal/GlobalLogo.svg';
  
  return (
    <Image
      src={logoSrc}
      alt="Orlando Global"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
