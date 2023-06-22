"use client";
import { useState } from "react";
import Timer from "./Timer";

export default function Main() {
  const [text, setText] = useState("");
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [int, setInt] = useState<NodeJS.Timer>();
  const [status, setStatus] = useState(0);
  let [milliseconds, seconds, minutes, hours] = [
    time.ms,
    time.m,
    time.s,
    time.h,
  ];

  const start = () => {
    console.log("start");
    setStatus(1);
    if (status === 0) {
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
    return setTime({ ms: milliseconds, s: seconds, m: minutes, h: hours });
  };

  return (
    <div className="p-10 2xl:p-20 space-y-10">
      <div className="text-justify 2xl:text-xl">
        Let's go about typing, fast typing is here, what about you? Well yes,
        you have to type right now about this, and then, you later get point.
        Now, start typing right now, if you type faster at lower than thirty
        seconds, you are master, this will be challenging, 1 2 3 4 5 6 7 8 9 10,
        Stop about slow typing, You should type this for your points if you
        didn't logged up/sign in yet, you should sign in for your account, right
        now, No two fingers, only ten fingers, ten fingers make this more
        perfect, if you type this with your two fingers, you should probably
        slower than me, but if your WPM is higher than me, you are master of the
        typist. Right now, stopping the type test right now, just kidding, ok
        now, you can stop there right now, sorry for the long text
      </div>
      <textarea
        placeholder="Your time will start when you start typing..."
        value={text}
        className="p-4 text-white w-full bg-slate-700"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Timer
        ptime={time}
        onStart={start}
        onPause={pause}
        onReset={reset}
        status={status}
      />
    </div>
  );
}
