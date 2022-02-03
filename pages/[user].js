import { useRouter } from 'next/router'
import { getUserProjects } from '../lib/user'
import { GetServerSideProps } from 'next'
import TopBar from '../components/top-bar'

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
      <div>
        <TopBar />
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
  )

}
