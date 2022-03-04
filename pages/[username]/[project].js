import { useRouter } from 'next/router'
import { Navbar, Card } from 'react-bootstrap'
import TopBar from '../../components/top-bar'

export default function Project () {
  const router = useRouter()
  const { username, project } = router.query

  return (

      <div>
        <TopBar />
        <Card>
          <Card.Header>
            {project}
          </Card.Header>
          <Card.Body>
            <p>owner</p>
          </Card.Body>

        </Card>
        <p>Project Name: {project} </p>
        <p>User <a href={"/"+username}>{username}</a></p>
      </div>
  )

}
