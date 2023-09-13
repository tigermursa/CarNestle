"use client";
import React from "react";
import { Link } from "react-scroll";

function TopButton(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <Link className="fxied bg-accent hover:bg-accent-hover w-12 h-12 right-16 bottom-11 z-10"></Link>
  );
}

export default TopButton;
