"use strict";

const tontonGifs = [
  "https://tenor.com/view/sad-stitch-lilo-and-stitch-disney-sad-emotional-gif-7759620637003337609.gif",
  "https://tenor.com/view/playing-alone-lilo-and-stitch-isolato-gif-10582425.gif",
  "https://tenor.com/view/skystarlights-lilo-and-stitch-stitch-sad-stitch-gif-17385998405018607302.gif",
  "https://tenor.com/view/disney-plus-disney-sad-sad-eyes-sad-face-gif-15549594.gif",
  "https://tenor.com/view/stitch-sad-stitch-lilo-and-stitch-stitch-live-action-gif-15305168544037178489.gif",
  "https://tenor.com/view/stitch-crying-tears-gif-12968271.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "Yippie! You're my valentine now! 💗";
  btnContainer.classList.add("hidden");
  changeImage("yes");
});

noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "Nooo 😔",
    "Sure kana diyan? 🥺",
    "Baby girl please 🥹",
    "pls pls pls 😭",
    "aray ko 💔",
    "huhuhu 😭💔",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  img.src =
    image === "yes"
      ? "https://tenor.com/view/stitch-excited-stitch-love-gif-8371958827035965639.gif"
      : tontonGifs[image];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}