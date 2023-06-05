/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/24/solid";
import {HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, EllipsisHorizontalIcon, 	EllipsisHorizontalCircleIcon} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
        <div className = "hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
        </div>

        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
        </div>

        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shaodow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        <div className="hoverEffect text-grey-700 flex items-center justify-center xl:justify-start mt-auto">
            <img 
                src="https://avatars.githubusercontent.com/u/71052435?v=4" 
                alt="user-img"
                className="h-10 w-10 rounded-full xl:mr-2"
            />
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">Ioan Lupu</h4>
                <p className="text-gray-500">@someplace</p>
            </div>
            <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />

        </div>
    
    </div>
  )
}
