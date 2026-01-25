import { easeIn, motion } from "motion/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";


const Button = () => {
    const [isHover, setIsHover] = useState(false)
  return (
    <button
      className="flex items-center bg-white px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full overflow-clip cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div
        animate={{
          scale: isHover ? 60 : 1,
          backgroundColor: isHover && "#000000",
        }}
        transition={{ ease: easeIn, duration: 0.3 }}
        className="h-2 w-2 rounded-full bg-black"
      ></motion.div>
      <motion.p
        animate={{
            x: isHover ? -8 : 8,
            color: isHover ? "#FFFFFF" : "#000000"
        }}
      className="text-black text-xs sm:text-sm z-10">Admin Dashboard</motion.p>
      <motion.div
        animate={{
            x: isHover ? 0 : 24
        }}
      className="text-white z-10"
      >
        <FaArrowRight />
      </motion.div>
    </button>
  );
}

export default Button
