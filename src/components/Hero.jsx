import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeVariant } from "../utils/motion/motion";
import { svgImageHero } from "../data";

const Hero = () => {
  const handleScroll = (value) => {
    const section = document.getElementById(value);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        className="pt-16 max-h-full dark:bg-slate-800 bg-light"
      >
        <div className="container">
          <motion.div
            variants={fadeVariant("down", "spring", 3, 0.3)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap"
          >
            <div className="w-full self-center px-4 lg:w-1/2 pt-20 lg:pt-0 text-center text-[20px] sm:text-[2em] text-dark sm:text-start dark:text-light">
              <h1 className="text-2xl font-bold text-primary pb-5">
                Hello There!,
              </h1>
              <TypeAnimation
                sequence={[
                  "I'M Nurul Khairina Surbakti",
                  1000,
                  "I'M Full Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  // fontSize: "22px",
                  display: "inline-block",
                  fontWeight: "800",
                }}
                repeat={Infinity}
              />
              <p className="font-medium text-secondary text-base my-5 dark:text-light">
                I am a Full Stack Developer with two years experience. My
                expertise is creating and designing websites, I can work
                individually or in a team.
              </p>
              <motion.div
                variants={fadeVariant("right", "spring", 1.5, 0.2)}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center gap-3 mt-10 sm:flex-row md:items-start"
              >
                <button
                  className="text-base font-semibold text-light bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                  onClick={() => handleScroll("contact")}
                >
                  Get in touch
                </button>
                <div className="flex gap-3 md:py-2">
                  {svgImageHero.map((item, index) => (
                    <a
                      href={item.link}
                      target="_blank"
                      className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-white bg-dark"
                      rel="noreferrer"
                      key={index}
                    >
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        width={index === 0 ? 25 : 20}
                        height={index === 0 ? 25 : 20}
                        viewBox={index === 0 ? "0 0 50 50" : "0 0 24 24"}
                      >
                        <path d={item.svg}></path>
                      </svg>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2 md:py-10">
              <div className="relative mt-10 lg:mt-0 lg:right-0 z-10">
                <img
                  src="./images/hero.svg"
                  alt="hero"
                  className="max-w-full mx-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
