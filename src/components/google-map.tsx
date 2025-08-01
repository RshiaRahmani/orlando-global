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
    // Use direct address search with proper encoding
    let searchAddress = location;
    let coordinates = '35.3413886,33.3157894'; // Default Cyprus coordinates
    
    // Set specific search addresses and coordinates for each location
    if (location.includes('Karaoğlanoğlu')) {
      searchAddress = 'Starlux Cinema, Karaoğlanoğlu, Cyprus';
      coordinates = '35.3422161,33.2735431';
    } else if (location.includes('İsmet İnönü') || location.includes('Gazimağusa')) {
      searchAddress = 'Orlando Shop And Coffee, Gazimağusa, Cyprus';
      coordinates = '35.1409395,33.9147562';
    } else if (location.includes('Bener Hakki Hekeri') || (location.includes('Girne') && location.includes('Akacan'))) {
      searchAddress = 'Cyberx Kyrenia, 88J2+24 Girne, Cyprus';
      coordinates = '35.3300108,33.3002793';
    }

    // Create a simple, reliable embed URL with more specific center coordinates
    const encodedAddress = encodeURIComponent(searchAddress);
    const [lat, lng] = coordinates.split(',');
    
    // Use specific place ID for each location if available, otherwise use coordinates
    let mapUrl;
    if (location.includes('Bener Hakki Hekeri') || (location.includes('Girne') && location.includes('Akacan'))) {
      // Use the exact place ID from the Google Maps link for CyberX
      mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f18!3m3!1m2!1s0x14de139dae781193%3A0xdf0863a79bd470dc!2sCyberx%20Kyrenia!5e0!3m2!1sen!2s!4v${Date.now()}!5m2!1sen!2s`;
    } else if (location.includes('Karaoğlanoğlu')) {
      // Use the exact place ID from the Google Maps link for Starlux Cinema
      mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f18!3m3!1m2!1s0x14de12b3ce745a55%3A0x3a1ff9d50383bfa4!2sStarlux%20Cinema!5e0!3m2!1sen!2s!4v${Date.now()}!5m2!1sen!2s`;
    } else if (location.includes('İsmet İnönü') || location.includes('Gazimağusa')) {
      // Use the exact place ID from the Google Maps link for Orlando Shop And Coffee
      mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f18!3m3!1m2!1s0x14dfc9376746009f%3A0x65f281d2dee95d32!2sOrlando%20Shop%20And%20Coffee!5e0!3m2!1sen!2s!4v${Date.now()}!5m2!1sen!2s`;
    } else {
      // Use coordinates for precise centering and include the address as a search query
      mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17.5!3m3!1m2!1s0x0%3A0x0!2s${encodedAddress}!5e0!3m2!1sen!2s!4v${Date.now()}!5m2!1sen!2s&z=18`;
    }
    
    return mapUrl;
  }, [location, theme]);

  return (
    <div className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 ${className}`}>
      <iframe
        key={`map-${theme}`} // Force re-render on theme change for immediate style update
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ 
          border: 0,
          filter: theme === 'dark' ? 'invert(0.9) hue-rotate(180deg)' : 'none',
          transition: 'filter 0.3s ease'
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="transition-all duration-300"
      />
    </div>
  );
}
