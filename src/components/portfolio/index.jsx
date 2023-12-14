import { useState } from "react";
import PortfolioSwiper from "./swiper";
import PortfolioModal from "./modal";
import { motion } from "framer-motion";
import { fadeVariant } from "../../utils/motion/motion";
import { useInView } from "react-intersection-observer";
import { dataPortfolio } from "../../assets/data";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [read, setRead] = useState({});

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section
        id="portofolio"
        className="pt-24 pb-16 bg-light dark:bg-slate-800"
      >
        <motion.div
          ref={ref}
          variants={fadeVariant("up", "spring", 1.25, 0.2)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="container"
        >
          <div className="w-full px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h4 className="font-extrabold text-dark text-2xl sm:text-4xl text-center pb-5 dark:text-light">
                MY <span className="text-primary">PORTFOLIO</span>
              </h4>
              <p className="pt-3 text-secondary dark:text-light">
                a collection of projects created as a team or individually using
                some technology.
              </p>
            </div>
          </div>
          <PortfolioSwiper
            data={dataPortfolio}
            setShowModal={setShowModal}
            setRead={setRead}
          />
        </motion.div>
      </section>
      {showModal && (
        <PortfolioModal
          showModal={showModal}
          data={read}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default Index;
