import React, { useState } from 'react'

function Counter() {
  const [num, setNum ] = useState(0)
  return (
    <div className='flex justify-center items-center p-10 bg-black/60'>
      <button className='m-4 bg-blue-700 text-white px-4 py-2 rounded-lg'
      onClick={()=>setNum((prev)=> prev+1)}>plus</button>
      <p className='text-orange-400 text-3xl '>{num}</p>
      <button  className='m-4 bg-green-700 text-white px-4 py-2 rounded-lg' onClick={()=>setNum((prev)=> prev-1)}>minus</button>
    </div>
  )
}

export default Counter;