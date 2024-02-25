import React from 'react';
import Link from 'next/link';


export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full relative flex-col">
      <div className="absolute -z-50 bg-fixed bg-gray-900 w-full h-full overflow-hidden">
        <div className="opacity-40 blur-xl rounded-full w-24 h-24 sm:w-44 sm:h-44 md:w-64 md:h-64 absolute top-1/2 -mt-10 left-2/3 -ml-32 animate-circlesm z-10 bg-violet-800"></div>
        <div className="opacity-40 blur-xl rounded-full w-44 h-44 sm:w-64 sm:h-64 md:w-96 md:h-96 absolute top-1/2 -mt-72 left-1/2 -ml-10 animate-circlemd -z-50 bg-yellow-600"></div>
        <div className="opacity-40 blur-xl rounded-full w-32 h-32 sm:w-52 sm:h-52 md:w-80 md:h-80 absolute top-1/2 -mt-80 left-1/3 -ml-32 animate-circlexl z-20 bg-red-500"></div>
        <div className="opacity-40 blur-xl rounded-full w-32 h-32 sm:w-52 sm:h-52 md:w-80 md:h-80 absolute top-1/2 -mt-20 left-1/3 -ml-52 animate-circlesm -z-20 bg-green-600"></div>
        <div className="opacity-40 blur-xl rounded-full w-15 h-15 sm:w-30 sm:h-30 md:w-40 md:h-40 absolute top-1/2 -mt-72 left-2/3 ml-12 animate-circlexl -z-20 bg-cyan-600"></div>
      </div>
      <div className="text-white p-48 w-full flex justify-center items-center text-3xl animate-pulse">
        LOADING...
      </div>
    </div>
  );
}
