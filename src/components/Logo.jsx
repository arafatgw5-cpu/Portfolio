import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = ({ className, title, subtitle }) => {
  return (
    <div className="group">
      <Link href="/" className="inline-block">
        <h2
          className={cn(
            "text-2xl md:text-3xl font-extrabold tracking-wide text-white hover:text-hoverColor transition-all duration-300",
            className
          )}
        >
          {title}

          <span className="text-lightSky group-hover:text-white transition-all duration-300">
            {subtitle}
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;