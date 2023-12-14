import { motion } from "framer-motion";
import { zoomVariant } from "../utils/motion/motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-24 bg-light dark:bg-slate-800">
      <motion.div
        ref={ref}
        variants={zoomVariant("in", "spring", 1, 0.2)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="container lg:w-[80%] lg:pt-10"
      >
        <div className="w-full px-4 lg:hidden">
          <h4 className="font-extrabold text-secondary text-2xl sm:text-4xl text-center pb-16 dark:text-light">
            <span className="text-primary">CONTACT</span> ME
          </h4>
        </div>
        <div className="flex flex-wrap">
          <div className="flex w-full items-center px-4 lg:w-[60%]">
            <img src="/src/assets/images/contact.svg" alt="contact" />
          </div>
          <div className="w-full p-4 lg:w-[40%] bg-secondary rounded-3xl dark:bg-light">
            <h4 className="font-extrabold text-gray text-3xl xl:text-4xl text-center py-9 dark:text-secondary hidden lg:block">
              <span className="text-primary">CONTACT</span> ME
            </h4>
            <form>
              <div className="w-full px-4 mb-4 mt-4 lg:mt-0">
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  className="w-full bg-gray text-secondary p-2 mt-1 rounded-xl shadow-md focus:outline-none focus:ring-light focus:ring-1 focus:border-lig dark:focus:ring-2"
                ></input>
              </div>
              <div className="w-full px-4 mb-4">
                <input
                  placeholder="E-mail"
                  type="email"
                  id="email"
                  className="w-full bg-gray text-secondary p-2 mt-1 rounded-xl shadow-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary dark:focus:ring-2"
                ></input>
              </div>
              <div className="w-full px-4 mb-8">
                <textarea
                  placeholder="Message"
                  type="textarea"
                  id="message"
                  className="w-full bg-gray text-secondary p-2 mt-1 rounded-xl shadow-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32 dark:focus:ring-2"
                />
              </div>
              <div className="w-full px-4 text-center">
                <button className="text-base font-semibold text-light bg-primary py-3 px-6 rounded-full w-full md:w-40 hover:opacity-80 hover:shadow-lg transition duration-500 ">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
