import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const AuthSkeleton = () => {
  return (
    <div className="flex items-center justify-center rounded-lg shadow-lg">
      <Card className="w-full max-w-5xl overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* Left Form Section */}
          <div className="flex flex-col justify-center gap-6 p-6 md:p-12">
            {/* Logo */}
            <div className="grid place-items-center gap-4">
              <Skeleton className="h-10 w-32 rounded-lg" />
              <Skeleton className="h-4 w-64" />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-28" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Button */}
            <Skeleton className="h-10 w-full rounded-md" />

            {/* Sign up link */}
            <div className="grid place-items-center">
              <Skeleton className="h-4 w-48" />
            </div>
          </div>

          {/* Right Image Section */}
          <div className="bg-muted relative hidden md:block">
            <Skeleton className="h-full w-full rounded-none" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthSkeleton;
