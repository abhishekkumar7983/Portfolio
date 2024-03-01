//next images
import Image from "next/image";
import thumb1 from "/public/thumb1.png";
import thumb2 from "/public/thumb2.png";
import thumb3 from "/public/thumb3.png";
import thumb4 from "/public/thumb4.png";
import thumb5 from "/public/thumb5.png";
import thumb6 from "/public/thumb6.png";
import thumb7 from "/public/thumb7.png";
import thumb8 from "/public/thumb8.png";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title1",
          path: thumb3,
          link: "https://www.google.com",
        },
        {
          title: "title",
          path: thumb2,
          link: "https://www.google.com",
        },
        {
          title: "title",
          path: thumb4,
          link: "https://www.google.com",
        },
        {
          title: "title",
          path: thumb1,
          link: "https://www.google.com",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: thumb5,
          link: "https://www.google.com",
        },
        {
          title: "title",
          path: thumb6,
          link: "https://www.google.com",
        },
        {
          title: "title",
          path: thumb7,
          link: "https://www.google.com",
        },
        {
          title: "title",
          path: thumb8,
          link: "https://www.google.com",
        },
      ],
    },
  ],
};

//import swiper react components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//icons
import { BsArrowRight } from "react-icons/bs";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <a href={image.link} target="blank">
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* {images} */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=" "
                        />
                        {/* {overlay gradient} */}
                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent
                       via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                        ></div>
                        {/* {title} */}
                        <div
                          className="absolute bottom-0 translate-y-full
                       group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"
                        >
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem]">
                            {/* {title part1} */}
                            <div className="delay-100">LIVE</div>
                            {/* {title part 2} */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* {icon} */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
