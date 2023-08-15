"use client";
import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import { TYPE_THIS } from "./../var";

export default function Main({
  wordCount,
  setWordCount,
  letterCount,
  setLetterCount,
  correctCount,
  setCorrectCount,
  inCorrectCount,
  setInCorrectCount,
  totalTime,
  settotalTime,
  time,
  setTime,
  text,
  setText,
  writtenWords,
  setWrittenWords,
  correctStore,
  setCorrectStore,
}: {
  wordCount: number;
  setWordCount: any;
  letterCount: number;
  setLetterCount: any;
  correctCount: number;
  setCorrectCount: any;
  inCorrectCount: number;
  setInCorrectCount: any;
  totalTime: number;
  settotalTime: any;
  time: { ms: number; s: number; m: number; h: number };
  setTime: any;
  text: string;
  setText: any;
  writtenWords: string;
  setWrittenWords: any;
  correctStore: number[];
  setCorrectStore: any;
}) {
  const inputElement = useRef<any>(null);

  // useEffect(()=>{
  //   inputElement.current.focus();
  // },[wordCount,inputElement])

  const [i, setI] = useState<number>(0);
  const [col, setCol] = useState<string>(
    "bg-indigo-300 bg-opacity-30 text-white"
  );
  const [int, setInt] = useState<NodeJS.Timer>();
  const [status, setStatus] = useState(0);

  let myGivenString = TYPE_THIS.slice(0, wordCount);

  let [tt, milliseconds, seconds, minutes, hours] = [
    totalTime,
    time.ms,
    time.m,
    time.s,
    time.h,
  ];

  const start = () => {
    if (status === 0) {
      setStatus(1);
      settotalTime(0);
      tt = 0;
      run();
      setInt(setInterval(run, 100));
    }
  };
  const pause = () => {
    setStatus(2);
    clearInterval(int);
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
    if (milliseconds === 10) {
      milliseconds = 0;
      seconds++;
    }
    milliseconds++;
    tt++;
    settotalTime(tt);
    return setTime({ ms: milliseconds, s: seconds, m: minutes, h: hours });
  };
  // let finisher = () => {
  //   if (text === MyString) {
  //     pause();
  //   }
  // };
  let checker = (word: string) => {
    if (status === 1) {
      if (word.includes(" ")) {
        setLetterCount(letterCount + text.length);
        setWrittenWords(writtenWords + word);
        setText("");
        if (word.trim() === myGivenString[i]) {
          correctWordAction();
        } else {
          incorrectWordAction();
        }
        setI(i + 1);
      }
      if (word === myGivenString[i] + " ") word = "";
      if (myGivenString!==undefined && myGivenString[i].includes(word))
        setCol("text-white bg-indigo-300 bg-opacity-30");
      else setCol("text-white bg-red-400");
      if (word === myGivenString[i]) setCol("bg-green-400 text-black");
    }
    if (i === wordCount - 1 && myGivenString[i] === word) {
      setCol("bg-indigo-300 bg-opacity-30 text-white");
      setLetterCount(letterCount + text.length);
      setWrittenWords(writtenWords + word);
      setText("");
      correctWordAction();
      setStatus(2);
      pause();
    }
    if (word.includes(" ")) setText("");

    function incorrectWordAction() {
      setInCorrectCount(inCorrectCount + 1);
      setCorrectStore(
        correctStore.map((value, index) => {
          if (index == i) return 0;
          else return value;
        })
      );
    }

    function correctWordAction() {
      setCorrectCount(correctCount + 1);
      setCorrectStore(
        correctStore.map((value, index) => {
          if (index == i) return 1;
          else return value;
        })
      );
    }
  };

  const reset = () => {
    setStatus(0);
    clearInterval(int);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setText("");
    setCol("bg-indigo-300 bg-opacity-30 text-white");
    setI(0);
    setCorrectStore(correctStore.map(() => -1));
    setLetterCount(0);
    setCorrectCount(0);
    setInCorrectCount(0);
    settotalTime(0);
    setWrittenWords("");
    inputElement.current.focus();
  };

  return (
    <div className="space-y-5 md:space-y-10 md:w-full p-6">
      <div className="text-lg">
        <button
          onClick={() => {
            setWordCount(10);
            reset();
            setCorrectStore(
              Array.apply(null, Array(10)).map(function () {
                return -1;
              })
            );
          }}
          className={`${wordCount === 10 ? "underline" : ""} hover:underline`}
        >
          10
        </button>{" "}
        /{" "}
        <button
          onClick={() => {
            setWordCount(20);
            reset();
            setCorrectStore(
              Array.apply(null, Array(20)).map(function () {
                return -1;
              })
            );
          }}
          className={`${wordCount === 20 ? "underline" : ""} hover:underline`}
        >
          20
        </button>{" "}
        /{" "}
        <button
          onClick={() => {
            setWordCount(35);
            reset();
            setCorrectStore(
              Array.apply(null, Array(35)).map(function () {
                return -1;
              })
            );
          }}
          className={`${wordCount === 35 ? "underline" : ""} hover:underline`}
        >
          35
        </button>{" "}
        /{" "}
        <button
          onClick={() => {
            setWordCount(50);
            reset();
            setCorrectStore(
              Array.apply(null, Array(50)).map(function () {
                return -1;
              })
            );
          }}
          className={`${wordCount === 50 ? "underline" : ""} hover:underline`}
        >
          50
        </button>
      </div>
      <div className="w-full text-justify text-sm md:text-base lg:text-lg">
        {
          // (typeof window !== 'undefined')?
          TYPE_THIS.slice(0, wordCount).map((value, index) => {
            return (
              <span key={index}>
                <span
                  className={`${
                    i === index ? "border-b-2 border-green-500" : ""
                  } ${
                    correctStore[index] === -1
                      ? "text-white"
                      : correctStore[index] === 1
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >{`${value}`}</span>{" "}
              </span>
            );
          })
          // :'undefined'
        }
      </div>
      <input
        // rows={4}
        // placeholder="Press ENTER or SPACE to finish."
        ref={inputElement}
        autoFocus
        className={`${col} p-2 w-full rounded-md caret-neutral-50`}
        onChange={(e) => {
          start();
          setText(e.target.value);
          checker(e.target.value == text ? "" : e.target.value);
        }}
        value={text}
      />
      <div className="py-2">
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
