"use client";
import { useEffect, useState } from "react";
import Timer from "./Timer";
import { MyString } from "./../var";

export default function Main({
  wordCount,
  setWordCount,
  letterCount,
  setLetterCount,
  correctCount,
  setCorrectCount,
  inCorrectCount,
  setInCorrectCount,
  check,
  setCheck,
  totalTime,
  settotalTime,
  time,
  setTime,
  text,
  setText,
}: { 
  wordCount:number,
  setWordCount:any,
  letterCount: number;
  setLetterCount: any;
  correctCount: number;
  setCorrectCount: any;
  inCorrectCount: number;
  setInCorrectCount: any;
  check: boolean;
  setCheck: any;
  totalTime: number;
  settotalTime: any;
  time: { ms: number; s: number; m: number; h: number };
  setTime: any;
  text: string;
  setText: any;
}) {

  const [correctStore, setCorrectStore] = useState<Array<number>>(Array.apply(null, Array(wordCount))
	.map(function () { return -1; }));
  const [i, setI] = useState<number>(0);
  const [col, setCol] = useState<string>("");
  const [int, setInt] = useState<NodeJS.Timer>();
  const [status, setStatus] = useState(0);
  const [j, setJ] = useState<number>(0);
  
  useEffect(()=>{setCorrectStore(Array.apply(null, Array(wordCount))
    .map(function () { return -1; }))},[wordCount]
  )

  let [tt, milliseconds, seconds, minutes, hours] = [
    totalTime,
    time.ms,
    time.m,
    time.s,
    time.h,
  ];

  let TYPE_THIS = MyString.split(" ");

  const start = () => {
    setStatus(1);
    if (status === 0) {
      settotalTime(0);
      tt = 0;
      run();
      setInt(setInterval(run, 10));
    }
  };
  const pause = () => {
    setStatus(2);
    clearInterval(int);
  };
  const reset = () => {
    setStatus(0);
    clearInterval(int);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setText("");
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
  let finisher = () => {
    if (text === MyString) {
      setCheck(true);
      pause();
    }
  };

  let checker = (word: string) => {
    let myGivenString = TYPE_THIS;
    if (myGivenString[i].includes(word)) setCol("text-white");
    else setCol("text-red-300");
    if (word === myGivenString[i]) setCol("text-green-200");
    if (word.includes(" ")) {
      setLetterCount(letterCount + text.length);
      setText("");
      if (word.trim() === myGivenString[i]) {
        setCorrectCount(correctCount + 1);
        setCorrectStore(correctStore.map((value, index) => {
          if(index==i)
          return 1;
            else return value
        }));
      } else {
        setInCorrectCount(inCorrectCount + 1);setCorrectStore(correctStore.map((value, index) => {
          if(index==i)
          return 0;
            else return value
        }));
      }
      setI(i + 1);
      if (i === wordCount - 1) pause();
    }
  };

  return (
    <div className="space-y-5 md:space-y-10 md:w-full p-6">
      <div className="text-lg">
        <button onClick={()=>setWordCount(10)} className={`${(wordCount===10)?"underline":""} hover:underline`}>10</button> /{" "}
        <button onClick={()=>setWordCount(20)} className={`${(wordCount===20)?"underline":""} hover:underline`}>20</button> /{" "}
        <button onClick={()=>setWordCount(35)} className={`${(wordCount===35)?"underline":""} hover:underline`}>35</button> /{" "}
        <button onClick={()=>setWordCount(50)} className={`${(wordCount===50)?"underline":""} hover:underline`}>50</button>
      </div>
      <div className="w-full text-justify text-sm md:text-base lg:text-lg">
        {TYPE_THIS.slice(0, wordCount).map((value, index) => {
          return (
            <span><span
            key={index}
            className={`${i === index ? "border-b-2 border-green-500" : ""} ${
              correctStore[index] === -1
                ? "text-black"
                : correctStore[index] === 1
                ? "text-green-500"
                : "text-red-500"
            }`}
          >{`${value}`}</span>{' '}</span>
          );
        })}
      </div>
      <textarea
        rows={4}
        // placeholder="Press ENTER or SPACE to finish."
        value={text}
        className={`${col} p-2 w-full bg-slate-700`}
        onChange={(e) => {
          start();
          setText(e.target.value);
          checker(e.target.value);
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
