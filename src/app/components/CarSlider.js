import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import CarModal from "./CarModal";
import useInterval from "../hooks/useInterval";
import Link from "next/link";
import allCars from "../allcars/page";

const CarSlider = () => {

  const [cars, setCars] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((fetchedCars) => {
        setCars(fetchedCars);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  // Initialize the autoplay interval with a delay of 3 seconds
  useInterval(() => {
    if (swiper) {
      swiper.slideNext();
    }
  }, 3000);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto cursor-pointer"
    >
      <Swiper
        spaceBetween={32}
        loop={true}
        onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
        breakpoints={{
          // When window width is >= 768px (PC)
          768: {
            slidesPerView: 3,
          },
          // When window width is < 768px (Phone)
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[385px] mx-auto sm:mx-0">
              <div className="relative h-48">
                <Image
                  src={car.image}
                  layout="fill"
                  objectFit="cover"
                  alt="Car Image"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-[13px] text-secondary uppercase">
                    {car.type}
                  </div>
                  <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                  <div className="mb-10 text-accent font-semibold uppercase">
                    {car.price}00 &#2547; /day
                  </div>
                </div>
                {/* stars */}
                <div className="flex gap-x-2 text-accent h-max">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              {/* car info */}
              <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                {car.info.map((item, index) => (
                  <div key={index}>
                    <div className="bg-primary w-12 h-12 rounded-full flex justify-center mb-2">
                      <Image src={item.icon} width={24} height={24} alt="" />
                    </div>
                    <div className="text-[12px]">{item.text}</div>
                  </div>
                ))}
              </div>

              <Link href={`/allcars/${car.id}`}>
                <button
                  className="btn btn-accent btn-lg"
                >
                  See Details
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
