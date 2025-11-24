'use client';

import { contactActions } from '@/actions/contact/contact';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import FormSubmitButton from '@/components/ui/submit-button';
import { Textarea } from '@/components/ui/textarea';
import { contactFormValidation } from '@/validations/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValues = z.infer<typeof contactFormValidation>;

const ContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(contactFormValidation),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await contactActions(data);
      if (res.statusCode === 200) {
        toast.success('Message sent successfully');
        form.reset();
      }
    } catch (error) {
      toast.error((error as Error).message || 'Something went wrong');
    }
  };

  return (
    <Form {...form}>
      <form action={onSubmit} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John Doe" autoComplete="name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="john@company.com"
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Joining Your Team" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Write your message here..."
                  className="h-36"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormSubmitButton>Send</FormSubmitButton>
      </form>
    </Form>
  );
};

export default ContactForm;
