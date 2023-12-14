/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Autoplay,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";

const PortfolioSwiper = (props) => {
  const { data, setShowModal, setRead } = props;

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      spaceBetween={30}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="mySwiper"
      slidesPerView={1}
      breakpoints={{
        1023: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
      autoplay={{ delay: 2000 }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="bg-gray shadow-lg rounded-md px-2 pt-2 pb-10 md:px-4 md:pt-4 md:pb-12">
            <img
              src={item.image}
              alt="projek1"
              className="w-full object-cover mb-4 rounded-md"
            />
            <h3 className="text-sm font-bold mb-2 md:text-lg">{item.judul}</h3>
            <div className="flex flex-wrap gap-2">
              <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#ea5500] text-light">
                HTML
              </div>
              <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#039be5] text-light">
                CSS
              </div>
              <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#ffd600] text-secondary">
                Javascript
              </div>
              <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#7c4dff] text-light">
                Bootstrap
              </div>
              {item.name === "projek1" && (
                <>
                  <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#61dafb] text-secondary">
                    ReactJS
                  </div>
                  <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#848c94] text-light">
                    Restful Api
                  </div>
                  <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#f4511e] text-light">
                    Github
                  </div>
                </>
              )}
              {(item.name === "projek2" || item.name === "projek3") && (
                <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#dcd5f2] text-secondary">
                  PHP
                </div>
              )}
              {item.name === "projek3" && (
                <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#ee4323] text-light">
                  Codeigniter
                </div>
              )}
              {item.name === "projek4" && (
                <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#086697] text-light">
                  ASP.NET
                </div>
              )}
              {item.name !== "projek1" && (
                <div className="flex text-xs rounded-full py-[2px] px-3 border border-light bg-[#037276] text-light">
                  MySQL
                </div>
              )}
            </div>
            <button
              type="button"
              className="absolute bottom-2 right-4 text-sm text-primary cursor-pointer"
              onClick={() => {
                setShowModal(true);
                setRead(item);
              }}
            >
              Read more
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioSwiper;
