import TechStack from "./tech-stack";
import Tools from "./tools";
import { motion } from "framer-motion";
import { fadeVariant } from "../../utils/motion/motion";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section
      id="technologies"
      className="pt-24 pb-16 bg-gray dark:bg-slate-800"
    >
      <div className="container">
        <motion.div
          ref={ref}
          variants={fadeVariant("up", "tween", 1, 0.2)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-full px-4"
        >
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h4 className="font-extrabold text-2xl text-dark sm:text-4xl text-center pb-5 dark:text-light">
              TECHNO<span className="text-primary">LOGIES</span>
            </h4>
            <p className="pt-3 text-secondary dark:text-light">
              I have experience with a number of technologies, I have applied my
              knowledge and skills in projects involving user interface
              development, server creation and implementing responsive design.
            </p>
          </div>
        </motion.div>
        <TechStack />
        <Tools />
      </div>
    </section>
  );
};

export default Index;
