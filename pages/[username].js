import { useRouter } from 'next/router'
import { getUserProjects, getUserProfile } from '../lib/user'
import { GetServerSideProps } from 'next'
import TopBar from '../components/top-bar'
import UserPage from "../components/user-page"
import clientPromise from "../lib/mongodb";


export async function getServerSideProps(context) {

  const { username } = context.query

  var data = getUserProjects(username)
  
  const client = await clientPromise;

  const db = client.db("cluster0");
  
  var profileData = await db.collection("users").find({user: username}).toArray();
  profileData = JSON.parse(JSON.stringify(profileData[0]));

  console.log(profileData[0])

  return {
    props: { 
        "data": data,
        "profileData": profileData
    }, // will be passed to the page component as props
  }
}

export default function User ({data, profileData}) {
  const router = useRouter()
  const { username } = router.query

  

  return (
      <div>
        <TopBar />

        <UserPage userName={username} data={data} profileData={profileData}/>
        {/* {data[0].name} */}
        
      </div>
  )

}
