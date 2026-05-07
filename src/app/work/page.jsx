"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import projectOne from "@/images/projectOne.png";
import projectTwo from "@/images/projectTwo.png";
import projectThree from "@/images/projectThree.png";

const projects = [
  {
    id: "01",
    title: "SkillSphere",
    category: "Online Learning Platform",
    description:
      "A modern online learning platform where users can explore courses, view course details, login/register, and manage their profile. Built with Next.js, Better Auth, MongoDB, and Tailwind CSS.",
    stack: ["Next.js", "Tailwind CSS", "Better Auth", "MongoDB"],
    image: projectOne,
    liveUrl: "https://skillsphere-b13-8.vercel.app",
    githubUrl: "https://github.com/arafatgw5-cpu/SkillSphere-B13_8",
  },
  {
    id: "02",
    title: "Dragon News",
    category: "News Portal",
    description:
      "A responsive news portal using dynamic category routes, news details pages, API data fetching, authentication, and clean news card UI design.",
    stack: ["Next.js", "API", "Better Auth", "Tailwind CSS"],
    image: projectTwo,
    liveUrl: "https://dragon-news-blush.vercel.app",
    githubUrl: "https://github.com/arafatgw5-cpu/Dragon-News",
  },
  {
    id: "03",
    title: "3D Book Project",
    category: "Creative Web Project",
    description:
      "A creative and modern web project focused on clean UI, responsive layout, and smooth user experience using Next.js and Tailwind CSS.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    image: projectThree,
    liveUrl: "https://3-d-project-six.vercel.app/books",
    githubUrl: "https://github.com/arafatgw5-cpu/3D-Project",
  },
];

export default function ProjectSlider() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
      }}
      className="py-8 md:py-14 text-white"
    >
      <Container>
        <div className="mb-8">
          <p className="text-lightSky uppercase tracking-[4px] text-sm">
            My Projects
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Recent Works 🚀
          </h2>

          <p className="text-white/60 max-w-2xl mt-4 leading-7">
            Here are some of my recent projects built with React, Next.js,
            Tailwind CSS, Better Auth, MongoDB, and modern web technologies.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightSky/20 rounded-2xl overflow-hidden">
                  <CardContent className="p-5 md:p-7">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                      <div className="w-full md:w-1/2 order-2 md:order-1">
                        <div className="space-y-4 md:space-y-6">
                          <h2 className="text-5xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project?.id}
                          </h2>

                          <div>
                            <h3 className="text-2xl md:text-4xl font-bold text-white">
                              {project?.title}
                            </h3>

                            <p className="text-lightSky mt-2 font-medium">
                              {project?.category}
                            </p>
                          </div>

                          <p className="text-white/60 text-sm md:text-base leading-7">
                            {project?.description}
                          </p>

                          <ul className="flex flex-wrap gap-2 md:gap-3 items-center">
                            {project?.stack?.map((item, index) => (
                              <li
                                key={index}
                                className="text-xs md:text-sm text-lightSky border border-lightSky/20 px-3 py-1 rounded-full bg-lightSky/5"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>

                          <Separator className="bg-gray-700" />

                          <div className="flex items-center gap-4">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                  >
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <ArrowUpRight className="h-4 w-4" />
                                      <span className="sr-only">
                                        View Live Project
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link
                                    href={project.githubUrl}
                                    target="_blank"
                                  >
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <Github className="h-4 w-4" />
                                      <span className="sr-only">
                                        View GitHub Repository
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View GitHub Repository</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative h-64 md:h-96 bg-white/5 rounded-2xl overflow-hidden border border-lightSky/20">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={project.id === "01"}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center md:justify-end gap-4 mt-6">
            <CarouselPrevious className="static translate-y-0 rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />

            <CarouselNext className="static translate-y-0 rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          </div>
        </Carousel>
      </Container>
    </motion.section>
  );
}