"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Container from "./Container";
import Sidebar from "./Sidebar";

const NavbarData = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  { title: "Resume", link: "/resume" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bodyColor/80 backdrop-blur-lg">
      <Container className="flex items-center justify-between py-5">
        
        {/* Logo */}
        <Logo title="Easin" subtitle="." />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {NavbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.link}
              className={`hover:text-hoverColor hoverEffect relative overflow-hidden ${
                pathname === item?.link
                  ? "text-hoverColor"
                  : "text-white/80"
              }`}
            >
              {item?.title}

              <span
                className={`w-full h-[2px] bg-hoverColor inline-block absolute left-0 bottom-[-4px] transition-transform duration-300 ${
                  pathname === item?.link
                    ? "translate-x-0"
                    : "-translate-x-[105%]"
                }`}
              />
            </Link>
          ))}

          {/* Hire Me Button */}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-lightSky/10 px-5 py-2 rounded-full border border-hoverColor/20 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex md:hidden relative"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 hover:text-hoverColor hoverEffect cursor-pointer" />
        </button>
      </Container>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;