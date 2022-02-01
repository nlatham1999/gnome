import { useRouter } from 'next/router'
import Layout from '../components/layout'
import { getUserProjects } from '../lib/user'
import { GetServerSideProps } from 'next'

export async function getServerSideProps(context) {

  const { user } = context.query

  var data = getUserProjects(user)

  return {
    props: { "data": data}, // will be passed to the page component as props
  }
}

export default function User ({data}) {
  const router = useRouter()
  const { user } = router.query

  return (
    <Layout>
      <div>
        <p>User {user}</p>
        {/* {data[0].name} */}
        {data.map((project, i) => (
            <div class="card">
              <div class="card-header">
                  <a href={"/"+user+"/"+project.name}>{project.name}</a>
              </div>
              <div class="card-body">
                  <div>{project.description}</div>
              </div>
          </div> 
        ))}
      </div>
    </Layout>
  )

}
