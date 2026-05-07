import { Check } from "lucide-react";
import { motion } from "framer-motion";

const SuccessMsg = ({ status }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center gap-4 py-8 text-center"
    >
      
      {/* Success Icon */}
      <div className="border-2 border-lightSky bg-lightSky/10 w-24 h-24 rounded-full flex items-center justify-center text-lightSky shadow-[0_0_30px_rgba(0,255,153,0.2)]">
        <Check className="w-12 h-12" />
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl leading-none font-extrabold text-transparent text-outline">
        Thank You!
      </h2>

      {/* Message */}
      <p className="text-white/70 text-sm md:text-base leading-7 max-w-md">
        {status}
      </p>

      {/* Extra Text */}
      <p className="text-lightSky text-sm">
        Your message has been received successfully 🚀
      </p>
    </motion.div>
  );
};

export default SuccessMsg;