import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import AosProvider from "@/providers/AosProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import { Metadata } from "next";
import generateMetaTags from "@/seo/generateMetaTags";
import { IChildren } from "@/types";
import { poppins } from "@/lib/fonts";

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: "Home",
  description: "Write Description",
  keywords: "write keyword not more than 60 words",
  image: "/seo/shrl-hero-ss.png",
});
// >> SEO End

const RootLayout = ({ children }: IChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Google analytics setup */}
      <GoogleAnalytics gaId="give analytics code" />
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
    </html>
  );
};

export default RootLayout;
