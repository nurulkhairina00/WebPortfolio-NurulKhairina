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
          slidesPerView: 3,
        },
      }}
      autoplay={{ delay: 4000 }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="bg-gray shadow-lg rounded-md px-2 pt-2 pb-10 md:px-4 md:pt-4 md:pb-12">
            <img
              src={item.image}
              alt={item.name}
              className="w-full object-cover mb-4 rounded-md"
            />
            <h3 className="text-sm font-bold mb-2 md:text-lg">{item.judul}</h3>
            <div className="flex flex-wrap gap-2">
              {item.badges.map((badge, index) => (
                <img
                  key={index}
                  src={badge}
                  alt={`badge ${index}`}
                  className="rounded-lg w-1/6 h-5"
                />
              ))}
              {item.name === "projek5" && (
                <div className="flex items-center text-[10px] rounded-lg py-[2px] px-2 font-semibold bg-[#ee4323] text-light">
                  Codeigniter
                </div>
              )}
            </div>
            <button
              type="button"
              className="absolute bottom-2 right-4 text-sm text-primary cursor-pointer font-semibold"
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
