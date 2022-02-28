import TopBar from "../../components/top-bar";
import UserProjects from "../../components/user-projects";
import NewProject from "../../components/new-project";

import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router'

import { getUserProjects } from "../../lib/user";

export default function Projects () {
    
    const router = useRouter()
    const { username } = router.query


    const { user, error, isLoading } = useUser();
   
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    const projects = getUserProjects(username);
    
    return (

        <div>
            <TopBar />
            {user && user.nickname === username && <NewProject />}
            <UserProjects projects={projects} />
        </div>
            
    )
}