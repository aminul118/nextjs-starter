'use client';

import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="bg-muted flex min-h-screen flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center gap-4">
        <AlertCircle className="h-12 w-12 text-red-500" />
        <h2 className="text-4xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        {/* Button with icon */}
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
