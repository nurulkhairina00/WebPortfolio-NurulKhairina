import PersonelInfo from "./personel-info";
import WorkExperience from "./work-experience";
import { motion } from "framer-motion";
import { fadeVariant } from "../../utils/motion/motion";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleScroll = (value) => {
    const section = document.getElementById(value);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="about" className="pt-24 pb-16 bg-gray dark:bg-slate-800">
        <div className="container">
          <motion.h4
            ref={ref}
            variants={fadeVariant("up", "spring", 1.25, 0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="font-extrabold text-dark text-2xl sm:text-4xl text-center pb-5 dark:text-light"
          >
            <span className="text-primary">ABOUT</span> ME
          </motion.h4>
          <div className="flex flex-wrap">
            <motion.div
              ref={ref}
              variants={fadeVariant("up", "spring", 1.25, 0.2)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="w-full px-4 mb-3 lg:w-1/2 hidden lg:block"
            >
              <img
                src="/images/rina.png"
                alt="profil"
                className="cursor-pointer hover:scale-105 hover:ease-in-out"
              />
            </motion.div>
            <motion.div
              ref={ref}
              variants={fadeVariant("up", "spring", 1.25, 0.2)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="w-full px-4 lg:w-1/2 lg:pt-10 xl:pt-16"
            >
              <PersonelInfo />
              <div className="flex flex-col items-center sm:flex-row sm:justify-start pt-10 gap-5">
                <a
                  href="./src/assets/document/CV Nurul Khairina Surbakti.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-semibold text-secondary border-2 border-secondary py-3 px-8 rounded-full hover:bg-primary hover:text-light hover:border-primary hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out dark:bg-gray dark:hover:text-primary"
                >
                  Download CV
                </a>
                <button
                  className="text-base font-semibold text-light bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                  onClick={() => handleScroll("contact")}
                >
                  Get in touch
                </button>
              </div>
            </motion.div>
            <div className="w-full px-4 mb-3 lg:w-1/2 lg:hidden">
              <img
                src="./images/rina.png"
                alt="profil"
                className="cursor-pointer hover:scale-105 hover:ease-in-out"
              />
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h4 className="text-start font-extrabold text-2xl sm:text-3xl text-dark pb-2 dark:text-light">
              My Work Experience
            </h4>
            <div className="border-[3px] w-20 border-primary rounded-full"></div>
          </div>
          <WorkExperience />
        </div>
      </section>
    </>
  );
};

export default Index;
