import React from "react";

export default function Timer({
  timer,
  onStart,
  onPause,
  onResume,
  onReset
}: {
  timer: {
    startTime: number;
    endTime: number;
    acc: number;
    status:'started'|'paused'|'initial';};
  onStart:  ()=>void;
  onPause:  ()=>void;
  onResume: ()=>void;
  onReset:  ()=>void
}) {

  return (
    <div className="sm:flex lg:flex md:block h-10">
    <div className="block md:flex items-center justify-center lg:block w-full h-10">
      <div className="lg:flex items-center h-10 min-w-fit">
        Your Time {timer.acc}
        
      </div>
    </div>
    <div className="block md:flex items-center justify-center lg:block min-w-fit">
      <div className="space-x-2 w-fit h-10">
        {timer.status === 'initial' ? (
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
              onResume();
            }}
          >
            RESUME
          </button>
        )}

        {timer.status === 'started' ? (
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

        {timer.status !== 'initial' ? (
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
    
    </div>
  );
}
