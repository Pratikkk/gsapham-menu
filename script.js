console.clear();
gsap.registerPlugin(DrawSVGPlugin);
const colorArray = ["#ffffff", "#46a4cc", "#94c356", "#eae047", "#e3aa59", "#a63ba0", "#cf5b21"];
let colorSwatches = document.querySelectorAll("circle");
const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

gsap.set("#theBurger", { autoAlpha: 1 });
gsap.set(".buns", { drawSVG: "0% 30%" });
gsap.set(".letters", { drawSVG: "53.5% 100%", x: -155 });

for (let i = 0; i < colorSwatches.length; i++) {
    gsap.set(colorSwatches[i], { fill: colorArray[i] });
    colorSwatches[i].index = i;
    colorSwatches[i].addEventListener("click", colorChange);
}

tl.to(".patty", { duration: 0.35, drawSVG: "50% 50%" }, 0);
tl.to(".patty", { duration: 0.1, opacity: 0, ease: "none" }, 0.25);
tl.to(".buns", { duration: 0.85, drawSVG: "69% 96.5%" }, 0);
tl.to(".letters", { duration: 0.85, drawSVG: "0% 53%", x: 0 }, 0);
tl.reversed(true);

function colorChange() {
    gsap.to("#burger, .letters", 0.5, {
        stroke: colorArray[this.index],
        ease: "none"
    });
}

document.querySelector("#theBurger").addEventListener("click", animateTheBurger);

function animateTheBurger() {
    tl.reversed(!tl.reversed());
}
