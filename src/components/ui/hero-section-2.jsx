"use client";

import React from "react";
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
        url: "/logo.png",
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
      subtitle = "I build modern, responsive and user-friendly web applications using React, Next.js and Tailwind CSS.",
      callToAction = {
        text: "VIEW MY WORK",
        href: "#projects",
      },
      backgroundImage = "/logo.png",
      contactInfo = {
        website: "easinarafat.dev",
        phone: "+880 1XXXXXXXXX",
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
        <div className="flex w-full flex-col justify-between p-6 sm:p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          <div>
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

            <motion.main variants={containerVariants}>
              <motion.h1
                className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>

              <motion.div
                className="my-6 h-1 w-20 bg-primary"
                variants={itemVariants}
              />

              <motion.p
                className="mb-8 max-w-md text-base leading-7 text-muted-foreground"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>

              <motion.a
                href={callToAction.href}
                className="inline-block text-base font-bold tracking-widest text-primary transition-colors hover:text-primary/80"
                variants={itemVariants}
              >
                {callToAction.text}
              </motion.a>
            </motion.main>
          </div>

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