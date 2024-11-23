import { RiArrowUpSLine } from "react-icons/ri";
import { svgImageHero } from "../../data";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-dark dark:bg-primary md:bg-light dark:md:bg-slate-800">
        <div className="container-fluid md:bg-dark dark:md:bg-primary p-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 ps-5 py-2 dark:border-dark justify-start hidden md:block">
              <p className="font-medium text-xs text-white">
                Copyright © 2023 By{" "}
                <a
                  href="/"
                  className="font-bold text-primary dark:text-secondary"
                >
                  Nurul Khairina
                </a>
              </p>
            </div>
            <div className="w-full md:w-1/2 py-2 pe-0 md:pe-16 ">
              <div className="flex gap-3 justify-center md:justify-end">
                {svgImageHero.map((item, index) => (
                  <a
                    href={item.link}
                    key={index}
                    target="_blank"
                    className="w-9 h-9 rounded-full flex justify-center items-center border-none text-secondary hover:bg-secondary hover:text-light bg-light dark:bg-secondary dark:text-light dark:border-none dark:hover:bg-light dark:hover:text-primary"
                    rel="noreferrer"
                  >
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      width={index === 0 ? 20 : 16}
                      height={index === 0 ? 20 : 16}
                      viewBox={index === 0 ? "0 0 50 50" : "0 0 24 24"}
                    >
                      <path d={item.svg}></path>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 py-2 dark:border-dark flex justify-center md:hidden">
              <p className="font-medium text-xs text-white">
                Copyright © 2023 By{" "}
                <a
                  href="/"
                  className="font-bold text-primary dark:text-secondary"
                >
                  Nurul Khairina
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="flex fixed z-[9999] bottom-4 right-4 p-4 h-12 w-12 bg-primary rounded-full items-center justify-center hover:animate-pulse cursor-pointer dark:bg-light"
        onClick={handleBackToTop}
      >
        <RiArrowUpSLine className="text-3xl text-white absolute dark:text-primary" />
      </div>
    </>
  );
};

export default Footer;
