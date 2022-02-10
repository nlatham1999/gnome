import { useRouter } from 'next/router'
import { Navbar } from 'react-bootstrap'
import TopBar from '../../components/top-bar'

export default function Project () {
  const router = useRouter()
  const { user, project } = router.query

  return (

      <div>
        <TopBar />
        <p>Project Name: {project} </p>
        <p>User <a href={"/"+user}>{user}</a></p>
      </div>
  )

}
