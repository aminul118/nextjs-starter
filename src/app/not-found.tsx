'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center text-center"
      data-aos="fade-up"
    >
      <div className="w-full max-w-sm rounded-lg p-8">
        {/* Next.js 15 Image Fix */}
        <Image
          src="/assets/error/404.svg"
          alt="Error 404"
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto h-64 w-64"
        />

        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mb-6 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        {/* Next.js 15 - Link wrapping Button works fine */}
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
