//import images
import tavt1 from "/public/t-avt-1.png";
import tavt2 from "/public/t-avt-2.png";
import tavt3 from "/public/t-avt-3.png";
//next images
import Image from "next/image";

// testimonial data
const testimonialData = [
  {
    image: tavt3,
    name: "Gajraj Singh Sekhwat",
    position: "Full Stack Senior Developer",
    company: "at Competishun ,Jaipur",
    message:
      "You consistently demonstrate a deep understanding of full-stack development principles and exhibit proficiency in various programming languages, frameworks, and tools.",
  },
  {
    image: tavt1,
    name: "Govind Jii",
    position: "Reactjs developer intern",
    company: "at Competishun ,Jaipur",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: tavt3,
    name: "Anshu Kumar",
    position: "React native developer intern",
    company: "at Competishun ,Jaipur",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

//import swiper react components
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//icons
import { FaQuoteLeft } from "react-icons/fa";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[480px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* {avatar,name ,position} */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* {avatar} */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* {name} */}
                  <div className="text-lg">{person.name}</div>
                  {/* {position} */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.company}
                  </div>
                </div>
              </div>
              {/* {quote & meassge } */}
              <div
                className="pt-10 lg:pt-0 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20
               xl:before:absolute xl:before:left-0 xl:before:h-[200px]
                relative xl:pl-20 sm:pb-0 sm:mb-0"
              >
                {/* {quote icon} */}
                {/* <div className="mb-4"> */}
                {/* <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" /> */}
                {/* </div> */}
                {/* {message} */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
