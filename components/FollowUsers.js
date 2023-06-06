/* eslint-disable @next/next/no-img-element */
import useSWR from 'swr' 
import axios from 'axios'
import { useState } from "react"

const fetcher = url => axios.get(url).then(res => res.data)

export default function FollowUsers() {
    const { randomUsersResults, isLoading, isError } = getRandomUsers()
    const [randomUserNum, setRandomUserNum] = useState(3)
  
    if (isLoading) return <div className="text-green-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%] flex items-center justify-between px-4 py-2 space-x-1">loading...</div>
    if (isError) return <div className="text-red-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">failed to load</div>
    return (
        <div >
        {randomUsersResults?.results.slice(0,randomUserNum).map((randomUser)=>(
            <div
                key={randomUser.login.username}
                className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200 transition duration-500 ease-out"
              >
                <img
                  className="rounded-full"
                  width="40"
                  src={randomUser.picture.thumbnail}
                  alt=""
                />
                <div className="truncate ml-4 leading-5">
                  <h4 className="font-bold hover:underline text-[14px] truncate">
                    {randomUser.login.username}
                  </h4>
                  <h5 className="text-[13px] text-gray-500 truncate">
                    {randomUser.name.first + " " + randomUser.name.last}
                  </h5>
                </div>
                <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
                  Follow
                </button>
              </div>
            ))
        }
        
        <button onClick={() => setRandomUserNum(randomUserNum+3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-500">Show more</button>
    </div>
  )
}

function  getRandomUsers() {
    const { data, error, isLoading } = useSWR('https://randomuser.me/api/?results=30&inc=name,login,picture', fetcher);
    
    return {
        randomUsersResults: data,
        isLoading,
        isError: error
    }
  }
