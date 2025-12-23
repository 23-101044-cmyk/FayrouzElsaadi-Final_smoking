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



const cards = [
  {
    title: "Professional Smoking Cessation Programs",
    text: "Structured smoking cessation programs led by trained healthcare professionals provide personalized guidance, evidence-based strategies, and ongoing support. These programs significantly increase long-term quit success by addressing both physical addiction and behavioral habits while offering accountability throughout the quitting process."
  },
  {
    title: "One-on-One Counseling",
    text: "Individual counseling sessions focus on understanding personal smoking triggers, stress responses, and emotional patterns. Through guided conversations and behavioral techniques, counseling helps build coping strategies, strengthen motivation, and reduce the likelihood of relapse over time."
  },
  {
    title: "Prescription Treatment Plans",
    text: "Doctor-prescribed medications are designed to safely reduce nicotine cravings and withdrawal symptoms. When combined with behavioral support, these treatment plans can make the quitting process more manageable and improve overall success rates without relying solely on willpower."
  },
  {
    title: "Quitlines & Telehealth Support",
    text: "National quitlines and telehealth services offer free, confidential access to trained counselors through phone calls or virtual appointments. These services provide convenient follow-ups, emotional encouragement, and practical quitting advice regardless of location or schedule."
  },
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    text: "Cognitive Behavioral Therapy helps individuals recognize and change negative thought patterns that contribute to smoking behavior. By reframing habits and responses to stress, CBT reduces relapse risk and supports long-term behavior change beyond initial quitting."
  },
  {
    title: "Trigger Identification & Tracking",
    text: "Tracking emotional, social, and environmental triggers allows individuals to better understand when and why cravings occur. Identifying these patterns makes it easier to prepare alternative responses and reduce automatic smoking behaviors in daily life."
  },
  {
    title: "Accountability & Support Systems",
    text: "Support from friends, family members, counselors, or structured groups increases accountability and motivation. Regular check-ins and encouragement help reinforce commitment and provide reassurance during difficult moments in the quitting journey."
  },
  {
    title: "Long-Term Relapse Prevention",
    text: "Relapse prevention focuses on maintaining progress after quitting through continued follow-ups, lifestyle adjustments, and coping strategies. Long-term planning helps individuals manage stress, avoid triggers, and sustain a smoke-free life."
  }
];



let cardhtml = "";

for (let i = 0; i < cards.length; i++) {
  cardhtml += `
        <div class="info-card">
      <h5 class="card-title">${cards[i].title}</h5>
      <p class="card-text">${cards[i].text}</p>
      <span class="read-more">Read more</span>
    </div>
  `;
}

document.querySelector(".cards-container").innerHTML = cardhtml;


const container = document.querySelector(".cards-container");

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("read-more")) return;

  container.classList.toggle("expanded");

  const expanded = container.classList.contains("expanded");
  document.querySelectorAll(".read-more").forEach(btn => {
    btn.textContent = expanded ? "Read less" : "Read more";
  });
});





const button = document.getElementById("toggle-mode");

button.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
