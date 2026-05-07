"use client";

// import { useTypewriter } from "@/hooks/user-type-writer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/app/hooks/user-type-writer";

const HomeDescription = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const description =
    "As a Frontend & Full Stack Web Developer, I build modern, responsive, and user-friendly web applications using React, Next.js, Tailwind CSS, Better Auth, and MongoDB. I enjoy creating clean UI designs, solving real-world problems, and continuously improving my development skills through hands-on projects.";

  const { displayedText, isComplete } = useTypewriter(description, 25);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <motion.p
      className="w-auto text-white/70 font-normal leading-8 mb-6 min-h-[170px] md:min-h-[140px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {hasLoaded ? (
        displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ color: "rgb(156 163 175)" }}
            animate={{
              color: isComplete
                ? "rgb(255 255 255)"
                : "rgb(156 163 175)",
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.015,
            }}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span className="text-white/60">{description}</span>
      )}
    </motion.p>
  );
};

export default HomeDescription;