"use-client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";
import Image from "next/image";
import Swal from "sweetalert2";

// Car Data TODO:Will replace with mongoose data
const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    location: "BANASREE BLOCK A,DHAKA",
    price: 29,
    stars: 3.5,
    image: "images/carSlider/car01.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: " 5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    location: "BANASREE BLOCK B,DHAKA",
    price: 25,
    stars: 5,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: " 5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    location: "BANASREE BLOCK C,DHAKA",
    price: 35,
    stars: 4.7,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: " 5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    location: "BANASREE BLOCK D,DHAKA",
    price: 32,
    stars: 4.3,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: " 5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
];

const handleSeeDetailsClick = () => {
  Swal.fire({
    title: "Under Development",
    text: "This feature will be available soon!",
    icon: "info",
    confirmButtonText: "OK",
  });
};

const CarSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className=" container mx-auto cursor-pointer"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0">
                <Image
                  src={car.image}
                  width={380}
                  height={284}
                  alt="slider images"
                />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <div
                      className="mb-10 text-accent font-semibold uppercase
                    "
                    >
                      {car.price}/day
                    </div>
                  </div>
                  {/* starts */}
                  <dir className="flex gap-x-2 text-accent h-max ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </dir>
                </div>
                {/* car info */}
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center mb-2 ">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px]">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button
                  className="btn btn-accent btn-lg"
                  onClick={handleSeeDetailsClick}
                >
                  See Details
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
