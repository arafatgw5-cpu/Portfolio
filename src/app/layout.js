import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Easin Arafat | Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Easin Arafat, an aspiring Frontend and Full Stack Web Developer from Bangladesh. View projects, services, skills, and contact details.",
  keywords:
    "Easin Arafat, frontend developer, full stack developer, Next.js developer, React developer, Bangladesh web developer, portfolio",
  authors: [{ name: "Easin Arafat" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://your-portfolio-url.vercel.app/",
    title: "Easin Arafat | Frontend Developer Portfolio",
    description:
      "Discover Easin Arafat's portfolio showcasing React, Next.js, Tailwind CSS, Better Auth, MongoDB, and modern web projects.",
    images: [
      {
        url: "https://your-portfolio-url.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Easin Arafat Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easin Arafat | Frontend Developer Portfolio",
    description:
      "Check out Easin Arafat's portfolio for React, Next.js, and modern frontend projects.",
    images: ["https://your-portfolio-url.vercel.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://your-portfolio-url.vercel.app/",
  },
  other: {
    "theme-color": "#00ff99",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}