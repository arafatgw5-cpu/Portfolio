"use client";

import React, { useEffect, useState } from "react";

const TextSlider = () => {
  const animHeight = 35;

  const [currentIndex, setCurrentIndex] = useState(0);

  const textItems = [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Learner",
    "UI Focused Web Designer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [textItems.length]);

  return (
    <div className="relative overflow-hidden h-[35px] w-full flex items-center">
      <div
        className="absolute transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * animHeight}px)`,
        }}
      >
        {textItems.map((item, index) => (
          <p
            key={index}
            className="h-[35px] flex items-center font-semibold text-lightSky tracking-[2px] whitespace-nowrap text-sm md:text-base"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;