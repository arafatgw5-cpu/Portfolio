import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { Mail, MapPinCheck, Phone } from "lucide-react";
import React from "react";

const infoData = [
  {
    title: "Phone",
    description: "+8801XXXXXXXXX",
    icon: <Phone className="w-5 h-5 text-lightSky" />,
  },
  {
    title: "Email",
    description: "easinarafat.dev@gmail.com",
    icon: <Mail className="w-5 h-5 text-lightSky" />,
  },
  {
    title: "Address",
    description: "Kaliganj, Dhaka, Bangladesh",
    icon: <MapPinCheck className="w-5 h-5 text-lightSky" />,
  },
];

const ContactPage = () => {
  return (
    <Container className="py-8 md:py-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-14">
        
        {/* Contact Form */}
        <div className="w-full md:w-2/3">
          <div className="mb-6">
            <p className="text-lightSky uppercase tracking-[4px] text-sm">
              Contact Me
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              Let’s Work Together 🚀
            </h2>

            <p className="text-white/60 mt-4 leading-7">
              I’m Easin Arafat, a passionate Frontend & Next.js Developer from
              Bangladesh. Feel free to contact me for freelance projects,
              collaborations, or any creative ideas.
            </p>
          </div>

          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col justify-center gap-5 md:gap-8">
          {infoData?.map((item) => (
            <div
              key={item?.title}
              className="flex items-center gap-4 border border-white/10 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 duration-300"
            >
              <span className="bg-lightSky/10 p-4 rounded-xl">
                {item?.icon}
              </span>

              <div>
                <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wide">
                  {item?.title}
                </h3>

                <p className="text-base md:text-lg font-medium">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;