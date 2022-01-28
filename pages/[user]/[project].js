import { useRouter } from 'next/router'
import Layout from '../../components/layout'

export default function Project () {
  const router = useRouter()
  const { user, project } = router.query

  return (
    <Layout>
      <div>
        <p>Project Name: {project} </p>
        <p>User {user}</p>
      </div>
    </Layout>
  )

}
