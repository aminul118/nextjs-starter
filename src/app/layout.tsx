import envVars from '@/config/envVars';
import { poppins } from '@/lib/fonts';
import AosProvider from '@/providers/AosProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import generateMetaTags from '@/seo/generateMetaTags';
import { IChildren } from '@/types';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';
import { Toaster } from 'sonner';
import './globals.css';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Home',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
});
// >> SEO End

const RootLayout = ({ children }: IChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={envVars.Analytics.GTM_ID} />
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AosProvider>{children}</AosProvider>
          <Toaster position="top-right" richColors theme="system" />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={envVars.Analytics.GA_ID} />
    </html>
  );
};

export default RootLayout;
