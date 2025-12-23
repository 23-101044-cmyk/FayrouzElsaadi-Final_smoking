users=[
    {
        username: "fay",
        password: 123,
        fname: "fayrouz",
        lname: "elsaadi",
        // img: URL(),
        color: "#172",
        age: 19,
    },
        {
        username: "jan",
        password: 456,
        fname: "janna",
        lname: "eissa",
        // img: URL(),
        color: "#638",
        age: 21,
    }
];

 localStorage.setItem("localusers", JSON.stringify(users) );