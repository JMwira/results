import { useState } from 'react'
import {RiFlashlightLine, RiChatSmile3Line} from "react-icons/ri"
import {PiBrainBold} from "react-icons/pi"
import {GoEye} from "react-icons/go"
import './App.css'
import data from "./data.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-full justify-center ' >
      <div className='flex lg:flex-row flex-col items-center text-white lg:w-[60%] w-[100%] gap-4 justify-center lg:pr-4 pr-0 h-[80%] lg:mt-[13%] lg:shadow-xl rounded-xl' >
        <div className='flex w-full lg:flex-1 items-center gap-3 flex-col bg-gradient-to-b from-one to-two lg:rounded-xl rounded-b-3xl p-4 py-8' >
          <span className='font-bold text-slate-200' >Your result</span>
          <div className='flex flex-col gap-2 bg-gradient-to-b from-three to-four w-fit rounded-full p-12 py-10' >
            <div className='flex flex-col p-4' >
              <span className='lg:text-7xl text-6xl text-white font-extrabold' >
                76
                {
                  data.map(i=>{
                    i.score[i]
                  })
                }
              </span>
              <span className='text-slate-300 font-bold' >
                of 100
              </span>
            </div>
          </div>
          <span className='text-xl' >
            Great
          </span>
          <span className='text-slate-300' >
            You scored higher than 65% of the people who have taken these tests.
          </span>
        </div>
        <div className='flex w-full lg:flex-1 flex-col gap-2 lg:px-0 px-4 lg:pb-0 pb-5 text-gray-800' >
          <span className='text-left font-bold'>Summary</span>
          {
            data.map(i=>(
              <div className={i.category=="Reaction"?'bg-opacity-20 p-3 rounded-md bg-red-300 flex justify-between flex-row gap-2 items-center':i.category=='Memory'?'bg-opacity-20 p-3 rounded-md bg-yellow-300 flex justify-between flex-row gap-2 items-center':i.category=='Verbal'?'bg-opacity-20 p-3 rounded-md bg-green-300 flex justify-between flex-row gap-2 items-center':'bg-opacity-20 p-3 rounded-md bg-violet-300 flex justify-between flex-row gap-2 items-center'}>
                <div className='flex flex-row items-center gap-2' >
                  {
                    i.category=='Reaction'?
                    <RiFlashlightLine className='text-red-600'/>
                    :i.category=='Memory'?
                    
              <PiBrainBold className='text-yellow-600'/>
                    :i.category=='Verbal'?
                    
              <RiChatSmile3Line className='text-green-600'/>
                    :i.category=='Visual'&&
                    
              <GoEye className='text-blue-600' />
                    
                  }
                <span className='font-bold' >
                  <span className={i.category=='Reaction'?'text-red-600':i.category=='Memory'?'text-yellow-600':i.category=='Verbal'?'text-green-600':'text-blue-600'} >
                    {i.category}
                  </span>
                </span>
                </div>
                <div className='flex flex-row gap-2' >
                  <span className='font-semibold' >{i.score}</span>
                  <span className='text-slate-400 font-bold' >/ 100</span>
                </div>
              </div>
            ))
          }
          <div className='p-3 mt-5 bg-gray-800 hover:bg-gradient-to-r from-one to-two text-white rounded-full' >
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
