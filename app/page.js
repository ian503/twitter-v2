'use client';
import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'


export default function Home() {
  
  
  return (
    <main className="flex min-h-screen mx-auto">
        
      <Sidebar />

      <Feed />

      <Widgets />
      
    </main>
  )
}






