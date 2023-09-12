"use client";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import Image from "next/image";

import { MdHandshake, Mdkey, MdTrendingUp } from "react-icons/md";

const WhyUs = () => {
  return (
    <section className="section flex items-center " id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Our dedication to providing exceptional services sets us apart from
          the competition. From the moment you engage with us , we strive to
          exceed your expectations in every interaction
        </motion.p>
        {/* car image */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2 "
        >
          <Image src={"/images/why/car.svg"} width={1060} height={420} alt="" />
        </motion.div>
        {/* grid items here */}
        <div>
          {/* item 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0 ">
            <Mdkey className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Rent simply and quickly</h3>
            <p className=" hidden xl:flex ">
              {" "}
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding
            </p>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0 ">
            <MdTrendingUp className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Modern & well maintained vehicles</h3>
            <p className=" hidden xl:flex ">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding
            </p>
          </div>
          {/* item 3 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0 ">
            <MdHandshake className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Prompt and flexible services</h3>
            <p className=" hidden xl:flex ">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
