"use client";

import CountUp from "react-countup";

const statsData = [
  {
    num: 10,
    text: "Completed Projects",
  },
  {
    num: 15,
    text: "Technologies Learned",
  },
  {
    num: 2,
    text: "Years Learning Experience",
  },
  {
    num: 100,
    text: "Problem Solving Practice",
  },
];

const Statistics = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsData?.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-lightSky/40 hover:bg-lightSky/5 transition-all duration-300"
          >
            <div className="flex flex-col items-center md:items-start gap-2">
              
              <CountUp
                end={item.num}
                duration={3}
                delay={0.2}
                className="text-3xl md:text-5xl font-extrabold text-lightSky"
              />

              <p className="text-center md:text-left leading-6 text-white/70 text-sm md:text-base max-w-[140px]">
                {item?.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;