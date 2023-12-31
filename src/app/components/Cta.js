"use client";

import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import Image from "next/image";

const Cta = () => {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 overflow-hidden "
      id="contact"
    >
      <container className="mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* text here */}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Get on the road <br /> hassle-free grab our app today!
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10"
              >
                CarNastle is your one-stop solution for hassle-free car rentals.
                Whether your planning a road trip, need a car for daily
                commuting, or want to explore a new city, CarNastle has got you
                covered. With a wide range of cars to choose from and convenient
                booking options, we make renting a car easy and convenient.
              </motion.p>
              {/* button */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start "
              >
                <button className="btn-cta">
                  <Image
                    src={"/icons/buttons/google-play.svg"}
                    width={132}
                    height={36}
                    alt=""
                  />
                </button>
                <button className="btn-cta">
                  <Image
                    src={"/icons/buttons/app-store.svg"}
                    width={132}
                    height={36}
                    alt=""
                  />
                </button>
              </motion.div>
            </div>
          </div>
          {/* images */}
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <Image
              src={"/images/cta/phone.jpg"}
              width={320}
              height={640}
              alt=""
              className="rounded-3xl"
            />
          </motion.div>
        </div>
      </container>
    </section>
  );
};

export default Cta;
