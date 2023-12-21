import { svgImageAbout } from "../../data";
import { PhoneNumber, Latitude, Longitude } from "../../utils/config";

const PersonelInfo = () => {
  const phone = PhoneNumber;
  const message = encodeURIComponent(`Hello, I am interested in your CV.`);
  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  const handleOpenGoogleMaps = () => {
    const latitude = Latitude;
    const longitude = Longitude;

    const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(mapsLink, "_blank");
  };

  return (
    <>
      <h3 className="font-bold text-dark text-2xl mb-4 lg:text-3xl pt-6 dark:text-light">
        Full Stack Developer
      </h3>
      <div className="border-[3px] w-20 border-primary rounded-full"></div>
      <p className=" text-base text-secondary text-justify mb-6 lg:text-md pt-4 dark:text-light">
        Hello, my name is Nurul Khairina Surbakti. I graduated in Information
        Engineering and currently work in an Bisnis Indonesia Group as a Full
        Stack Developer. I have built, developed several projects with a team
        and am interested in developing my career in a company using my existing
        programming skills to develop web applications and being able to grow
        and learn from other experienced team members
      </p>
      <div className="grid sm:grid-cols-2 gap-5">
        {/* calender */}
        {svgImageAbout.map((item) => (
          <div className="flex items-center" key={item.id}>
            {item.name === "Google Home" ? (
              <a
                onClick={handleOpenGoogleMaps}
                rel="noreferrer"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 bg-dark text-white hover:bg-primary dark:bg-dark dark:hover:bg-primary"
              >
                <svg
                  className="fill-current cursor-pointer"
                  role="img"
                  width={18}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>{item.name}</title>
                  <path d={item.svg} />
                </svg>
              </a>
            ) : (
              <a
                href={item.name === "WhatsApp" ? whatsappLink : ""}
                target={item.name === "WhatsApp" ? "_blank" : ""}
                rel="noreferrer"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 bg-dark text-white hover:bg-primary dark:bg-dark dark:hover:bg-primary"
              >
                <svg
                  className={`fill-current ${
                    item.name === "WhatsApp" && "cursor-pointer"
                  }`}
                  role="img"
                  width={18}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>{item.name}</title>
                  <path d={item.svg} />
                </svg>
              </a>
            )}

            <p className="text-secondary dark:text-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PersonelInfo;
