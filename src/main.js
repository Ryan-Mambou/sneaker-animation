import gsap from "gsap";

let shoeChoices = document.querySelectorAll(".shoe-choice");
let shoeImages = document.querySelectorAll(".shoe-image");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");

const shoeBorders = {
  "red-shoe": "2px solid red",
  "blue-shoe": "2px solid blue",
  "pink-shoe": "2px solid pink",
  "black-shoe": "2px solid black",
};

const getShoeId = (element) => {
  return element.getAttribute("id");
};

const addBorder = (shoe) => {
  shoeChoices.forEach((shoe) => (shoe.style.border = "none"));
  const shoeId = getShoeId(shoe);
  shoe.style.border = shoeBorders[shoeId];
};

const handleShoeImageDisplay = (shoeImage) => {
  shoeImages.forEach((shoeImage) => shoeImage.classList.add("hide-shoe"));
  shoeImage.classList.remove("hide-shoe");
};

const duration = 0.5;
const secondDuration = 1.5;
const easeElastic = "elastic.out(1,0.85)";

const animateCorrespondingShoe = (correspondingShoe, index = undefined) => {
  const tl = gsap.timeline();
  tl.to(correspondingShoe, {
    y: -30,
    duration: duration,
    ease: "power1.out",
  });
  tl.to(correspondingShoe, {
    rotate: 25,
    duration: duration,
    ease: "power1.out",
  });
  tl.to(correspondingShoe, {
    rotate: -10,
    duration: duration,
    ease: "power1.out",
  });
  tl.to(correspondingShoe, {
    y: 0,
    rotate: 0,
    duration: duration,
    ease: "power1.out",
    onComplete: () => {
      if (index) {
        const shoeChoice = document.querySelector(`.shoe-choice-${index}`);
        const shoeImage = document.querySelector(`.shoe-image-${index}`);
        addBorder(shoeChoice);
        handleShoeImageDisplay(shoeImage);
      }
    },
  });
};

shoeImages.forEach((shoeImage) => {
  shoeImage.addEventListener("click", () => {
    animateCorrespondingShoe(shoeImage);
  });
});

shoeChoices.forEach((shoe, index) => {
  shoe.addEventListener("click", () => {
    const displayedShoe = Array.from(shoeImages).find(
      (shoeImage) => !shoeImage.classList.contains("hide-shoe")
    );
    animateCorrespondingShoe(displayedShoe, index + 1);
  });
});

buttonOne.addEventListener("click", () => {
  gsap.to(".left-one", {
    x: 0,
    opacity: 1,
    duration: secondDuration,
    ease: easeElastic,
  });
  gsap.to(".right-one", {
    x: 0,
    opacity: 1,
    duration: secondDuration,
    ease: easeElastic,
  });
  gsap.to(".middle-one", {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    duration: secondDuration,
    ease: easeElastic,
  });
  gsap.to(".left-two", {
    x: -800,
    opacity: 0,
    duration: secondDuration,
    ease: easeElastic,
  });
  gsap.to(".right-two", {
    x: 800,
    opacity: 0,
    duration: secondDuration,
    ease: easeElastic,
  });
  gsap.to(".middle-two", {
    x: 800,
    y: -800,
    opacity: 0,
    rotate: 90,
    duration: secondDuration,
    ease: easeElastic,
  });
});

buttonTwo.addEventListener("click", () => {
  gsap.to(".left-two", {
    x: 0,
    opacity: 1,
    duration: secondDuration,
    ease: easeElastic,
  });
  gsap.to(".right-two", {
    x: 0,
    opacity: 1,
    duration: secondDuration,
    ease: easeElastic,
  });
  gsap.to(".middle-two", {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    duration: secondDuration,
    ease: easeElastic,
  });
  gsap.to(".left-one", {
    x: -800,
    opacity: 0,
    duration: secondDuration,
    ease: easeElastic,
  });
  gsap.to(".right-one", {
    x: 800,
    opacity: 0,
    duration: secondDuration,
    ease: easeElastic,
  });
  gsap.to(".middle-one", {
    x: -800,
    y: -800,
    rotate: -90,
    opacity: 0,
    duration: secondDuration,
    ease: easeElastic,
  });
});
