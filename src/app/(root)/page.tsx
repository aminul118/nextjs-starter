import SearchButton from '@/components/common/rich-text/SearchButton';
import Contact from '@/components/modules/Contact/Contact';
import FAQ from '@/components/modules/Home/FAQ';
import HeroBanner from '@/components/modules/Home/HeroBanner';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Home',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
  image: '/seo/shrl-hero-ss.png',
});
// >> SEO End

const HomePage = () => {
  return (
    <>
      <SearchButton />
      <HeroBanner />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
