import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <Card>
      <CardContent className="max-w-xl mx-auto flex w-full flex-col gap-6 lg:p-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Send Us a Message
        </h2>
        <p className="text-center mb-6">
          Fill out the form below and we will get back to you as soon as
          possible.
        </p>

        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name" className="font-medium ">
              Name
            </Label>
            <Input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="font-medium ">
              Email
            </Label>
            <Input type="email" id="email" placeholder="john@example.com" />
          </div>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="subject" className="font-medium ">
            Subject
          </Label>
          <Input type="text" id="subject" placeholder="Subject" />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="message" className="font-medium ">
            Message
          </Label>
          <Textarea
            className="min-h-48"
            placeholder="Type your message here..."
            id="message"
          />
        </div>

        <Button>Send Message</Button>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
