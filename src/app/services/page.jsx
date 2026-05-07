"use client";

import Container from "@/components/Container";
import Title from "@/components/Title";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const servicesData = [
  {
    _id: "01",
    title: "Frontend Development",
    description:
      "I build clean, responsive, and modern user interfaces using React, Next.js, Tailwind CSS, DaisyUI, and shadcn/ui.",
    href: "/projects",
  },
  {
    _id: "02",
    title: "Next.js Web Application",
    description:
      "I create fast and SEO-friendly web applications with Next.js App Router, dynamic routes, server components, and optimized performance.",
    href: "/projects",
  },
  {
    _id: "03",
    title: "Authentication System",
    description:
      "I implement secure login, registration, email-password authentication, Google/GitHub login, and protected routes using Better Auth.",
    href: "/projects",
  },
  {
    _id: "04",
    title: "Responsive UI Design",
    description:
      "I design mobile, tablet, and desktop-friendly layouts with clean UI, smooth animations, and user-friendly experience.",
    href: "/contact",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-8 md:py-14 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
          }}
        >
          <Title>Services I Provide</Title>

          <p className="text-white/60 max-w-2xl mb-8 leading-7">
            I am Easin Arafat, an aspiring Frontend / Full Stack Web Developer
            from Bangladesh. I help build modern, responsive, and user-friendly
            web applications using React, Next.js, and Tailwind CSS.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {servicesData?.map((item) => (
              <div
                key={item?._id}
                className="flex flex-col p-6 bg-lightSky/5 border border-lightSky/20 hover:border-lightSky/50 rounded-2xl shadow-md group hover:shadow-lg transition-all duration-300 gap-3"
              >
                <div className="w-full flex items-center justify-between">
                  <p className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover hoverEffect">
                    {item?._id}
                  </p>

                  <Link
                    href={item?.href}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-lightSky text-white flex items-center justify-center transition-all duration-300"
                  >
                    <ArrowUp className="rotate-45 w-5 h-5" />
                  </Link>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold">
                  {item?.title}
                </h2>

                <p className="text-sm md:text-base text-white/70 leading-7">
                  {item?.description}
                </p>

                <div className="border-b border-white/20 w-full mt-3" />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesPage;