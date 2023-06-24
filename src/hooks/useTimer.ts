import React, { useState } from "react";

export default function useTimer() {
  const [id, setId] =  useState<NodeJS.Timer>();
  const [timer, setTimer] = useState<{
    startTime: number;
    endTime: number;
    acc: number;
    status:'started'|'paused'|'initial';
  }>({ startTime: 0, endTime: 0, acc: 0, status:'initial'});

  const onStart = () => {
    setTimer((prev) => {
      return { ...prev, startTime: new Date().getTime(), status:'started'};
    });
    if(!id){
    setId (setInterval(() => {
      setTimer((prev) => {
        console.log('timer running');
        return { ...prev, acc: prev.acc + 1000 };
      });
    }, 1000))
  }
  };

  const onPause = () => {
    console.log('pause pressed')
    clearInterval(id);
    setId(undefined);
    setTimer((prev) => {
        return { ...prev, status:'paused'};
      });
  };

  const onReset = () => {
    clearInterval(id);
    setId(undefined);
    setTimer({ startTime: 0, endTime: 0, acc: 0, status:'initial' });
  };

  const onResume = () => {
    if(!id)setId(setInterval(() => {
      setTimer((prev) => {
        return { ...prev, acc: prev.acc + 1000, status:'started'};
      });
    }, 1000))
  };

  return { timer, onStart, onPause, onReset, onResume };
}
