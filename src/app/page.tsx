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
      <div className="bg-green-200 pt-[5.5rem] p-8 flex space-x-8 h-screen">
        <div className="bg-green-100 w-1/4 rounded-lg"> <Leftbar totalTime={totalTime} settotalTime={settotalTime} text={text} setText={setText}/> </div>
        <div className="bg-green-100 w-4/5 rounded-lg"> <Main totalTime={totalTime} settotalTime={settotalTime} time={time} setTime={setTime} text={text} setText={setText}/> </div>
        <div className="bg-green-100 w-1/4 rounded-lg"> <Rightbar/> </div>
      </div>
    </>
  );
}
