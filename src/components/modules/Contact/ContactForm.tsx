import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6 lg:p-8">
      <h2 className="mb-4 text-center text-3xl font-bold">Send Us a Message</h2>
      <p className="mb-6 text-center">
        Fill out the form below and we will get back to you as soon as possible.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name" className="font-medium">
            Name
          </Label>
          <Input type="text" id="name" placeholder="John Doe" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email" className="font-medium">
            Email
          </Label>
          <Input type="email" id="email" placeholder="john@example.com" />
        </div>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="subject" className="font-medium">
          Subject
        </Label>
        <Input type="text" id="subject" placeholder="Subject" />
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message" className="font-medium">
          Message
        </Label>
        <Textarea
          className="min-h-48"
          placeholder="Type your message here..."
          id="message"
        />
      </div>

      <Button>Send Message</Button>
    </div>
  );
};

export default ContactForm;
