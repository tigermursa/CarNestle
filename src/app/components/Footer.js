"use client";

import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";
import { FaEnvelope, FaPhone, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { Link } from "react-scroll";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className=" pt-20 bg-white z-20 id='contact">
      <div className="container mx-auto">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className=" flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link className="cursor-pointer">
              <Image
                to={"home"}
                src={"/icons/logo.svg"}
                width={200}
                height={200}
                alt=""
              />
            </Link>
            {/* text */}
            <div className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            </div>
            {/* phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold ">
              <div className="flex items-center gap-x[10px]">
                <FaPhone />
                <div className="font-medium">(+88) 0189654563</div>
              </div>
              <div className="flex items-center gap-x[10px]">
                <FaEnvelope />
                <div className="font-medium">theinfo@hotmail.com</div>
              </div>
            </div>
          </div>
          <div>
            {/* links */}

            <div className="flex-1 flex flex-col xl:items-center">
              <h3 className="h3 font-bold mb-8">Company</h3>

              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">Dhaka Gulshan</a>
                </li>
                <li>
                  <a href="">Carreers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4 ">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri:</div>
                <div className="font-semibold">9:00AM -9:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="font-semibold">9:00AM -9:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          <div>
            {/* newslatter */}
            <div className="flex-1">
              <h3 className="h3 font-bold mb-8">Newsletter</h3>

              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              </div>
              {/* form */}

              <form className="flex gap-x-2 h-14">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
                />
                <button type="submit" className="btn btn-sm btn-accent w-24">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
