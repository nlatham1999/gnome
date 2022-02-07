import { getUserName, isLoggedIn, logout } from "../lib/fake-data"
import { useRouter } from "next/router";
import Router from 'next/router'

export default function TopBar () {

    const userName = getUserName()

    const router = useRouter();

    return (
        <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">gnome</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={"/"+userName + "/projects"}>projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={"/" + userName}>profile</a>
                    </li>
                    
                </ul>
                <a href="/api/auth/logout">Logout</a>
            </div>

        </nav>
        
        {isLoggedIn() && <div>YES</div>}
        {!isLoggedIn() && <div>NO</div>}
        </div>
    )

    function logoutUser(){
        // logout();
        Router.push("/")

    }
}