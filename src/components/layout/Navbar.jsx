/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { menuLinks } from "../../data";

const Navbar = (props) => {
  const { darkMode, setDarkMode } = props;
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = (value) => {
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
      setActiveLink(value);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] text-secondary shadow-md ${
        sticky ? "shadow-md bg-white dark:bg-slate-800" : "md:shadow-none"
      } `}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-3xl font-extrabold dark:text-light text-dark">
            Khai<span className="text-primary">rina</span>
          </h4>
        </div>
        <div
          className={`${
            sticky
              ? "md:bg-white bg-white dark:bg-slate-800 dark:text-light"
              : "bg-primary text-gray"
          }  md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map((item) => (
              <>
                <li
                  key={item.id}
                  className={`px-4 ${
                    sticky ? "hover:text-primary" : "hover:text-secondary"
                  } cursor-pointer`}
                >
                  <span
                    onClick={() => handleScroll(item.link)}
                    className={
                      activeLink === item.link
                        ? `border-b-[3px] border-primary pb-1`
                        : ""
                    }
                  >
                    {item?.name}
                  </span>
                </li>
              </>
            ))}
            <div
              className={`p-2 rounded-full ${
                sticky
                  ? "bg-primary text-light dark:bg-primary "
                  : "bg-secondary dark:bg-secondary"
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BsMoonStarsFill /> : <BsSunFill />}
            </div>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-primary" : "text-light"
          } text-3xl md:hidden m-3 bg-primary p-1 rounded-[10px]`}
        >
          {open ? (
            <AiOutlineClose className="text-light dark:text-light" />
          ) : (
            <AiOutlineMenu className="dark:text-light" />
          )}
        </div>
        <div
          className={`md:hidden text-secondary absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          } dark:bg-slate-800`}
        >
          <ul className="flex flex-col items-center justify-center pt-20 gap-7 py-2 text-lg">
            {menuLinks.map((item) => (
              <li
                key={item.id}
                className={`px-4 cursor-pointer dark:text-light`}
              >
                <span onClick={() => handleScroll(item.link)}>{item.name}</span>
                {activeLink === item.link && (
                  <div className="bg-primary py-[2px] rounded-full mt-1"></div>
                )}
              </li>
            ))}
            <div
              className={`p-2 rounded-full ${
                sticky
                  ? "bg-secondary text-light dark:bg-primary "
                  : "bg-primary text-light dark:bg-primary"
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BsMoonStarsFill /> : <BsSunFill />}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
