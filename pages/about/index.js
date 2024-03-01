import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaNode,
  FaDatabase,
  FaPhp,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// abput data
const aboutData = [
  {
    title: "frameWorks",
    info: [
      {
        title: "Frontend Development",
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaFigma key={4} />,
          <FaReact key={5} />,
          <SiNextdotjs key={6} />,
          <SiFramer key={7} />,
        ],
      },
      {
        title: "Backend Development",
        icons: [<FaNode key={1} />, <FaDatabase key={2} />],
      },
    ],
  },
  {
    title: "Languages",
    info: [
      {
        title: "Competitive Programing",
        icons: [
          <FaPython key={1} />,
          <FaJava key={2} />,
          <FaJs key={3} />,
          "C",
          "C++",
        ],
      },
      {
        title: "other Languages",
        icons: [
          <FaPhp key={1} />,
          <SiNextdotjs key={2} />,
          <FaWordpress key={3} />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Intern - Competishun , jaipur",
        stage: "React js developer",
      },
      {
        title: "Intern - sparkup classes , UP ",
        stage: "Frontend Developer",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Full stack development - Certified by Udemy ",
        stage: "Aug , 2023",
      },
      {
        title: " Machine Learning: AI,Python - Certified by Udemy ",
        stage: "2024",
      },
    ],
  },
];

//componets
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//couter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* {avatar img} */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]    "
      >
        <Avatar />
      </motion.div>
      <div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row
       gap-x-6"
      >
        {/* {text} */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Unleashing <span className="text-accent">imagination</span> through
            words power
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <span className="text-accent font-bold">Abhishek</span> , a
            third-year B.Tech student at NIT Kurukshetra, is driven by a passion
            for exploring new technologies and excelling in cricket, with a
            solid educational foundation from APIC College, Gorakhpur.
          </motion.p>
          {/* {counters} */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* {experience} */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1,4] max-w-[100px]">
                  Years of Experinence
                </div>
              </div>
              Leetcode
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={350} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1,4] max-w-[100px]">
                  questions solved
                </div>
              </div>
              finished projects
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={11} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1,4] max-w-[100px]">
                  project finished
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* {info} */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[480px]"
        >
          <span className="font-bold text-xl lg:text-3xl lg:mb-5">
            Technical Skills
          </span>
          <div
            className="overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "transparent transparent", // change the color to match your background
            }}
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:transition-all after:duration-300"
                    }
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                   after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    {/* {title} */}
                    <div>{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {/* {icons} */}
                      {item.icons?.map((icon, itemindex) => {
                        return (
                          <div key={itemindex} className="text-2xl">
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
