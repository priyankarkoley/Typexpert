'use client';

import React, { useState, useEffect } from 'react';

import ReactEcharts from 'echarts-for-react';
import Link from 'next/link';

export default function Page() {
  interface datatype {
    dateTime: string;
    wpm: number;
    acc: number;
  }
  const [options, setOptions] = useState<object>({});
  const [data, setData] = useState<datatype[]>();

  useEffect(() => {
    if (typeof window !== 'undefined')
      setData(JSON.parse(localStorage.getItem('data') || '[]'));
  }, []);

  useEffect(() => {
    window.addEventListener('storage', () => {
      setData(JSON.parse(localStorage.getItem('data') || '[]'));
    });
    if (data) {
      localStorage.setItem('data', JSON.stringify(data));
      const warr: number[] = [];
      const acarr: number[] = [];
      const timearr: string[] = [];
      for (let i = 0; i < data.length; i++) {
        warr.push(data[i].wpm);
        acarr.push(data[i].acc);
        timearr.push(data[i].dateTime);
      }
      setOptions({
        title: {
          text: 'Your Progress',
          textStyle: { color: '#ffffff' },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['WPM', 'Accuracy'],
          textStyle: { color: '#ffffff' },
        },
        color: ['#ff0000', '#00ff00'],
        textStyle: { color: '#ffffff' },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: timearr, // TODO
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'WPM',
            type: 'line',
            stack: 'Total',
            data: warr, // TODO
          },
          {
            name: 'Accuracy',
            type: 'line',
            stack: 'Total',
            data: acarr, // TODO
          },
        ],
      });
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center h-screen w-full relative flex-col">
      <div className="absolute -z-50 bg-fixed bg-gray-900 w-full h-full overflow-hidden">
        <div className="opacity-40 blur-xl rounded-full w-24 h-24 sm:w-44 sm:h-44 md:w-64 md:h-64 absolute top-1/2 -mt-10 left-2/3 -ml-32 animate-circlesm z-10 bg-violet-800" />
        <div className="opacity-40 blur-xl rounded-full w-44 h-44 sm:w-64 sm:h-64 md:w-96 md:h-96 absolute top-1/2 -mt-72 left-1/2 -ml-10 animate-circlemd -z-50 bg-yellow-600" />
        <div className="opacity-40 blur-xl rounded-full w-32 h-32 sm:w-52 sm:h-52 md:w-80 md:h-80 absolute top-1/2 -mt-80 left-1/3 -ml-32 animate-circlexl z-20 bg-red-500" />
        <div className="opacity-40 blur-xl rounded-full w-32 h-32 sm:w-52 sm:h-52 md:w-80 md:h-80 absolute top-1/2 -mt-20 left-1/3 -ml-52 animate-circlesm -z-20 bg-green-600" />
        <div className="opacity-40 blur-xl rounded-full w-15 h-15 sm:w-30 sm:h-30 md:w-40 md:h-40 absolute top-1/2 -mt-72 left-2/3 ml-12 animate-circlexl -z-20 bg-cyan-600" />
      </div>
      {data ? (
        data[0] ? (
          <>
            <div className="w-full h-96 px-10">
              <ReactEcharts option={options} />
            </div>
            <div className="flex gap-2">
              <button
                className="disabled:bg-stone-500 text-gray-950 font-bold tracking-wider bg-gray-200 bg-opacity-60 shadow-md hover:shadow-gray-900 shadow-gray-700 hover:bg-opacity-100 px-3 rounded-md h-10"
                onClick={() => {
                  localStorage.clear();
                  setData(JSON.parse('[]'));
                }}
              >
                CLEAR DATA
              </button>
              <Link
                href="/"
                className="disabled:bg-stone-500 text-gray-950 font-bold tracking-tight h-full bg-gray-200 bg-opacity-60 shadow-md hover:shadow-gray-900 shadow-gray-700 hover:bg-opacity-100 px-3 pt-2 rounded-md"
              >
                HOME
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="text-white p-48 w-full flex justify-center items-center text-2xl">
              There's no history yet. Go make some history and come back!
            </div>
            <Link
              className="disabled:bg-stone-500 text-gray-950 font-bold tracking-wider h-10 bg-gray-200 bg-opacity-60 shadow-md hover:shadow-gray-900 shadow-gray-700 hover:bg-opacity-100 px-3 rounded-md flex items-center"
              href="/"
            >
              Let's Make Some Data
            </Link>
          </>
        )
      ) : (
        <div className="text-white p-48 w-full flex justify-center items-center text-2xl animate-pulse">
          Loading... Just one more second!
        </div>
      )}
    </div>
  );
}
