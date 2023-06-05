/* eslint-disable react/jsx-key */

import News from "./News"
import Search from "./Search"

export default function Widgets() {
  
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
        <Search />
        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
            <h4 className="font-bold text-xl px-4">Whats happening</h4>
            <News />
        </div>
    </div>
  )
}