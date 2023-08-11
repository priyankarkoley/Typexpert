"use client";
import { useState } from "react";
import Main from "../components/Main";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import space from  "@/../public/space.jpg"
import Image from 'next/image'

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

    // <div>
    //   only when in phone
    //   <div className="bg-green-100 h-screen text-3xl flex-col items-center justify-center sm:hidden">
    //     <div className="flex sticky top-0 w-full text-xl lg:text-2xl text-white h-11 lg:h-13 justify-center bg-green-700 items-center text-center sm:pl-8">
    //       <div>TYPEXPERT</div>
    //     </div>
    //     <div className="p-4 my-10">Go, Get a Laptop, you poor nigga..!</div>
    //   </div>

    //   only when not in phone
  return (
      <div className="h-screen w-full relative flex-col justify-center">
        <div className="absolute -z-50 bg-fixed bg-gray-900 w-full h-full">
          <div className="hidden sm:block opacity-40 blur-3xl rounded-full w-64 h-64 absolute top-1/2 -mt-10 left-2/3 -ml-32 animate-circlesm z-10 bg-violet-800"></div>
          <div className="hidden sm:block opacity-40 blur-3xl rounded-full w-96 h-96 absolute top-1/2 -mt-72 left-1/2 -ml-32 animate-circlemd -z-50 bg-yellow-600"></div>
          <div className="hidden sm:block opacity-40 blur-3xl rounded-full w-80 h-80 absolute top-1/2 -mt-80 left-1/3 -ml-32 animate-circlexl z-20 bg-red-500"></div>
          <div className="hidden sm:block opacity-40 blur-3xl rounded-full w-80 h-80 absolute top-1/2 -mt-10 left-1/3 -ml-32 animate-circlesm -z-20 bg-green-600"></div>
          <div className="hidden sm:block opacity-40 blur-3xl rounded-full w-40 h-40 absolute top-1/2 -mt-96 left-2/3 -ml-12 animate-circlexl -z-20 bg-cyan-600"></div>
        </div>
        <Navbar />
        <div className="flex justify-center sm:my-10">
          <div className="max-w-5xl p-8 sm:inline-block md:flex space-y-8 md:space-y-0 md:space-x-7 min-h-screen md:min-h-fit">
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
            <div className="bg-green-100 bg-opacity-10 text-white md:w-2/5 rounded-lg lg:p-4">
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
