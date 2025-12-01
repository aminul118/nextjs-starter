'use client';

import Logo from '@/components/layouts/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import SubmitButton from '@/components/ui/submit-button';
import { cn } from '@/lib/utils';
import { forgotPasswordAction } from '@/services/auth/forgot-password';
import { forgotPasswordValidation } from '@/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValues = z.infer<typeof forgotPasswordValidation>;

const ForgotPasswordForm = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordValidation),
    defaultValues: { email: '' },
  });

  const handleSubmit = async (formData: FormData) => {
    try {
      const res = await forgotPasswordAction(formData);
      toast.success(res.message || 'Check your email');
      form.reset();
      router.push('/login');
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div data-aos="fade-right" className={cn('w-full', className)} {...props}>
      <Card className="mx-auto w-full max-w-md rounded-2xl shadow-xl">
        <CardHeader className="flex flex-col items-center space-y-2 pb-2">
          <Logo />
          <CardTitle className="text-center text-xl font-semibold">
            Forgot Password?
          </CardTitle>
          <p className="text-muted-foreground text-center text-sm">
            Enter your email address to reset your password
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <Form {...form}>
            <form action={handleSubmit} className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton>Send Reset Email</SubmitButton>
            </form>
          </Form>

          <div className="text-center text-sm">
            Back to{' '}
            <Link href="/login">
              <Button variant="link" className="p-0 pl-1">
                Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
