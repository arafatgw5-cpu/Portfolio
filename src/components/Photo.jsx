"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import hero from "@/images/hero.png";

const Photo = () => {
  const circleColors = ["#00ff99"];

  const circleVariants = {
    initial: {
      strokeDasharray: "24 10 0 0",
      rotate: 0,
      opacity: 0,
    },

    animate: (index) => ({
      strokeDasharray: [
        "15 120 25 25",
        "16 25 92 72",
        "4 250 22 22",
      ],

      rotate: [120, 360],

      opacity: 1,

      transition: {
        strokeDasharray: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },

        rotate: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },

        opacity: {
          duration: 0.5,
          delay: 0.4 + index * 0.2,
          ease: "easeIn",
        },
      },
    }),
  };

  return (
    <div className="w-full flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
          },
        }}
        className="relative"
      >
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[250px] h-[250px] md:w-[330px] md:h-[330px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-lightSky/20 bg-lightSky/5 backdrop-blur-md shadow-[0_0_50px_rgba(0,255,153,0.15)]">
            <Image
              src={hero}
              alt="Easin Arafat"
              width={500}
              height={500}
              priority
              quality={100}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Animated Circle */}
        <svg
          className="w-[300px] h-[300px] md:w-[430px] md:h-[430px] lg:w-[520px] lg:h-[520px]"
          viewBox="0 0 506 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {circleColors.map((color, index) => (
            <motion.circle
              key={index}
              cx="253"
              cy="253"
              r={240 - index * 15}
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={circleVariants}
              initial="initial"
              animate="animate"
              custom={index}
            />
          ))}
        </svg>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-lightSky/10 blur-3xl rounded-full -z-10" />
      </motion.div>
    </div>
  );
};

export default Photo;