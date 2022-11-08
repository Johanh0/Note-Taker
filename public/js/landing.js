import gsap from "../../node_modules/gsap/all.js";

// GSAP Animations
gsap.from(`.landing-animation`, {y: 50, opacity: 0, duration: 1, stagger: .6});

const btnLanding = document.querySelector(`.btn`);

btnLanding.addEventListener(`click`, () => {
    document.location.href = `../html/notes.html`
})