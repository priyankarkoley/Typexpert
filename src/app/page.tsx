"use client";
import { useState } from "react";
import Leftbar from "../components/Leftbar";
import Main from "../components/Main";
import Rightbar from "../components/Rightbar";

export default function Home() {
  const [text, setText] = useState("");
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [totalTime, settotalTime] = useState(0);

  return (
    <>




    <div className="text-3xl pt-20">
      <div className="bg-red-600 block sm:hidden">phn</div>
      <div className="bg-green-600 hidden sm:block md:hidden">sm</div>
      <div className="bg-blue-300 hidden md:block lg:hidden">md</div>
      <div className="bg-yellow-600 hidden lg:block xl:hidden">lg</div>
      <div className="bg-red-500 hidden xl:block 2xl:hidden">xl</div>
      <div className="bg-green-600 hidden 2xl:block">2xl</div>
    </div>




    
      {/* only when in phone */}
      <div className="bg-red-400 h-screen text-white text-3xl flex items-center justify-center sm:hidden">Go, Get a Laptop, you poor nigga..!</div>
    
      {/* only when not in phone */}
      <div className="bg-green-200 pt-[5.5rem] p-8 hidden sm:inline-block md:flex space-y-5 md:space-y-0 md:space-x-8 min-h-screen">

          <div className="bg-green-100 md:w-1/4 rounded-lg p-4"> <Leftbar totalTime={totalTime} settotalTime={settotalTime} text={text} setText={setText}/> </div>
          <div className="bg-green-100 md:w-4/5 rounded-lg p-4"> <Main totalTime={totalTime} settotalTime={settotalTime} time={time} setTime={setTime} text={text} setText={setText}/> </div>
          <div className="bg-green-100 md:w-1/4 rounded-lg p-4"> <Rightbar/> </div>
        
      </div>  
    </>
  );
}
