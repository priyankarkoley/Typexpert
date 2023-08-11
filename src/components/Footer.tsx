import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex sticky md:absolute bottom-0 w-full text-sm lg:text-base text-gray-400 h-11 lg:h-13 justify-center items-center text-center space-x-5">
      <Link
        href={"https://github.com/priyankarkoley/Typexpert"}
        target="_blank"
        className="hover:animate-bounce pt-1 sm:absolute right-5 text-lg sm:text-xl md:text-2xl lg:text-3xl"
      >
        <i className="devicon-github-original text-white"></i>
      </Link>
      <div className="w-fit">
        Developed by{" "}
        <Link
          target="_blank"
          className="text-white hover:underline hover:cursor-pointer hover:text-lime-400 animate-pulse"
          href={"https://priyankarkoley.github.io/myspace/"}
        >
          priyankar_koley
        </Link>{" "}
        with <span className="animate-pulse text-white">♥️</span>
      </div>
    </div>
  );
}
