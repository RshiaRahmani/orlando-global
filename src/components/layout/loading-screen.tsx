import { cn } from '@/lib/utils';
import Logo from '@/components/logo';

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
        <div className="animate-pulse">
          <Logo width={300} height={90} />
        </div>
      </div>
    </div>
  );
}
