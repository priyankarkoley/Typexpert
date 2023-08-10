import React, { useEffect, useState } from "react";

export default function Dashboard({
  wordCount,
  letterCount,
  correctCount,
  inCorrectCount,
  totalTime,
  writtenWords,
  correctStore
}: {
  wordCount:number,
  letterCount: number;
  correctCount: number;
  inCorrectCount: number;
  totalTime: number;
  writtenWords:string;
  correctStore:number[];
}) {
  
  const [i, setI] = useState<number>(0);

  let len = wordCount;
  let wpm = ((letterCount -1 +len) / 5) / (totalTime / 600);
  let acc = (correctCount / len) * 100;
  let col1 = (wpm>=40)? "border-green-700 text-green-700": (wpm>=30)?"border-yellow-600 text-yellow-600":"border-red-700 text-red-700";
  let col2 = (acc>=80)? "border-green-700 text-green-700": (acc>=65)?"border-yellow-600 text-yellow-600":"border-red-700 text-red-700";
  return (
    <div className="w-full py-4 px-6">
      <div className="mb-10 md:text-2xl lg:text-3xl flex items-center">
        YOUR DASHBOARD:
        {/* {letterCount -1 +len} */}
      </div>
      <div className="space-y-4">
        <div className="relative flex items-center">
          Speed:
          <div
            className={`text-xl ${col1} inline-block absolute right-0 font-bold border-2 w-fit px-2`}
          >
            {(wpm) ? (wpm!==Infinity)?Math.round(wpm):"00" : "error"} wpm.
          </div>
        </div>
        <div className="relative flex items-center">
          Accuracy:
          <span
            className={`text-xl ${col2} inline-block absolute right-0 font-bold border-2 w-fit px-2`}
          >
            {acc ? Math.round(acc) : "0"}%
          </span>
        </div>
        <div className="relative flex items-center">
          Total Words:
          <span
            className="text-xl border-black inline-block absolute right-0 font-bold border-2 w-fit px-2"
          >
            {len}
          </span>
        </div>
        <div className="relative flex items-center">
          Correctly Spelled:
          <span
            className="text-xl border-green-700 text-greeen-700 inline-block absolute right-0 font-bold border-2 w-fit px-2"
          >
            {correctCount}
          </span>
        </div>
        <div className="relative flex items-center">
        Incorrectly Spelled:
          <span
            className={`text-xl ${inCorrectCount?"border-red-700 text-red-700":"border-green-700 text-green-700"} inline-block absolute right-0 font-bold border-2 w-fit px-2`}
          >
            {inCorrectCount}
          </span>
        </div>
        <div className="">
        You have wtitten:
          <div
            // className={`text-xl ${inCorrectCount?"border-red-700 text-red-700":"border-green-700 text-green-700"} inline-block absolute right-0 font-bold border-2 w-fit px-2`}
          >
            {writtenWords.split(" ").slice(0, wordCount).map((value, index) => {






          return (
            <span key={index}>
              <span
                className={` ${
                    correctStore[index] === 1
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >{value}</span>{" "}
            </span>
          );
        })}
          </div>
        </div>
      </div>
    </div>
  );
}
