import RegisterForm from '@/components/modules/auth/RegisterForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Register',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
  image: '/seo/shrl-hero-ss.png',
});
// >> SEO End

const RegisterPage = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-2 md:p-10 lg:p-6">
      <div className="w-full max-w-sm md:max-w-5xl">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
