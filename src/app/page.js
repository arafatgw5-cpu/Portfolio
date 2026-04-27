"use client";

import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tube-light-navbar";
import { HeroSection } from "@/components/ui/hero-section-2";

export default function HomePage() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Projects", url: "/projects", icon: Briefcase },
    { name: "Resume", url: "/resume", icon: FileText },
  ];

  return (
    <>
      <NavBar items={navItems} />
         
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold"> <HeroSection /></h1>
      </main>
    </>
  );
}