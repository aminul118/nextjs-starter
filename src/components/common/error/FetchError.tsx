'use client';

import { Button } from '@/components/ui/button';
import { Frown, LucideIcon, Undo } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Container from '../../ui/Container';

interface NotFoundProps {
  title?: string;
  description?: string;
  Icon?: LucideIcon; // renamed for clarity
}

const FetchError = ({
  title = 'Something Went Wrong',
  description = 'Try sometimes later',
  Icon,
}: NotFoundProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Container className="center-content flex flex-col items-center justify-center py-20 text-center">
      {Icon ? (
        <Icon size={16} className="text-muted-foreground" />
      ) : (
        <Frown size={16} className="text-muted-foreground" />
      )}

      <h1 className="mt-6 text-2xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground mt-2">{description}</p>

      <div className="mt-6 flex gap-4">
        <Button onClick={handleBack}>
          <Undo /> Back to previous page
        </Button>

        <Button variant="outline" asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </Container>
  );
};

export default FetchError;
