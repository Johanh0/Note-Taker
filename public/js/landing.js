// GSAP Animations
gsap.from(`.landing-animation`, {y: 50, opacity: 0, duration: 1, stagger: .6});

const btnLanding = document.querySelector(`.btn`);

btnLanding.addEventListener(`click`, () => {
    window.location.replace(`/notes`);

})