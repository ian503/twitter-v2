import {SparklesIcon} from "@heroicons/react/24/outline"
import Input from "./Input"
import Post from "./Post"

export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Ioan Lupu",
            userName: "@ioan",
            userImg: "https://avatars.githubusercontent.com/u/71052435?v=4",
            img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
            text: "nice view!",
            timestamp: "2 hours ago"

        },
        {
            id: "2",
            name: "Ioan Lupu",
            userName: "@ioan",
            userImg: "https://avatars.githubusercontent.com/u/71052435?v=4",
            img: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
            text: "wow!",
            timestamp: "2 days ago"

        }
    ]
  return (
    <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-grey-200">
            <h4 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h4>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9 border-grey-200">
                <SparklesIcon className="h-5" />
            </div>
        </div>
        <Input />
        {posts.map((post)=>(
            <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}
