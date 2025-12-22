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
