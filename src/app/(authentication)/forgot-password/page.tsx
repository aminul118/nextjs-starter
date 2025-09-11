import ForgotPasswordForm from '@/components/modules/authentication/ForgotPasswordForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Forgot Password',
  description: 'Description for Forgot Password Page',
  keywords: 'keyword',
});
// >> SEO End

const ForgotPasswordPage = () => {
  return (
    <div className="grid h-screen">
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
