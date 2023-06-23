"use client";
import { useState } from "react";
import Timer from "./Timer";

export default function Main({
  totalTime,
  settotalTime,
  time,
  setTime,
  text,
  setText,
}: {
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

  return (
    <div className="md:p-10 2xl:p-20 space-y-5 md:space-y-10">
      <div className="text-justify text-sm md:text-base 2xl:text-xl">
        Let's go about typing, fast typing is here, what about you? Well yes,
        you have to type right now about this, and then, you later get point.
        Now, start typing right now, if you type faster at lower than thirty
        seconds, you are master, this will be challenging, 1 2 3 4 5 6 7 8 9 10,
        Stop about slow typing.
        <span className="hidden md:inline-block">
        You should type this for your points if you
        didn't logged up/sign in yet, you should sign in for your account, right
        now. <span className="hidden lg:inline-block"> No two fingers, only ten fingers, ten fingers make this more
        perfect, if you type this with your two fingers, you should probably
        slower than me, but if your WPM is higher than me, you are master of the
        typist. Right now, stopping the type test right now, just kidding, ok
        now, you can stop there right now, sorry for the long text.
        </span></span>
      </div>
      <textarea
        placeholder="Your time will start when you start typing..."
        value={text}
        className="p-2 text-white min-w-full bg-slate-700"
        onChange={(e) => {
          start();
          setText(e.target.value);
        }}
      />
      <Timer
        time={time}
        onStart={start}
        onPause={pause}
        onReset={reset}
        status={status}
      />
    </div>
  );
}
