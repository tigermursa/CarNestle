"use client";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

function TopButton(props) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //   clean listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className=" flex justify-end me-3 mb-10 ">
      <Link
        to="home"
        smooth={true}
        className={` ${
          !isActive && "hidden"
        }fixed bg-accent hover:bg-accent-hover rounded-full w-12 h-12 right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white`}
      >
        <FaChevronUp className=" " />
      </Link>
    </div>
  );
}

export default TopButton;
