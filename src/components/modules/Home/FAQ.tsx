import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Container from "@/components/ui/container";

const FAQ = () => {
  const faqData = [
    {
      value: "item-1",
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      value: "item-2",
      question: "How do I sign up?",
      answer:
        "You can sign up by clicking the Sign Up button at the top right of the page.",
    },
    {
      value: "item-3",
      question: "What payment methods are accepted?",
      answer: "We accept credit cards, PayPal, and bank transfers.",
    },
    {
      value: "item-4",
      question: "Can I change my subscription plan?",
      answer:
        "Yes, you can change your plan at any time from your account settings.",
    },
    {
      value: "item-5",
      question: "How can I contact support?",
      answer:
        "You can contact support via email at support@example.com or call us at +1 234 567 890.",
    },
  ];

  return (
    <Container className="grid sm:grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
      {/* FAQ Image */}

      <Image
        src={"/assets/images/faq.png"}
        width={500}
        height={500}
        alt="FAQ image"
      />

      {/* Accordion Content */}
      <div className="max-w-xl w-full">
        <h2 className="text-5xl font-bold mb-8">FAQ</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default FAQ;
