import { useRouter } from 'next/router'

export default function Project () {
  const router = useRouter()
  const { user, project } = router.query

  return (
    <div>
      <p>Project Name: {project} </p>
      <p>User {user}</p>
    </div>
  )

}
