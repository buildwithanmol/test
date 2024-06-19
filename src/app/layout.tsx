import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Components - Fully Customizable Functional Web Components",
  description:
    "Discover Dev Components, a unique platform offering a wide range of fully customizable and functional web components. Enhance your web development experience with our ready-to-use, highly flexible UI elements.",
  keywords:
    "web components, custom components, react components, UI components, web development, front-end development, customizable components, functional components, custom web design, reusable components, open-source components",
  // twitterTitle: "Dev Components - Fully Customizable Web Components",
  // twitterDescription:
  //   "Discover Dev Components, a unique platform offering a wide range of fully customizable and functional web components. Enhance your web development experience with our ready-to-use, highly flexible UI elements.",
  // twitterImage: "https://your-domain.com/twitter-image.jpg",
  // twitterCard: "summary_large_image",
  // twitterSite: "@your-twitter-handle",
  // twitterCreator: "@your-twitter-handle",
};

export const viewport: Viewport = {
  themeColor: '#1e293b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto max-w-[1400px] bg-primary`}>
        {children}
        {/* svg line patterns */}
        <Link
          href="/"
          className="fixed md:absolute left-0 transform select-none md:translate-x-0 hover:opacity-80 z-50 top-1 flex items-center text-base text-accent gap-1  p-[2px] rounded-r-full px-4"
        >
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={500}
            height={500}
            className="w-8 select-none "
          />
          <h2 className="md:block hidden select-none">Dev Components</h2>
        </Link>

        <div className="svg-pattern absolute h-52 inset-0 -z-10 opacity-60">
          <div className="bg-gradient-to-t from-primary to-secondary/50 w-full h-full"></div>
        </div>
        <GoogleAnalytics gaId="G-BQTKMVNV86" />
      </body>
    </html>
  );
}
