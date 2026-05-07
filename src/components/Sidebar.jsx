"use client";

import React from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
// import { useOutsideClick } from "@/hooks/use-outside-click";

const NavbarData = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  { title: "Resume", link: "/resume" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
];

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick(onClose);

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 z-[999] w-72 bg-bodyColor border-l border-hoverColor/20 shadow-2xl transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-5 border-b border-white/10">
        <Logo title="Easin" subtitle="." />

        <button
          onClick={onClose}
          className="hover:text-red-500 hoverEffect"
          aria-label="Close sidebar"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-col px-6 gap-6 text-sm uppercase tracking-wide font-medium mt-8">
        {NavbarData.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={`hover:text-hoverColor hoverEffect relative ${
              item?.link === pathname ? "text-hoverColor" : "text-white/80"
            }`}
            onClick={onClose}
          >
            {item.title}
          </Link>
        ))}

        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm bg-lightSky/10 px-4 py-2 rounded-full border border-hoverColor/20 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
          onClick={onClose}
        >
          Hire Me
        </Link>

        <div className="pt-4">
          <SocialLinks />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;