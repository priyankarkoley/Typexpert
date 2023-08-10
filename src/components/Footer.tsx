import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="sm:flex hidden sticky md:absolute bottom-0 w-full text-sm lg:text-base text-gray-400 h-14 lg:h-13 justify-center bg-teal-900 items-center text-center sm:pl-8">
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
      <Link
        href={"https://github.com/priyankarkoley/Typexpert"}
        target="_blank"
        className="hover:animate-bounce pt-1 absolute right-5 text-4xl"
      >
        <i className="devicon-github-original text-white"></i>
      </Link>
    </div>
  );
}
