/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeVariant } from "../../utils/motion/motion";
import { useInView } from "react-intersection-observer";
import { toolsLogo } from "../../data";

const Tools = () => {
  const [visibleItems, setVisibleItems] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setVisibleItems((prev) => Math.min(prev + 1, toolsLogo.length));
      }, 200);
      return () => clearInterval(interval);
    }
  }, [inView, toolsLogo]);

  return (
    <>
      <div className="w-full px-4">
        <div className="w-full lg:w-5/6 mx-auto text-center py-10">
          <h4 className="text-start font-extrabold text-2xl sm:text-3xl text-dark md:pt-5 pb-2 dark:text-light">
            Tools
          </h4>
          <div className="border-[3px] w-20 border-primary rounded-full"></div>
        </div>
      </div>
      <motion.div
        ref={ref}
        variants={fadeVariant("left", "spring", 1.25, 0.2)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-wrap w-full px-4 gap-4 justify-center sm:gap-6 lg:w-5/6 lg:mx-auto"
      >
        {toolsLogo.slice(0, visibleItems).map((item) => (
          <div
            className={`flex items-center justify-center w-[70px] h-[70px] sm:w-[110px] sm:h-[110px] p-2 bg-light rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:border-b-4 hover:border-r-4 hover:border-primary ease-in-out`}
            key={item.id}
          >
            <img
              src={item.link}
              alt={item.name}
              className="w-14 sm:w-20 mx-auto"
            />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Tools;
