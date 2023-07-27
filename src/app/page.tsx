"use client";
import { useState } from "react";
import Main from "../components/Main";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [text, setText] = useState("");
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [totalTime, settotalTime] = useState(0);
  const [check, setCheck] = useState(false);

  return (
    <>
      {/* only when in phone */}
      <div className="bg-red-400 h-screen text-white text-3xl flex items-center justify-center sm:hidden">Go, Get a Laptop, you poor nigga..!</div>
    
      {/* only when not in phone */}
        <div className="bg-green-200 flex justify-center md:items-center md:min-h-screen">
          <div className="max-w-5xl pt-[5.5rem] p-8 hidden sm:inline-block md:flex space-y-8 md:space-y-0 md:space-x-7 min-h-screen md:min-h-fit">
          <div className="bg-green-100 md:w-2/3 rounded-lg lg:p-4"> <Main setCheck={setCheck} totalTime={totalTime} settotalTime={settotalTime} time={time} setTime={setTime} text={text} setText={setText}/> </div>
          <div className="bg-green-100 md:w-1/3 rounded-lg lg:p-4"> <Dashboard check={check} setCheck={setCheck} totalTime={totalTime} text={text}/> </div>        
          </div>
      </div>  
    </>
  );
}
