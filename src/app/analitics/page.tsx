"use client";
import React from "react";
import { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function page() {
interface datatype{
  dateTime: string,
  wpm: number,
  acc: number
}

  const [data, setData] = useState<datatype[]>(
    JSON.parse(localStorage.getItem("data") || "{}")
  );
  const [wpmArray, setWpmArray] = useState<number[]>([]);
  const [accArray, setAccArray] = useState<number[]>([]);
  const [timeArray, setTimeArray] = useState<string[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data") || "{}");
    if (items) {
      setData(items);
    }
    let warr:number[]=[],acarr:number[]=[], timearr:string[]=[];

    for(let i=0; i<data.length; i++) {
      warr.push(data[i].wpm);
      acarr.push(data[i].acc);
      timearr.push(data[i].dateTime);
    }
      setWpmArray(warr);
  
      setAccArray(acarr);
  
      setTimeArray(timearr);
    

  }, []);

  

  const option = {
    title: {
      text: "Your Progress",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["WPM", "Accuracy"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: timeArray, //TODO
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "WPM",
        type: "line",
        stack: "Total",
        data: wpmArray, //TODO
      },
      {
        name: "Accuracy",
        type: "line",
        stack: "Total",
        data: accArray, //TODO
      },
    ],
  };

  return (
    <div className="">
      {/* {data[0]} */}
      <ReactEcharts option={option} />
    </div>
  );
}
