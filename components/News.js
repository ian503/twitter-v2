import NewsArticle from "./NewsArticle"
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
                    <NewsArticle key={article?.title} article={article}/>
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