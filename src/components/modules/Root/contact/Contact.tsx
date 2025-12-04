import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <Container className="mx-auto max-w-5xl space-y-12" data-aos="fade-up">
      <SectionHeading
        title="Get in Touch"
        description="For any inquiries, please fill out the form below and a member of our team will get back to you shortly."
      />
      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:mt-24">
        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
