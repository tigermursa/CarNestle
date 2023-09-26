"use client";

// all md icons
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import Image from "next/image";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });
  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={"/images/about/kat-sazonova-KlOw94HiuGc-unsplash.jpg"}
              width={600}
              height={448}
              alt=""
            />
          </motion.div>
          {/* text */}
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Car services simplified
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-[42px] max-w-md"
              >
                Rent . choose. and repair with ease . Our convenient Locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience
              </motion.p>
              {/* stats */}
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                <div className=" flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className=" flex text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={5} delay={1} />
                    ) : null}{" "}
                    +
                  </div>
                  <div className=" uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>
                {/* rental */}
                <div className=" flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={139} duration={5} delay={1} />
                    ) : null}{" "}
                  </div>
                  <div className=" uppercase text-[13px] font-semibold text-secondary">
                    rental <br /> outlets
                  </div>
                </div>
                {/* repair*/}
                <div className=" flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={40} duration={5} delay={1} />
                    ) : null}{" "}
                  </div>
                  <div className=" uppercase text-[13px] font-semibold text-secondary">
                    repair
                    <br /> points
                  </div>
                </div>
              </motion.div>
              {/* btn */}

  


              <Link to="cars"    smooth={desktopMode} >
                <motion.button
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking[2px] text-[13px] max-w-[184px]"
                >
                  See All Cars
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
