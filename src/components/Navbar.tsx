import React from "react";

export default function Navbar() {
  return (
    <div className="flex absolute w-screen text-xl sm:text-lg lg:text-xl text-white h-14 bg-green-700 items-center sm:pl-8">
      <div className="w-screen text-center sm:w-fit">TYPEXPERT</div>
      <span className="hidden sm:inline-block sm:ml-auto sm:mr-8">
        <span className="pr-8">HOME</span>
        <span className="pr-8">PLAY</span>
        <span className="pr-8">LOGIN</span>
        <span className="pr-8">COMING SOON</span>
      </span>
      
    </div>
  );
}
