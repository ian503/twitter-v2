/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import useSWR from 'swr' 
import axios from 'axios'
import { useState } from "react"

const fetcher = url => axios.get(url).then(res => res.data)


export default function News() {
    const { newsResults, isLoading, isError } = getNews()
    const [articleNum, setArticleNum] = useState(3);
    
    if (isLoading) return <div className="text-green-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%] flex items-center justify-between px-4 py-2 space-x-1">loading...</div>
    if (isError) return <div className="text-red-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">failed to load</div>
    return (
        <div >
            {newsResults.articles.slice(0,articleNum).map((article)=>(
                <a rel="noreferrer" href={article.url} target="_blank">
                    <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-500 ease-out">
                    <div className="space-y-0.5">
                        <h6 className="text-sm font-bold">{article.title}</h6>
                        <p className="text-xs font-medium text-gray-500">
                        {article.source.name}
                        </p>
                    </div>
                    <img
                        className="rounded-xl "
                        width="70"
                        src={article.urlToImage}
                        alt=""
                    />
                    </div>
                </a>
                ))
            }
            
            <button onClick={() => setArticleNum(articleNum+3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-500">Show more</button>
        </div>
        
    )
}

function  getNews() {
    const { data, error, isLoading } = useSWR('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json', fetcher);
    
    return {
        newsResults: data,
        isLoading,
        isError: error
    }
  }