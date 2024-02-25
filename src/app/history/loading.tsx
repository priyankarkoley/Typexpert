import React from "react";

export default function Loading() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <div className="absolute -z-50 h-full w-full overflow-hidden bg-gray-900 bg-fixed">
        <div className="absolute left-2/3 top-1/2 z-10 -ml-32 -mt-10 h-24 w-24 animate-circlesm rounded-full bg-violet-800 opacity-40 blur-xl sm:h-44 sm:w-44 md:h-64 md:w-64"></div>
        <div className="absolute left-1/2 top-1/2 -z-50 -ml-10 -mt-72 h-44 w-44 animate-circlemd rounded-full bg-yellow-600 opacity-40 blur-xl sm:h-64 sm:w-64 md:h-96 md:w-96"></div>
        <div className="absolute left-1/3 top-1/2 z-20 -ml-32 -mt-80 h-32 w-32 animate-circlexl rounded-full bg-red-500 opacity-40 blur-xl sm:h-52 sm:w-52 md:h-80 md:w-80"></div>
        <div className="absolute left-1/3 top-1/2 -z-20 -ml-52 -mt-20 h-32 w-32 animate-circlesm rounded-full bg-green-600 opacity-40 blur-xl sm:h-52 sm:w-52 md:h-80 md:w-80"></div>
        <div className="w-15 h-15 sm:w-30 sm:h-30 absolute left-2/3 top-1/2 -z-20 -mt-72 ml-12 animate-circlexl rounded-full bg-cyan-600 opacity-40 blur-xl md:h-40 md:w-40"></div>
      </div>
      <div className="flex w-full animate-pulse items-center justify-center p-48 text-3xl text-white">
        LOADING...
      </div>
    </div>
  );
}
