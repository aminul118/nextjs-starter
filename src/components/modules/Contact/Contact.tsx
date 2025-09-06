import Container from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { SectionProps } from '@/types/react.types';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = ({ className, ...props }: SectionProps) => {
  return (
    <Container {...props}>
      <div
        className={cn(
          'grid items-start gap-12 lg:grid-cols-2 lg:gap-20',
          className,
        )}
      >
        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
