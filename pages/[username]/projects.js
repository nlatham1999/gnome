import TopBar from "../../components/top-bar";
import UserProjects from "../../components/user-projects";
import NewProject from "../../components/new-project";
import clientPromise from "../../lib/mongodb";

import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router'

import { getUserProjects } from "../../lib/user";


export async function getServerSideProps(context) {

    var username = context.params.username

    const client = await clientPromise;

    const db = client.db("cluster0");

    let projects = await db.collection("projects").find({user: username}).toArray();
    projects = JSON.parse(JSON.stringify(projects));
  
    return {
      props: { projects },
    };
  }

export default function Projects ({projects}) {
    
    const router = useRouter()
    const { username } = router.query


    const { user, error, isLoading } = useUser();
   
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    
    return (

        <div>
            <TopBar />
            {user && user.nickname === username && <NewProject />}
            <UserProjects projects={projects} />
        </div>
            
    )
}