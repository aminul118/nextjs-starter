import React from "react";
import Container from "@/components/ui/container";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
