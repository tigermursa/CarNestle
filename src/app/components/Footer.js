import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto">
        {/* grid */}
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
