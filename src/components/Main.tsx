"use client";
import { useState } from "react";
import Timer from "./Timer";
import {TYPE_THIS} from "./../var";

export default function Main({
  setCheck,
  totalTime,
  settotalTime,
  time,
  setTime,
  text,
  setText,
}: {
  setCheck:any,
  totalTime: number;
  settotalTime: any;
  time: { ms: number; s: number; m: number; h: number };
  setTime: any;
  text: string;
  setText: any;
}) {

  const [int, setInt] = useState<NodeJS.Timer>();
  const [status, setStatus] = useState(0);
  let [tt, milliseconds, seconds, minutes, hours] = [
    totalTime,
    time.ms,
    time.m,
    time.s,
    time.h,
  ];

  const start = () => {
    console.log("start");
    setStatus(1);
    if (status === 0) {
      settotalTime(0);
      tt = 0;
      run();
      setInt(setInterval(run, 10));
    }
  };
  const pause = () => {
    console.log("pause");
    setStatus(2);
    clearInterval(int);
  };
  const reset = () => {
    console.log("reset");
    setStatus(0);
    clearInterval(int);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setText('');
  };

  const run = () => {
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
    }
    milliseconds++;
    tt++;
    settotalTime(tt); 
    return setTime({ ms: milliseconds, s: seconds, m: minutes, h: hours });
  };
  let finisher = () =>{
    if(text===TYPE_THIS){
      console.log("found");
      setCheck(true);
      pause();
    }
  }
  return (
    <div className=" space-y-5 md:space-y-10 max-w-max p-6">  
      <div>
      {/* //TODO */}
      </div>
      <div className="text-justify text-sm md:text-base lg:text-lg"> 
        {TYPE_THIS}
      </div>
      <textarea
        rows={4}
        placeholder="Press ENTER or SPACE to finish."
        value={text}
        className="p-2 text-white min-w-full bg-slate-700"
        onChange={(e) => {
          start();
          setText(e.target.value);
          finisher();
        }}
      />
      <div className="h-20">
      <Timer
        time={time}
        onStart={start}
        onPause={pause}
        onReset={reset}
        status={status}
        />
      </div>
    </div>
  );
}
