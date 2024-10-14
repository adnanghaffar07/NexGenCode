import type { Metadata } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Head from "next/head";
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";

const FooterContainer = dynamic(() => import("./components/footer-container"), {
  suspense: true,
});
const FormDisplay = dynamic(() => import("./components/FormDisplay"), {
  suspense: true,
});
const ScrollToTop = dynamic(() => import("./components/ScrollToTop"), {
  suspense: true,
});

export const metadata: Metadata = {
  title: "NexGenCode | Premier Digital Marketing & Software Development Solutions",
  description:
    "Transform your business with NexGenCode's innovative digital marketing, web development, and app development solutions. Trusted by industry leaders, we deliver tailored strategies that drive measurable results. Explore our comprehensive services today!",
  keywords: [
    "NexGenCode",
    "digital marketing",
    "software development",
    "app development",
  ],
  alternates: {
    canonical: "https://codeautomation.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/hero-sec-video.webm"
          as="video"
          type="video/webm"
        />
        <link
          rel="preload"
          href="/hero-sec-video.mp4"
          as="video"
          type="video/mp4"
        />
      </Head>
      <body>

        <div className="flex flex-col bg-white relative">
          <HomeNavigationContainer />
          {children}
          <Suspense fallback={<p>Loading form...</p>}>
            <div>
              <FormDisplay />
            </div>
          </Suspense>
          <Suspense fallback={<p>Loading footer...</p>}>
            <FooterContainer />
          </Suspense>
          <Suspense fallback={<p>Loading scroll-to-top...</p>}>
            <ScrollToTop />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
