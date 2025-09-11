import VerifyOTPForm from '@/components/modules/authentication/VerifyOTPForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Verify otp',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
});

// >> SEO End
const VerifyOTPPage = () => {
  return (
    <div className="grid h-screen">
      <VerifyOTPForm />
    </div>
  );
};

export default VerifyOTPPage;
