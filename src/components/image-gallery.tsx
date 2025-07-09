import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    hint: string;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              data-ai-hint={image.hint}
              className="object-cover w-full h-full"
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
