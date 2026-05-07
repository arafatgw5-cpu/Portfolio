import { cn } from "@/lib/utils";

const Title = ({ children, className }) => {
  return (
    <div className="mb-8">
      <p className="text-lightSky uppercase tracking-[4px] text-sm mb-2">
        Portfolio Section
      </p>

      <h2
        className={cn(
          "text-3xl md:text-5xl font-bold text-white leading-tight",
          className
        )}
      >
        {children}
      </h2>

      <div className="w-20 h-[3px] bg-lightSky rounded-full mt-4" />
    </div>
  );
};

export default Title;