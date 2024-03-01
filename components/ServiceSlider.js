// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Web design & development",
    description:
      "Crafting custom web solutions using React.js, Next.js, and Node.js for engaging and immersive digital experiences.",
  },
  {
    icon: <RxCrop />,
    title: "Data Analytics",
    description:
      "Applying machine learning algorithms for valuable insights, enhanced decision-making, and driving business growth effectively.",
  },
  {
    icon: <RxDesktop />,
    title: "Efficient Data Management",
    description:
      "Optimizing database solutions for seamless data management. From relational databases to MongoDB, ensuring efficiency.",
  },
  {
    icon: <RxReader />,
    title: "Web Animation & UI/UX Design",
    description:
      "Elevating user experiences with captivating animations.Using HTML, CSS, Canvas to create visually interactions.",
  },
  {
    icon: <RxRocket />,
    title: "SQL & NoSQL Management",
    description:
      "Designing, querying, optimizing SQL/NoSQL databases for efficient storage, retrieval, and performance enhancement.",
  },
];

//import swiper react components
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg 
              px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              {/* {icon} */}
              <div>{item.icon}</div>
              {/* {title & desciption} */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* {arrow} */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
