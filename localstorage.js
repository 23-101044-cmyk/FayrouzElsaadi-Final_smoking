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


 
let array1 = [
    {
        img: "assets/footerimg1.png",
        title: "Healthier Lungs",
        text: "Within weeks of quitting, lung function improves and breathing becomes easier.",
    },
        {
        img: "assets/footerimg2.png",
        title: "Financial Freedom",
        text: "Save thousands yearly and invest in what truly matters to you.",
    },
        {
        img: "assets/footerimg3.png",
        title: "Better Quality of Life",
        text: "More energy, better sleep, and improved overall well-being.",
    },

];


let html = "";
for (let i = 0; i < array1.length; i++) {
  html += `


                <div class="card2">
                    <div class="card22imgdiv">
                        <img src="${array1[i].img}" alt="" class="card22img">
                        <h5 class="card22title">${array1[i].title}</h5>
                    </div>
                    <p class="card22p">${array1[i].text}</p>
                </div>
        
    
  `;
}

document.getElementById("array1").innerHTML = html;


