import React, { useEffect, useState } from 'react'
import { useLoaderData , Link} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <p className='text-3xl font-semibold p-3'>Github followers: {data.followers}</p>
    <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-full inline-block m-4 '/>
    <Link to={data["html_url"]}>
    <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" width={100}  height={100} className='inline-block mx-36 cursor-pointer' />
    </Link>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/0PrashantYadav0')
    return response.json()
}