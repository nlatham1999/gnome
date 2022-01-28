import { useRouter } from 'next/router'
import Layout from '../components/layout'

export default function User () {
  const router = useRouter()
  const { user } = router.query

  return (
    <Layout>
      <div>
        <p>User {user}</p>
      </div>
    </Layout>
  )

}
