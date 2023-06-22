import React from "react";

export default function Navbar() {
  return (
    <div className="absolute w-screen text-xl text-white h-14 bg-green-700 flex items-center pl-8">
      <span >TYPEXPERT</span>
      <span className="ml-auto mr-8">
        <span className="pr-8">HOME</span>
        <span className="pr-8">PLAY</span>
        <span className="pr-8">LOGIN</span>
        <span className="pr-8">COMING SOON</span>
      </span>
      
    </div>
  );
}
