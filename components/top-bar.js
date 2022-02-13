import { getUserName, isLoggedIn, logout } from "../lib/fake-data"
import { useRouter } from "next/router";
import Router from 'next/router'
import { useUser } from '@auth0/nextjs-auth0';
import TopBarLoggedIn from "./top-bar-logged-in";
import TopBarLoggedOut from "./top-bar-logged-out";

export default function TopBar () {

    const { user, error, isLoading } = useUser();
   
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if(!user) return <div><TopBarLoggedOut /></div>

    return (
        <TopBarLoggedIn user={user} />
    )
}