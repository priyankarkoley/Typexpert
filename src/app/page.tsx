"use client";
import { useState } from "react";
// import Main from "../components/Main";
import dynamic from "next/dynamic";
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
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [wordCount, setWordCount] = useState<number>(10);
  const [letterCount, setLetterCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [inCorrectCount, setInCorrectCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [writtenWords, setWrittenWords] = useState<string>("");
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [totalTime, settotalTime] = useState(0);

  const [correctStore, setCorrectStore] = useState<Array<number>>(
    Array.apply(null, Array(wordCount)).map(function () {
      return -1;
    })
  );

  return (
    <div className="md:h-screen w-full relative flex-col justify-center">
      <div className="absolute -z-50 bg-fixed bg-gray-900 w-full h-full overflow-hidden">
        <div className="opacity-40 blur-xl rounded-full w-44 h-44 sm:w-64 sm:h-64 absolute top-1/2 -mt-10 left-2/3 -ml-32 animate-circlesm z-10 bg-violet-800"></div>
        <div className="opacity-40 blur-xl rounded-full w-64 h-64 sm:w-96 sm:h-96 absolute top-1/2 -mt-72 left-1/2 -ml-10 animate-circlemd -z-50 bg-yellow-600"></div>
        <div className="opacity-40 blur-xl rounded-full w-52 h-52 sm:w-80 sm:h-80 absolute top-1/2 -mt-80 left-1/3 -ml-32 animate-circlexl z-20 bg-red-500"></div>
        <div className="opacity-40 blur-xl rounded-full w-52 h-52 sm:w-80 sm:h-80 absolute top-1/2 -mt-20 left-1/3 -ml-52 animate-circlesm -z-20 bg-green-600"></div>
        <div className="opacity-40 blur-xl rounded-full w-20 h-20 sm:w-40 sm:h-40 absolute top-1/2 -mt-72 left-2/3 ml-12 animate-circlexl -z-20 bg-cyan-600"></div>
      </div>
      <Navbar />
      <div className="flex justify-center items-center overflow-y-auto">
        <div className="bg-red-8000 max-w-5xl p-10 sm:inline-block md:flex space-y-8 md:space-y-0 md:space-x-7">
          <div className="bg-green-100 bg-opacity-10 text-white md:w-3/5 rounded-lg lg:p-4">
            <Main
              wordCount={wordCount}
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
              letterCount={letterCount}
              correctCount={correctCount}
              inCorrectCount={inCorrectCount}
              totalTime={totalTime}
              writtenWords={writtenWords}
              correctStore={correctStore}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    // </div>
  );
}
