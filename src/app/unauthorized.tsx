import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

const Unauthorized = () => {
  return (
    <section className="grid min-h-screen place-items-center">
      <Card className="flex h-96 w-full max-w-lg flex-col justify-center">
        <CardHeader className="flex flex-col items-center space-y-2">
          <ShieldAlert className="h-12 w-12 text-red-500" />
          <CardTitle className="text-center text-2xl font-bold">
            Unauthorized Access
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-primary/90">
            You do not have permission to view this page. Please login with an
            authorized account.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <Link href="/">
              <Button variant="secondary" className="w-32">
                Go Home
              </Button>
            </Link>
            <Link href="/login">
              <Button className="w-32">Login</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Unauthorized;
