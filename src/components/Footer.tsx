import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="shadow-gray-800 shadow bg-gray-900 flex sticky md:absolute bottom-0 w-full text-sm lg:text-sm text-gray-400 h-9 lg:h-10 justify-center items-center text-center space-x-5">
      <Link
        href={"https://github.com/priyankarkoley/Typexpert"}
        target="_blank"
        className="hover:animate-bounce pt-1 sm:absolute right-5 text-md sm:text-lg md:text-xl lg:text-2xl"
      >
        <i className="devicon-github-original text-white"></i>
      </Link>
      <div className="w-fit font-thin">
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
      <div className="sm:absolute left-1 flex items-center">
        <Link
          href={"https://nextjs.org"}
          target="_blank"
          className="devicon-nextjs-original-wordmark text-2xl sm:text-4xl pr-1 sm:pr-2"
        ></Link>
        <Link
          href={"https://tailwindcss.com"}
          target="_blank"
          className="devicon-tailwindcss-plain text-md sm:text-lg font-thin"
        ></Link>
      </div>
    </div>
  );
}
