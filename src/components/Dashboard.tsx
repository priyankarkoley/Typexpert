import React from "react";

export default function Dashboard({
  wordCount,
  letterCount,
  correctCount,
  inCorrectCount,
  totalTime,
  writtenWords,
  correctStore,
  text,
}: {
  wordCount: number;
  letterCount: number;
  correctCount: number;
  inCorrectCount: number;
  totalTime: number;
  writtenWords: string;
  correctStore: number[];
  text: string;
}) {
  let col1 =
    (letterCount + wordCount) / 5 / (totalTime / 600) >= 40
      ? "border-green-500 text-green-500"
      : (letterCount + wordCount) / 5 / (totalTime / 600) >= 30
      ? "border-yellow-600 text-yellow-600"
      : "border-rose-600 text-rose-600";
  let col2 =
    (correctCount / wordCount) * 100 >= 80
      ? "border-green-500 text-green-500"
      : (correctCount / wordCount) * 100 >= 65
      ? "border-yellow-600 text-yellow-600"
      : "border-rose-600 text-rose-600";
  return (
    <div className="w-full py-4 px-6">
      <div className="mb-10 md:text-2xl lg:text-3xl flex items-center">
        YOUR DASHBOARD:
        {/* {letterCount + text.length - 1 + wordCount} */}
      </div>
      <div className="space-y-4">
        <div className="relative flex items-center">
          Speed:
          <div
            className={`text-xl ${col1} inline-block absolute right-0 font-bold border-2 w-fit px-2`}
          >
            {(letterCount + wordCount) / 5 / (totalTime / 600)
              ? (letterCount + wordCount) / 5 / (totalTime / 600) !== Infinity
                ? Math.round((letterCount + wordCount) / 5 / (totalTime / 600))
                : "00"
              : "error"}{" "}
            wpm.
          </div>
        </div>
        <div className="relative flex items-center">
          Accuracy:
          <span
            className={`text-xl ${col2} inline-block absolute right-0 font-bold border-2 w-fit px-2`}
          >
            {(correctCount / wordCount) * 100
              ? Math.round((correctCount / wordCount) * 100)
              : "0"}
            %
          </span>
        </div>
        <div className="relative flex items-center">
          Total Words:
          <span className="text-xl border-green-500 text-green-500 inline-block absolute right-0 font-bold border-2 w-fit px-2">
            {wordCount}
          </span>
        </div>
        <div className="relative flex items-center">
          Correctly Spelled:
          <span className="text-xl border-green-500 text-green-500 inline-block absolute right-0 font-bold border-2 w-fit px-2">
            {correctCount}
          </span>
        </div>
        <div className="relative flex items-center">
          Incorrectly Spelled:
          <span
            className={`text-xl ${
              inCorrectCount
                ? "border-rose-600 text-rose-600"
                : "border-green-500 text-green-500"
            } inline-block absolute right-0 font-bold border-2 w-fit px-2`}
          >
            {inCorrectCount}
          </span>
        </div>
        <div className="">
          You have written:
          <div>
            {writtenWords
              .split(" ")
              .slice(0, wordCount)
              .map((value, index) => {
                return (
                  <span key={index}>
                    <span
                      className={` ${
                        correctStore[index] === 1
                          ? "text-green-400"
                          : "text-red-500"
                      }`}
                    >
                      {value}
                    </span>{" "}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
