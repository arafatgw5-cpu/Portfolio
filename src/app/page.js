import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
// import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Container className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
          
          <div>
            <h3 className="font-semibold text-white/70 tracking-[3px] uppercase mb-3">
              Frontend & Full Stack Developer
            </h3>

            <h2 className="text-3xl md:text-5xl font-semibold mb-2">
              Hello I&apos;m
            </h2>

            <h1 className="text-lightSky text-5xl md:text-7xl font-bold tracking-normal leading-tight">
              Easin Arafat
            </h1>
          </div>

          <div className="w-full h-[180px] md:h-[150px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </div>

          <p className="w-full md:max-w-[580px] text-white/60 font-normal leading-8 text-sm md:text-base">
            I am an aspiring Frontend & Full Stack Web Developer from
            Bangladesh. I love building modern, responsive, and user-friendly
            web applications using React, Next.js, Tailwind CSS, Better Auth,
            and MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hover:border-hoverColor hoverEffect px-6 py-6">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2 text-sm md:text-base"
              >
                Download CV <Download className="w-4 h-4" />
              </Link>
            </Button>

            <SocialLinks />
          </div>

          <Statistics />
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end">
          {/* <Photo /> */}
        </div>
      </Container>
    </div>
  );
}