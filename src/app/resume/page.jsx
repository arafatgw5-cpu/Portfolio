"use client";

import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];

const tabContent = {
  experience: {
    title: "My Experience",
    items: [
      {
        role: "Frontend Developer",
        company: "Personal & Academic Projects",
        period: "2024 - Present",
        description:
          "Building modern and responsive web applications using React, Next.js, Tailwind CSS, and Better Auth. I have worked on projects like SkillSphere Online Learning Platform, Dragon News, and portfolio websites.",
        highlights: ["React", "Next.js", "Tailwind CSS", "Better Auth"],
      },
      {
        role: "Full Stack Learner",
        company: "Programming Hero / Self Learning",
        period: "2023 - Present",
        description:
          "Learning full stack web development with hands-on projects, authentication, API integration, MongoDB database, dynamic routing, deployment, and clean UI design.",
        highlights: ["MongoDB", "Node.js", "Express.js", "Vercel"],
      },
    ],
  },

  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Web Development Learning Journey",
        institution: "Programming Hero Batch 13",
        period: "2024 - Present",
        description:
          "Learning frontend and full stack development with real-world assignments, projects, authentication systems, responsive design, and deployment.",
        achievements: ["Assignment Projects", "React", "Next.js", "MongoDB"],
      },
      {
        degree: "Academic Study",
        institution: "Bangladesh",
        period: "Present",
        description:
          "Continuing academic study while improving programming, English literature presentation, and web development skills.",
        achievements: ["Presentation", "Team Work", "Self Learning"],
      },
    ],
  },

  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "I create clean, responsive, and modern user interfaces using React, Next.js, Tailwind CSS, DaisyUI, shadcn/ui, and animation libraries.",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "DaisyUI",
          "shadcn/ui",
          "Framer Motion",
        ],
      },
      {
        name: "Backend & Authentication",
        description:
          "I am learning backend and authentication systems using Node.js, Express.js, MongoDB, Better Auth, email-password login, and social login.",
        skills: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Better Auth",
          "Google Auth",
          "GitHub Auth",
        ],
      },
      {
        name: "Tools & Deployment",
        description:
          "I use modern development tools to build, manage, and deploy web applications smoothly.",
        skills: [
          "Git",
          "GitHub",
          "VS Code",
          "Vercel",
          "Render",
          "npm",
          "Postman",
        ],
      },
    ],
  },

  about: {
    title: "About Me",
    bio: "I am Easin Arafat, an aspiring Frontend / Full Stack Web Developer from Bangladesh. I love building clean, responsive, and user-friendly websites using React, Next.js, Tailwind CSS, and modern web technologies. I am focused on improving my skills through real-world projects and continuous learning.",
    interests: [
      "Web Development",
      "Frontend Design",
      "Next.js Projects",
      "Clean UI Design",
      "Problem Solving",
    ],
    languages: ["Bangla", "English"],
  },
};

export default function ResumePage() {
  return (
    <section className="flex flex-col justify-center text-white py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <Tabs
            defaultValue="experience"
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4 overflow-x-auto md:overflow-visible">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 md:w-[70%] md:gap-3">
                    <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                    {item.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex-1 min-h-[400px]">
              <TabsContent value="experience">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.experience.title}
                </motion.h2>

                <div className="space-y-6">
                  {tabContent.experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-5 md:p-6 bg-white/5"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{item.role}</h3>
                          <p className="text-white/60">{item.company}</p>
                        </div>

                        <div className="flex items-center text-white/60 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>

                      <p className="mb-4 text-white/80 leading-7">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.education.title}
                </motion.h2>

                <div className="space-y-6">
                  {tabContent.education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-5 md:p-6 bg-white/5"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.degree}
                          </h3>
                          <p className="text-white/60">{item.institution}</p>
                        </div>

                        <div className="flex items-center text-white/60 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>

                      <p className="mb-4 text-white/80 leading-7">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.skills.title}
                </motion.h2>

                <div className="space-y-6">
                  {tabContent.skills.categories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-5 md:p-6 bg-white/5"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {category.name}
                      </h3>

                      <p className="text-sm text-white/60 mb-4 font-normal leading-7">
                        {category.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-5 md:p-6 bg-white/5"
                >
                  <p className="mb-6 text-base md:text-lg text-white/80 leading-8">
                    {tabContent.about.bio}
                  </p>

                  <div className="space-y-5">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}