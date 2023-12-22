import React, { useState } from 'react';
import Counter from "../Counter/Counter";


export default function BgChanger(){
  const [changeColor, setChangeColor] = useState('white');

  return (
    <>
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-end"
        style={{backgroundColor : changeColor}}
    >
      <div className='flex justify-center mb-32 flex-wrap'>
        <button className='bg-red-400 py-3 rounded-xl px-5 mx-5 text-white my-2'  onClick={() => setChangeColor("red")}> Red </button>
        <button className='bg-yellow-500 py-3 rounded-xl px-5 mx-5 text-white my-2' onClick={() => setChangeColor("yellow")} > Yellow </button>
        <button className='bg-green-500 py-3 rounded-xl px-5 mx-5 text-white my-2' onClick={() => setChangeColor("green")} > Green </button>
        <button className='bg-blue-500 py-3 rounded-xl px-5 mx-5 text-white my-2' onClick={() => setChangeColor("blue")} > blue </button>
        <button className='bg-purple-500 py-3 rounded-xl px-5 mx-5 text-white my-2' onClick={() => setChangeColor("purple")} > purple </button>
        <button className='bg-orange-500 py-3 rounded-xl px-5 mx-5 text-white my-2' onClick={() => setChangeColor("orange")} > Orange </button>
        <button className='bg-black py-3 rounded-xl px-5 mx-5 text-white my-2' onClick={() => setChangeColor("black")} > Black </button>
        <button className='bg-cyan-500 py-3 bg- rounded-xl px-5 mx-5 text-white my-2' onClick={() => setChangeColor("cyan")} > cyan </button>
      </div> 
    </div>
    <Counter />
    </>
  )
}