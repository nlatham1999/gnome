import { useRouter } from 'next/router'
import { Navbar } from 'react-bootstrap'
import TopBar from '../../components/top-bar'

export default function Project () {
  const router = useRouter()
  const { username, project } = router.query

  return (

      <div>
        <TopBar />
        <p>Project Name: {project} </p>
        <p>User <a href={"/"+username}>{username}</a></p>
      </div>
  )

}
