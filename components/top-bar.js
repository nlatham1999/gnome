import { getUserName, isLoggedIn, logout } from "../lib/fake-data"
import { useRouter } from "next/router";
import Router from 'next/router'
import { useUser } from '@auth0/nextjs-auth0';

export default function TopBar () {

    const { user, error, isLoading } = useUser();
   
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if(!user) return <div>You should not be seeing this</div>

    return (
        <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="navbar-brand" href="/">gnome</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={"/"+user.nickname + "/projects"}>projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={"/community"}>community</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/api/auth/logout">Logout</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href={"/" + user.nickname}>{user.nickname}</a>
                    </li>
                    
                </ul>
                
            </div>

        </nav>
        </div>
    )
}