import React, { useState } from "react";
import { TYPE_THIS } from "./../var";

export default function Dashboard({
  correctCount,
  setCorrectCount,
  inCorrectCount,
  setInCorrectCount,
  check,
  setCheck,
  totalTime,
  text,
}: {
  correctCount:number,
  setCorrectCount:any,
  inCorrectCount:number,
  setInCorrectCount:any,
  check: boolean;
  setCheck: any;
  totalTime: number;
  text: string;
}) {
  let len = TYPE_THIS.split(" ").length
  let wpm = text.length / 5 / (totalTime / 6000);
  let acc = (correctCount/len)*100;
  let col = check ? "border-green-700 text-green-700":"border-red-700 text-red-700";
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
      <div>
        <div>Your current accuracy speed is: </div>
        <div className={`text-2xl ${col} font-bold border-2 w-fit px-2 my-2`}
          >{acc ? Math.round(acc) : "00"} %
          </div>
      </div>
    </div>
  );
}
