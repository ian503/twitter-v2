import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'



export default function Home({newsResults, randomUsersResults}) {
  
  
  return (
    <main className="flex min-h-screen mx-auto">
        
      <Sidebar />

      <Feed />

      <Widgets  newsResults={newsResults?.articles}/>

      <div>api results</div>
      <div>{newsResults}</div>
      <div>{randomUsersResults}</div>
    </main>
  )
}


// https://saurav.tech/NewsAPI/top-headlines/category/bussiness/us.json


export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  // Who to follow section

  let randomUsersResults = [];

  try {
    const res = await fetch(
      "https://randomuser.me/api/?results=30&inc=name,login,picture"
    );

    randomUsersResults = await res.json();
  } catch (e) {
    randomUsersResults = [];
  }

  // const randomUsersResults = await fetch(
  //   "https://randomuser.me/api/?results=30&inc=name,login,picture"
  // ).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}