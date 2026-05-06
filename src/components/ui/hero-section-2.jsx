"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const InfoIcon = ({ type }) => {
  const icons = {
    website: <span>🌐</span>,
    phone: <span>📞</span>,
    address: <span>📍</span>,
  };

  return <div className="mr-2 flex-shrink-0 text-lg">{icons[type]}</div>;
};

const HeroSection = React.forwardRef(
  (
    {
      className,

      logo = {
        url: "/a.png",
        alt: "Logo",
        text: "Easin Arafat",
      },

      slogan = "FRONTEND DEVELOPER",

      title = (
        <>
          Hi, I am <br />
          <span className="text-primary">Easin Arafat</span>
        </>
      ),

      subtitle =
        "I build modern, responsive and user-friendly web applications using React, Next.js and Tailwind CSS.",

      backgroundImage = "/logo.png",

      contactInfo = {
        website: "easinarafat.dev",
        phone: "+8801876751422",
        address: "Bangladesh",
      },

      ...props
    },
    ref
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* LEFT SIDE */}
        <div className="flex w-full flex-col justify-between p-6 sm:p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          <div>
            {/* HEADER */}
            <motion.header className="mb-12" variants={itemVariants}>
              {logo && (
                <div className="flex items-center">
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="mr-3 h-12 w-12 rounded-full border object-cover shadow"
                  />

                  <div>
                    {logo.text && (
                      <p className="text-lg font-bold text-foreground">
                        {logo.text}
                      </p>
                    )}

                    {slogan && (
                      <p className="text-xs tracking-wider text-muted-foreground">
                        {slogan}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.header>

            {/* MAIN CONTENT */}
            <motion.main variants={containerVariants}>
              <motion.h1
                className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>

              <motion.div
                className="my-6 h-1 w-20 rounded-full bg-primary"
                variants={itemVariants}
              />

              <motion.p
                className="mb-8 max-w-md text-base leading-7 text-muted-foreground"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>

              {/* PREMIUM BUTTON */}
              <motion.div variants={itemVariants}>
                <Link href="/projects">
                  <motion.button
                    className="inline-flex items-center gap-3 rounded-full bg-white/90 px-7 py-3 text-sm font-bold tracking-[0.2em] text-black shadow-2xl backdrop-blur transition-all duration-300 hover:bg-primary hover:text-white"
                    whileHover={{
                      scale: 1.06,
                      y: -4,
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>VIEW MY PROJECTS</span>

                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                      }}
                      className="text-lg"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.main>
          </div>

          {/* FOOTER */}
          <motion.footer className="mt-12 w-full" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-6 text-xs text-muted-foreground sm:grid-cols-3">
              <div className="flex items-center">
                <InfoIcon type="website" />
                <span>{contactInfo.website}</span>
              </div>

              <div className="flex items-center">
                <InfoIcon type="phone" />
                <span>{contactInfo.phone}</span>
              </div>

              <div className="flex items-center">
                <InfoIcon type="address" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.footer>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="relative min-h-[400px] w-full overflow-hidden md:min-h-screen md:w-1/2 lg:w-2/5"
          initial={{
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          }}
          animate={{
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          <img
            src={backgroundImage}
            alt="Hero Image"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };