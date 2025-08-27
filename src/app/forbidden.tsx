import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Ban } from 'lucide-react';
import Link from 'next/link';

const Forbidden = () => {
  return (
    <section className="grid min-h-screen place-items-center">
      <Card className="h-96 w-full max-w-lg p-16">
        <CardContent className="space-y-4 text-center">
          <Ban size={80} className="text-destructive mx-auto" />
          <h1 className="mt-4 text-2xl">Access Denied</h1>
          <p className="text-primary/90">
            You do not have permission to view this page.
          </p>
          <Button asChild className="mt-4">
            <Link href="/">Go back home</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default Forbidden;
