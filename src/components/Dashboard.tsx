import React, { useState } from "react";
import { TYPE_THIS } from "./../var";

export default function Dashboard({
  check,
  setCheck,
  totalTime,
  text,
}: {
  check: boolean;
  setCheck: any;
  totalTime: number;
  text: string;
}) {
  let wpm = text.length / 5 / (totalTime / 6000);
  let col = check ? "border-green-700 text-green-700":"border-red-700 text-red-700";
  console.log(check);
  return (
    <div className="space-y-8 py-6 w-full p-6">
      <div className="md:text-2xl lg:text-3xl flex items-center">
        YOUR DASHBOARD:
      </div>
      <div>
        <div>Your current typing speed is: </div>
        <div className={`text-2xl ${col} font-bold border-2 w-fit px-2 my-2`}
          >{" "}{wpm ? Math.round(wpm) : "000"} wpm.
          </div>
      </div>
    </div>
  );
}
