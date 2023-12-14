import PersonelInfo from "./personel-info";
import WorkExperience from "./work-experience";

const Index = () => {
  const handleScroll = (value) => {
    const section = document.getElementById(value);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="about" className="pt-24 pb-16 bg-gray dark:bg-slate-800">
        <div className="container">
          <h4 className="font-extrabold text-dark text-2xl sm:text-4xl text-center pb-5 dark:text-light">
            <span className="text-primary">ABOUT</span> ME
          </h4>
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-3 lg:w-1/2 hidden lg:block">
              <img src="/src/assets/images/rina.png" alt="profil" />
            </div>
            <div className="w-full px-4 lg:w-1/2 lg:pt-10 xl:pt-16">
              <PersonelInfo />
              <div className="flex flex-col items-center sm:flex-row sm:justify-start pt-10 gap-5">
                <a
                  href="document/CV Nurul Khairina Surbakti.pdf"
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
            </div>
            <div className="w-full px-4 mb-3 lg:w-1/2 lg:hidden">
              <img src="/src/assets/images/rina.png" alt="profil" />
            </div>
          </div>
          <div className="py-5 md:py-10">
            <h4 className="font-extrabold text-dark text-2xl sm:text-4xl text-center pb-5 dark:text-light">
              <span className="text-primary">MY WORK</span> EXPERIENCE
            </h4>
          </div>
          <WorkExperience />
        </div>
      </section>
    </>
  );
};

export default Index;
