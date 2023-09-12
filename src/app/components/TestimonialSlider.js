"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, pagination } from "swiper/modules";
import "swiper/css/pagination";

import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// data
const testimonialData = [
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
    avatar: "/images/testimonial.avatar.png",
    name: "jane Doe",
    job: "Photographer & Videographer ",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
    avatar: "/images/testimonial.avatar.png",
    name: "jane Doe",
    job: "Photographer & Videographer ",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
    avatar: "/images/testimonial.avatar.png",
    name: "jane Doe",
    job: "Photographer & Videographer ",
  },
];
const TestimonialSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avater, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className=" flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <Image
                  src={avater}
                  width={64}
                  height={64}
                  alt=""
                  className="mb-4"
                />
                <div className=" text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
