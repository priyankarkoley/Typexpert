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
    <div className="sm:flex lg:flex md:block h-10">
      <div className="block md:flex items-center justify-center lg:block w-full h-10">
        <div className="lg:flex items-center h-10 min-w-fit">
          Your Time:&nbsp; {/* ${time.h < 10 ? "0" + time.h : time.h} : */}
          {`
          ${time.h==0?'':(time.h < 10 ? "0" + time.h: time.h) +':'}
					${time.m < 10 ? "0" + time.m : time.m} :
					${time.s < 10 ? "0" + time.s : time.s}.
					${time.ms < 10 ? time.ms : time.ms}
				`}
        </div>
      </div>
      <div className="block md:flex items-center justify-center lg:block min-w-fit">
        {/* <div className="space-x-2 w-fit h-10">
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
            className="disabled:bg-stone-500  h-full bg-green-500 px-3 rounded-md"
            onClick={() => {
              onPause();
            }}
          >
            PAUSE
          </button>
        )}
          <button
            className="disabled:bg-stone-500  h-full bg-green-500 px-3 rounded-md"
            onClick={() => {
              onReset();
            }}
          >
            RESET
          </button>
        {status === 1 ? (
          <button
            className="h-full bg-orange-400 px-3 rounded-md"
            onClick={() => {
              onPause();
            }}
          >
            FINISH
          </button>
        ) : (
          <button
            disabled
            className="disabled:bg-stone-500 h-full bg-orange-400 px-3 rounded-md"  
            onClick={() => {
              onPause();
            }}
          >
            FINISH
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
      </div> */}

        <button
          className="disabled:bg-stone-500 h-full bg-green-500 px-3 rounded-md"
          onClick={() => {
            onReset();
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
