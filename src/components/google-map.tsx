'use client';

import { useApp } from '@/hooks/use-app';
import { useMemo } from 'react';

interface GoogleMapProps {
  location: string; // e.g., "Kyrenia, Cyprus" or specific coordinates
  title: string;
  className?: string;
}

export default function GoogleMap({ location, title, className = "w-full h-64" }: GoogleMapProps) {
  const { theme } = useApp();

  const mapUrl = useMemo(() => {
    // Dark theme styles for Google Maps
    const darkStyles = [
      'feature:all|element:geometry|color:0x242f3e',
      'feature:all|element:labels.text.stroke|color:0x242f3e',
      'feature:all|element:labels.text.fill|color:0x746855',
      'feature:administrative.locality|element:labels.text.fill|color:0xd59563',
      'feature:poi|element:labels.text.fill|color:0xd59563',
      'feature:poi.park|element:geometry|color:0x263c3f',
      'feature:poi.park|element:labels.text.fill|color:0x6b9a76',
      'feature:road|element:geometry|color:0x38414e',
      'feature:road|element:geometry.stroke|color:0x212a37',
      'feature:road|element:labels.text.fill|color:0x9ca5b3',
      'feature:road.highway|element:geometry|color:0x746855',
      'feature:road.highway|element:geometry.stroke|color:0x1f2835',
      'feature:road.highway|element:labels.text.fill|color:0xf3d19c',
      'feature:transit|element:geometry|color:0x2f3948',
      'feature:transit.station|element:labels.text.fill|color:0xd59563',
      'feature:water|element:geometry|color:0x17263c',
      'feature:water|element:labels.text.fill|color:0x515c6d',
      'feature:water|element:labels.text.stroke|color:0x17263c'
    ];

    // Light theme styles for Google Maps
    const lightStyles = [
      'feature:all|element:geometry|color:0xf5f5f5',
      'feature:all|element:labels.text.fill|color:0x616161',
      'feature:all|element:labels.text.stroke|color:0xffffff',
      'feature:administrative|element:geometry|color:0xfefefe',
      'feature:administrative.land_parcel|element:labels.text.fill|color:0xbdbdbd',
      'feature:poi|element:geometry|color:0xeeeeee',
      'feature:poi|element:labels.text.fill|color:0x757575',
      'feature:poi.park|element:geometry|color:0xe5e5e5',
      'feature:poi.park|element:labels.text.fill|color:0x9e9e9e',
      'feature:road|element:geometry|color:0xffffff',
      'feature:road.arterial|element:labels.text.fill|color:0x757575',
      'feature:road.highway|element:geometry|color:0xdadada',
      'feature:road.highway|element:labels.text.fill|color:0x616161',
      'feature:road.local|element:labels.text.fill|color:0x9e9e9e',
      'feature:transit.line|element:geometry|color:0xe5e5e5',
      'feature:transit.station|element:geometry|color:0xeeeeee',
      'feature:water|element:geometry|color:0xc9c9c9',
      'feature:water|element:labels.text.fill|color:0x9e9e9e'
    ];

    const styles = theme === 'dark' ? darkStyles : lightStyles;
    const styleParams = styles.map(style => `&style=${style}`).join('');

    // Generate the embed URL for the location
    const searchUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d33.3157894!3d35.3413886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1767ca494d55%3A0x324c3861a1894276!2s${encodeURIComponent(location)}!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s${styleParams}`;
    
    return searchUrl;
  }, [location, theme]);

  return (
    <div className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 ${className}`}>
      <iframe
        key={`map-${theme}`} // Force re-render on theme change for immediate style update
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="transition-all duration-300"
      />
    </div>
  );
}
