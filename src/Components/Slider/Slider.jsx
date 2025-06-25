import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const img = {img:
//   img: ,
//   img:}

const Slider = () => {
  const slides = [
    {
      image:
        "https://wpblog.com/wp-content/uploads/2022/12/tools-for-freelancers.png",
      text: "Welcome to My Website",
    },
    {
      image:
        "https://www.flexjobs.com/blog/wp-content/uploads/2020/07/05122806/Boost-income.png?w=1024",
      text: "Explore Our Features",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQFQjY8sFMCr5g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1685721724651?e=2147483647&v=beta&t=9V2vfbkHTLpYG1y_6_5B5fxg4XAcAWsMZRcT4vSkaYQ",
      text: "Get Started Today",
    },
  ];
  return (
    <div className="w-full h-[400px] relative overflow-hidden z-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col gap-4">
                <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                  {slide.text}
                </h2>
                <p className="text-base-300 text-xl md:text-2xl f text-center px-4">
                  You can post your task and update your tasks. You can also see
                  how many bids count.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
