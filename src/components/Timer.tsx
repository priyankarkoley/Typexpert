import React from "react";

export default function Timer({
  time,
  onStart,
  onPause,
  onReset,
  status,
}: {
  time: { ms: number; s: number; m: number; h: number };
  onStart: any;
  onPause: any;
  onReset: any;
  status: number;
}) {
  return (
    <div className="flex h-10">
      <div className="flex items-center">
        Your Time:{" "}
        {`
					${time.h < 10 ? "0" + time.h : time.h} :
					${time.m < 10 ? "0" + time.m : time.m} :
					${time.s < 10 ? "0" + time.s : time.s} :
					${time.ms < 10 ? "00" + time.ms : time.ms}
				`}
      </div>
      <div className="space-x-4 ml-auto mr-8">
        {status === 0 ? (
          <button
            className="h-full bg-green-500 px-3 rounded-md"
            onClick={() => {
              onStart();
            }}
          >
            START
          </button>
        ) : (
          <button
            className="h-full bg-green-500 px-3 rounded-md"
            onClick={() => {
              onStart();
            }}
          >
            RESUME
          </button>
        )}

        {status === 1 ? (
          <button
            className="h-full bg-orange-400 px-3 rounded-md"
            onClick={() => {
              onPause();
            }}
          >
            PAUSE
          </button>
        ) : (
          <button
            disabled
            className="disabled:bg-stone-500 h-full bg-orange-400 px-3 rounded-md"
            onClick={() => {
              onPause();
            }}
          >
            PAUSE
          </button>
        )}

        {status !== 0 ? (
          <button
            className="h-full bg-red-500 px-3 rounded-md"
            onClick={() => {
              onReset();
            }}
          >
            RESET
          </button>
        ) : (
          <button
            disabled
            className="h-full bg-stone-500 px-3 rounded-md"
            onClick={() => {
              onReset();
            }}
          >
            RESET
          </button>
        )}
      </div>
    </div>
  );
}
