import React from 'react'

export default function Dashboard({totalTime, settotalTime, text, setText} :{totalTime:number, settotalTime:any, text:string, setText:any}) {
  let wpm = (text.length/5)/(totalTime/6000);
  return (
    <div className='space-y-8 py-6 w-full p-6'>
      <div className='md:text-2xl lg:text-3xl flex items-center'>YOUR DASHBOARD:</div>
      <div>
        <div>Your current typiing speed is: </div>
        <div> {(wpm)?Math.round(wpm):"000"} wpm.</div>
      </div>
    </div>
  )
}
