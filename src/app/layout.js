import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/ui/tube-light-navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Arafat Nexus",
  description: "Personal Portfolio of Arafat",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full font-sans">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}