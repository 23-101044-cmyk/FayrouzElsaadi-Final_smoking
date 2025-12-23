const header = document.querySelector('header');
const triggerSection = document.querySelector('#trigger-section');

window.addEventListener('scroll', () => {
    const sectionTop = triggerSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop - 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});


const heroBtn = document.querySelector('.herotext');
const targetSection = document.querySelector('#trigger-section');

heroBtn.addEventListener('click', () => {
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});



let tips = [
    {
        img: "card1",
        title: "EAT A LOLLIPOP",
        text: "Eating a lollipop helps by giving that same feeling of having a cigarette/e-cigarette in your hand. This works by tricking your brain by doing the same actions of when you’re smoking (having something in your hand that you bring up to your mouth every few seconds). Not just that but it is also delicious!",
    },
    {
        img: "card2",
        title: "CHEW SOME GUM",
        text: "Chewing gum is almost the same concept of eating a lollipop; however, it’s constantly in your mouth which leads you to always chewing which works as a distraction. You can pick a flavor that works with you the most, and why not blow a bubble while you’re at it?",
    },
    {
        img: "card3",
        title: "GET A FIDGET",
        text: "Getting a squishy or fidget that you can carry around is a great way to cope with cravings. Whenever a craving hits, take it out and fidget with it or give it a good squeeze. It’s a fun distraction that keeps your hands busy and helps you deal with the smoke monsters in a healthier way!",
    },
    {
        img: "card4",
        title: "QUIT WITH A FRIEND",
        text: "Quitting with a friend who also smokes can be a real motivator. You don’t have to go through this journey alone! Rule 1: no smoking. Rule 2: don’t let your buddy down. You can turn this into a competition between you two. If one fails, they owe the other a lifetime supply of gum and lollipops.",
    },


];


let html = "";
for (let i = 0; i < tips.length; i++) {
  html += `

                <div class="${tips[i].img}">
                    <h3>${tips[i].title}</h3>
                    <p class="textalign">${tips[i].text}</p>
                </div>
 
    
  `;
}

document.getElementById("tips").innerHTML = html;