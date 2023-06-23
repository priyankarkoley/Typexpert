import React from 'react'

export default function Leftbar({totalTime, settotalTime, text, setText} :{totalTime:number, settotalTime:any, text:string, setText:any}) {
  let wpm = (text.length/5)/(totalTime/6000);
  return (
    <div className='w-full'>
      <div>Your current typiing speed is: {(wpm)?Math.round(wpm):"000"} wpm.</div>
    </div>
  )
}
