import { RiArrowUpSLine } from "react-icons/ri";
import { linkSocialMedia, categories } from "../../assets/data";

const Footer = () => {
  const handleScroll = (value) => {
    const section = document.getElementById(value);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-dark pt-10 pb-8 dark:bg-primary md:bg-light md:pb-4 dark:md:bg-slate-800">
        <div className="container md:bg-dark dark:md:bg-primary md:rounded-3xl md:p-8">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-3xl text-white mb-5">
                Nurul Khairina Surbakti
              </h2>
              <h3 className="font-bold text-2xl mb-2">Contact</h3>
              <p>nurulkhairina00@gmail.com</p>
              <p>
                Jl. Karet Pasar Baru Barat II No.4 Tanah Abang, Jakarta Pusat
              </p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">
                Social Media
              </h3>
              <ul>
                {linkSocialMedia.map((item) => (
                  <li className="text-slate-300" key={item.id}>
                    <a
                      href={item.link}
                      target="_blank"
                      className="inline-block text-base hover:text-primary mb-3 dark:hover:text-secondary"
                      rel="noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">
                Category
              </h3>
              <ul>
                {categories.map((item) => (
                  <li className="text-slate-300" key={item.id}>
                    <span
                      className="inline-block text-base hover:text-primary mb-3 cursor-pointer dark:hover:text-secondary"
                      onClick={() => handleScroll(item.name.toLowerCase())}
                    >
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full pt-7 border-t border-primary dark:border-dark">
            <p className="font-medium text-xs text-white text-center">
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
      </footer>

      <div
        className="flex fixed z-[9999] bottom-4 right-4 p-4 h-12 w-12 bg-primary rounded-full items-center justify-center hover:animate-pulse cursor-pointer"
        onClick={handleBackToTop}
      >
        <RiArrowUpSLine className="text-3xl text-white absolute" />
      </div>
    </>
  );
};

export default Footer;
