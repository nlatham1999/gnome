import { useRouter } from 'next/router'
import { getUserProjects, getUserProfile } from '../lib/user'
import { GetServerSideProps } from 'next'
import TopBar from '../components/top-bar'
import UserPage from "../components/user-page"


export async function getServerSideProps(context) {

  const { user } = context.query

  var data = getUserProjects(user)
  var profileData = getUserProfile(user)


  return {
    props: { 
        "data": data,
        "profileData": profileData
    }, // will be passed to the page component as props
  }
}

export default function User ({data, profileData}) {
  const router = useRouter()
  const { user } = router.query

  

  return (
      <div>
        <TopBar />

        <UserPage userName={user} data={data} profileData={profileData}/>
        {/* {data[0].name} */}
        
      </div>
  )

}
