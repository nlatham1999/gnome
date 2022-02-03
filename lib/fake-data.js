
export const user = {
    name: "nlatham1999"
}

var loggedIn = false

export function getUser () {
    return user
}

export function isLoggedIn(){
    return loggedIn
}

export function login() {
    loggedIn = true
}

export function logout() {
    loggedIn = false;
    console.log("ENTERING")
}

export function getUserName(){
    return user.name
}