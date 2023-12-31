import Link from "next/link";
import React from "react";
export default function Timer({
  time,
  onReset,
}: {
  time: { ms: number; s: number; m: number; h: number };
  onReset: any;
}) {
  return (
    <div className="flex h-7 sm:h-10 space-x-2">
      <div className="flex flex-wrap items-center w-full">
          Your Time:&nbsp;  
          <div>{`
          ${time.h == 0 ? "" : (time.h < 10 ? "0" + time.h : time.h) + ":"}
					${time.m < 10 ? "0" + time.m : time.m} :
					${time.s < 10 ? "0" + time.s : time.s}.
					${time.ms < 10 ? time.ms : time.ms}
				`}</div>
      </div>
        <button
          className="disabled:bg-stone-500 text-gray-950 font-bold tracking-wider h-full bg-gray-200 bg-opacity-60 shadow-md hover:shadow-gray-900 shadow-gray-700 hover:bg-opacity-100 px-3 rounded-md"
          onClick={() => {
            onReset();
          }}
          >
          RESET
        </button>
        <Link
          className="disabled:bg-stone-500 text-gray-950 font-bold tracking-tight h-full bg-gray-200 bg-opacity-60 shadow-md hover:shadow-gray-900 shadow-gray-700 hover:bg-opacity-100 px-3 pt-2 rounded-md"
          href={"/analitics"}
          target="_blank"
          >
          HISTORY
        </Link>
      </div>
  );
}

  {/*line30: <div className="space-x-2 w-fit h-10">
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