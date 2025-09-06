import Contact from '@/components/modules/Contact/Contact';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Contact',
  description: 'Description for ContactPage',
  keywords: 'keyword',
  image: '/images/og-image.png',
});
// >> SEO End

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
