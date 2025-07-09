import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  loading: boolean;
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="text-center">
        <div className="font-headline text-4xl font-bold tracking-wider text-primary animate-pulse">
          Orlando Global
        </div>
      </div>
    </div>
  );
}
