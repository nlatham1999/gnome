
export function getUserProjects(username){
    return [
        {
            "username": username,
            "name": "project 1",
            "description": "this is project 1"
        },
        {
            "username": username,
            "name": "project 2",
            "description": "this is project 2"
        }
    ]
}

export function getUserProfile(username){
    return {
            website: "https://nicholaslatham.com",
            bio: "hi my name is user and i work at company welcome to my projects page. Make sure to check out project a",
            company: "company a",
            following: [
                {
                    name: "rahul281",
                    bio: "works at company a"
                },
                {
                    name: "bill21",
                    bio: "scientist at b"
                }
            ],
            followers: [
                {
                    name: "rahul281",
                    bio: "works at company a"
                },
                {
                    name: "bill21",
                    bio: "scientist at b"
                }
            ]
        };
}

export function setProfileData(username, data){
    // @TODO do this
}