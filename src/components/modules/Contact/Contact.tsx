import Container from '@/components/ui/container';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <Container>
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
