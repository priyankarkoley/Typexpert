"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
const Main = dynamic(() => import("../components/Main"), {
  loading: () => (
    <div className="space-y-5 md:space-y-10 md:w-full p-6">
      <div className="text-lg">
        <button className={`underllne hover:underline`}>10</button> /{" "}
        <button className={`underllne hover:underline`}>20</button> /{" "}
        <button className={`underllne hover:underline`}>35</button> /{" "}
        <button className={`underllne hover:underline`}>50</button>
      </div>
      <div className="w-full text-justify text-sm md:text-base lg:text-lg">
        Loading...
      </div>
      <input
        className={`bg-indigo-300 bg-opacity-30 text-white p-2 w-full rounded-md caret-neutral-50`}
      />
      <div className="h-20">TIme Loading...</div>
    </div>
  ),

  ssr: false,
});

export default function Home() {
  const [wordCount, setWordCount] = useState<number>(10);
  const [letterCount, setLetterCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [inCorrectCount, setInCorrectCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [writtenWords, setWrittenWords] = useState<string>("");
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [totalTime, settotalTime] = useState(0);

  let wpm = (letterCount + wordCount) / 5 / (totalTime / 600);
  let acc = (correctCount / wordCount) * 100;
  const [correctStore, setCorrectStore] = useState<Array<number>>(
    Array.apply(null, Array(wordCount)).map(function () {
      return -1;
    })
  );

  return (
    <div className="md:h-screen w-full relative flex-col justify-center">
      <div className="absolute -z-50 bg-fixed bg-gray-900 w-full h-full overflow-hidden">
        <div className="opacity-40 blur-xl rounded-full w-24 h-24 sm:w-44 sm:h-44 md:w-64 md:h-64 absolute top-1/2 -mt-10 left-2/3 -ml-32 animate-circlesm z-10 bg-violet-800"></div>
        <div className="opacity-40 blur-xl rounded-full w-44 h-44 sm:w-64 sm:h-64 md:w-96 md:h-96 absolute top-1/2 -mt-72 left-1/2 -ml-10 animate-circlemd -z-50 bg-yellow-600"></div>
        <div className="opacity-40 blur-xl rounded-full w-32 h-32 sm:w-52 sm:h-52 md:w-80 md:h-80 absolute top-1/2 -mt-80 left-1/3 -ml-32 animate-circlexl z-20 bg-red-500"></div>
        <div className="opacity-40 blur-xl rounded-full w-32 h-32 sm:w-52 sm:h-52 md:w-80 md:h-80 absolute top-1/2 -mt-20 left-1/3 -ml-52 animate-circlesm -z-20 bg-green-600"></div>
        <div className="opacity-40 blur-xl rounded-full w-15 h-15 sm:w-30 sm:h-30 md:w-40 md:h-40 absolute top-1/2 -mt-72 left-2/3 ml-12 animate-circlexl -z-20 bg-cyan-600"></div>
      </div>
      <Navbar />
      <div className="flex justify-center items-center overflow-y-auto">
        <div className="bg-red-8000 max-w-5xl p-7 sm:p-10 sm:inline-block md:flex space-y-8 md:space-y-0 md:space-x-7">
          <div className="bg-green-100 bg-opacity-10 text-white md:w-3/5 rounded-lg lg:p-4 shadow-lg">
            <Main
              wordCount={wordCount}
              wpm={wpm}
              acc={acc}
              setWordCount={setWordCount}
              letterCount={letterCount}
              setLetterCount={setLetterCount}
              correctCount={correctCount}
              setCorrectCount={setCorrectCount}
              inCorrectCount={inCorrectCount}
              setInCorrectCount={setInCorrectCount}
              totalTime={totalTime}
              settotalTime={settotalTime}
              time={time}
              setTime={setTime}
              text={text}
              setText={setText}
              writtenWords={writtenWords}
              setWrittenWords={setWrittenWords}
              correctStore={correctStore}
              setCorrectStore={setCorrectStore}
            />
          </div>
          <div className="bg-green-100 bg-opacity-10 text-white md:w-2/5 rounded-lg lg:p-4 shadow-lg">
            <Dashboard
              wordCount={wordCount}
              // wpm={wpm}
              // acc={acc}
              letterCount={letterCount}
              correctCount={correctCount}
              inCorrectCount={inCorrectCount}
              totalTime={totalTime}
              writtenWords={writtenWords}
              correctStore={correctStore}
              text={text}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
