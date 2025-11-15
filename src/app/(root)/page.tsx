import Contact from '@/components/modules/Contact/Contact';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const HomePage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default HomePage;

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title:
    'Smart Healthcare and Research Ltd. - Empowering Maternal & Child Health',
  description:
    'Smart Healthcare and Research Ltd. offers innovative healthcare solutions for women and children, including online consultations, research, professional training, and community outreach.',
  keywords:
    "Smart Healthcare, shrl, shrlbd, Maternal health, Child healthcare, Digital healthcare services, Diabetes in pregnancy, Healthcare research, Public health, Professional training healthcare, Women's health",
  image: '/seo/shrl-hero-ss.png',
});
// --> SEO End
