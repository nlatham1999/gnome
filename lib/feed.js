

export function getUserFeed(user){

    var data = []
    /*
        get feed from mongDB
    */
    //temp
    data = [
        {
            who: "DaveSmith92",
            action: "liked",
            what: "phage1382",
            second_what: "",
            second_who: "nicholaslatham1999"
        },
        {
            who: "DaveSmith92",
            action: "replicated",
            what: "phage1382",
            second_what: "phage1382",
            second_who: "nicholaslatham1999"
        },
        {
            who: "JaneJordan94",
            action: "created",
            what: "section218",
            second_what: "",
            second_who: "JaneJordan94"
        },
        {
            who: "Rahul1931",
            action: "replicated",
            what: "section218",
            second_what: "section218",
            second_who: "JaneJordan94"
        },
    ]

    return data;
}