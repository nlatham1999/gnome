

export default function TopBarLoggedIn({user}){

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
                    {/* <li class="nav-item">
                        <a class="nav-link" href={"/community"}>community</a>
                    </li> */}
                    <li class="nav-item">
                        <a class="nav-link" href={"/" + user.nickname}>{user.nickname}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/api/auth/logout">logout</a>
                    </li>
                    
                </ul>
                
            </div>

        </nav>
        </div>
    );
}