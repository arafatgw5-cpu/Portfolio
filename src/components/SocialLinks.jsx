import Link from "next/link";
import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const socialData = [
  {
    title: "YouTube",
    icon: <FaYoutube size={20} />,
    link: "https://www.youtube.com",
  },
  {
    title: "GitHub",
    icon: <FaGithub size={20} />,
    link: "https://github.com/arafatgw5-cpu",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    link: "https://www.linkedin.com",
  },
  {
    title: "Facebook",
    icon: <FaFacebookF size={20} />,
    link: "https://www.facebook.com",
  },
  {
    title: "Instagram",
    icon: <FaInstagram size={20} />,
    link: "https://www.instagram.com",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socialData.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.title}
          className="text-lightSky/80 border border-lightSky/30 p-3 rounded-full hover:bg-lightSky hover:border-lightSky hover:text-black hover:scale-110 transition-all duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;