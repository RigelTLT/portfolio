import i18Obj from "./translate.js";
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
let lang = "en";
let theme = "ligth";
function setLocalStorage() {
  localStorage.setItem("lang", lang);
  localStorage.setItem("theme", theme);
}
window.addEventListener("beforeunload", setLocalStorage);
function getLocalStorage() {
  if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");
    getTheme(theme);
  }
  if (localStorage.getItem("lang")) {
    const lang = localStorage.getItem("lang");
    getTranslate(lang);
  }
}
window.addEventListener("load", getLocalStorage);
hamburger.onclick = function () {
  hamburger.classList.toggle("is-active");
  navList.classList.toggle("is-active");
};
function closeMenu(event) {
  if (event.target.classList.contains("nav__link")) {
    hamburger.classList.toggle("is-active");
    navList.classList.toggle("is-active");
  }
}
function changeImage(event) {
  if (event.target.classList.contains("portfolio__item")) {
    if (event.target.classList.contains("portfolio__item__light-theme")) {
      for (let i = 0; i < portfolioBtns.children.length; i++) {
        portfolioBtns.children[i].classList.remove(
          "button__active__light-theme"
        );
      }
      event.target.classList.add("button__active__light-theme");
    } else {
      for (let i = 0; i < portfolioBtns.children.length; i++) {
        portfolioBtns.children[i].classList.remove("button__active");
      }
      event.target.classList.add("button__active");
    }
    const portfolioImages = document.querySelectorAll(".portfolio__img");
    const targetSeason = event.target.dataset.season;
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `./assets/img/${targetSeason}/${index + 1}.jpg`)
    );
  }
}
function changeLanguage(event) {
  if (
    event.target.classList.contains("en") ||
    event.target.classList.contains("ru")
  ) {
    if (event.target.dataset.i18 === "ru") {
      lang = "ru";
    }
    if (event.target.dataset.i18 === "en") {
      lang = "en";
    }
    const languageItem = document.querySelectorAll(".link__language");
    languageItem.forEach((index) =>
      index.classList.remove("active__language__light-theme")
    );
    languageItem.forEach((index) => index.classList.remove("active__language"));
    if (event.target.classList.contains("link__language__light-theme")) {
      event.target.classList.add("active__language__light-theme");
    } else {
      event.target.classList.add("active__language");
    }

    const allLanguage = document.querySelectorAll("[data-i18]");
    allLanguage.forEach(
      (index) =>
        (index.textContent =
          i18Obj[event.target.dataset.i18][index.dataset.i18])
    );
    const contactInput = document.querySelectorAll(".contacts__item__input");
    contactInput.forEach(
      (index) =>
        (index.placeholder =
          i18Obj[event.target.dataset.i18][index.dataset.i18])
    );
    const message = document.querySelector(".contacts__item__message");
    message.placeholder = i18Obj[event.target.dataset.i18].message;
    message.value = "";
  }
}
function getTranslate(event) {
  const languageItem = document.querySelectorAll(".link__language");
  const selectedLanguage = document.querySelector(`.${event}`);
  languageItem.forEach((index) =>
    index.classList.remove("active__language__light-theme")
  );
  languageItem.forEach((index) => index.classList.remove("active__language"));
  if (selectedLanguage.classList.contains("link__language__light-theme")) {
    selectedLanguage.classList.add("active__language__light-theme");
  } else {
    selectedLanguage.classList.add("active__language");
  }
  const allLanguage = document.querySelectorAll("[data-i18]");
  allLanguage.forEach(
    (index) =>
      (index.textContent =
        i18Obj[selectedLanguage.dataset.i18][index.dataset.i18])
  );
  const contactInput = document.querySelectorAll(".contacts__item__input");
  contactInput.forEach(
    (index) =>
      (index.placeholder =
        i18Obj[selectedLanguage.dataset.i18][index.dataset.i18])
  );
  const message = document.querySelector(".contacts__item__message");
  message.placeholder = i18Obj[selectedLanguage.dataset.i18].message;
  message.value = "";
}
function preloadImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    const seasons = ["winter", "spring", "summer", "autumn"];
    seasons.forEach(
      (indexSeasons) => (img.src = `./assets/img/${indexSeasons}/${i}.jpg`)
    );
  }
}
function changeTheme(event) {
  if (event.target.classList.contains("icon__theme__light-theme")) {
    theme = "dark";
  } else {
    theme = "ligth";
  }
  const classTheme = [".logo", ".hero-title", ".hero-text"];
  const classThemeMilty = [
    ".skill__title",
    ".skill-text",
    ".price__title",
    ".price__text",
  ];
  const linksTheme = [".nav__link", ".footer__text"];
  const titlesSection = document.querySelectorAll(".title");
  const hamburgerLines = document.querySelectorAll(".line");
  const socialLinks = document.querySelectorAll(".icon");
  const buttonGold = document.querySelectorAll(".button__gold");
  const portfolioItem = document.querySelectorAll(".portfolio__item");
  const contactsItemInput = document.querySelectorAll(".contacts__item__input");
  const titlesSectionLine = document.querySelectorAll(".section__title");
  const linkLanguage = document.querySelectorAll(".link__language");
  classTheme.forEach((index) =>
    document.querySelector(`${index}`).classList.toggle("light-theme")
  );
  document
    .querySelectorAll(".git__text")
    .forEach((index) => index.classList.toggle("git__text__light-theme"));
  classThemeMilty.forEach((index) =>
    document
      .querySelectorAll(`${index}`)
      .forEach((i) => i.classList.toggle("light-theme"))
  );
  linksTheme.forEach((index) =>
    document
      .querySelectorAll(`${index}`)
      .forEach((i) => i.classList.toggle("links__light-theme"))
  );
  hamburgerLines.forEach((index) =>
    index.classList.toggle("line__light-theme")
  );
  socialLinks.forEach((index) => index.classList.toggle("icon__light-theme"));
  buttonGold.forEach((index) =>
    index.classList.toggle("button__gold__light-theme")
  );
  portfolioItem.forEach((index) =>
    index.classList.toggle("portfolio__item__light-theme")
  );
  contactsItemInput.forEach((index) =>
    index.classList.toggle("contacts__item__input__light-theme")
  );
  titlesSectionLine.forEach((index) =>
    index.classList.toggle("section__title__light-theme")
  );
  linkLanguage.forEach((index) =>
    index.classList.toggle("link__language__light-theme")
  );
  titlesSection.forEach((index) =>
    index.classList.toggle("title__light-theme")
  );
  document.querySelector(".body").classList.toggle("light-theme__body");
  document
    .querySelector(".icon__theme")
    .classList.toggle("icon__theme__light-theme");
  document
    .querySelector(".contacts__item__title")
    .classList.toggle("contacts__item__title__light-theme");
  document
    .querySelector(".container__header")
    .classList.toggle("container__header__light-theme");
  document
    .querySelector(".contacts__item__message")
    .classList.toggle("contacts__item__message__light-theme");
  document
    .querySelector(".hero__container")
    .classList.toggle("hero__container__light-theme");
  document
    .querySelector(".contacts__container")
    .classList.toggle("contacts__container__light-theme");
  document
    .querySelector(".button__active")
    .classList.toggle("button__active__light-theme");
  document
    .querySelector(".nav__list")
    .classList.toggle("nav__list__light-theme");
  if (document.querySelector(".active__language")) {
    document
      .querySelector(".active__language")
      .classList.add("active__language__light-theme");
    document
      .querySelector(".active__language")
      .classList.remove("active__language");
  } else if (document.querySelector(".active__language__light-theme")) {
    document
      .querySelector(".active__language__light-theme")
      .classList.add("active__language");
    document
      .querySelector(".active__language__light-theme")
      .classList.remove("active__language__light-theme");
  }
}
function getTheme(event) {
  if (
    (event === "dark" &&
      document
        .querySelector(".icon__theme")
        .classList.contains("icon__theme__light-theme")) ||
    (event === "ligth" &&
      !document
        .querySelector(".icon__theme")
        .classList.contains("icon__theme__light-theme"))
  ) {
    const classTheme = [".logo", ".hero-title", ".hero-text"];
    const classThemeMilty = [
      ".skill__title",
      ".skill-text",
      ".price__title",
      ".price__text",
    ];
    const linksTheme = [".nav__link", ".footer__text"];
    const titlesSection = document.querySelectorAll(".title");
    const hamburgerLines = document.querySelectorAll(".line");
    const socialLinks = document.querySelectorAll(".icon");
    const buttonGold = document.querySelectorAll(".button__gold");
    const portfolioItem = document.querySelectorAll(".portfolio__item");
    const contactsItemInput = document.querySelectorAll(
      ".contacts__item__input"
    );
    const titlesSectionLine = document.querySelectorAll(".section__title");
    const linkLanguage = document.querySelectorAll(".link__language");
    classTheme.forEach((index) =>
      document.querySelector(`${index}`).classList.toggle("light-theme")
    );
    document
      .querySelectorAll(".git__text")
      .forEach((index) => index.classList.toggle("git__text__light-theme"));
    classThemeMilty.forEach((index) =>
      document
        .querySelectorAll(`${index}`)
        .forEach((i) => i.classList.toggle("light-theme"))
    );
    linksTheme.forEach((index) =>
      document
        .querySelectorAll(`${index}`)
        .forEach((i) => i.classList.toggle("links__light-theme"))
    );
    hamburgerLines.forEach((index) =>
      index.classList.toggle("line__light-theme")
    );
    socialLinks.forEach((index) => index.classList.toggle("icon__light-theme"));
    buttonGold.forEach((index) =>
      index.classList.toggle("button__gold__light-theme")
    );
    portfolioItem.forEach((index) =>
      index.classList.toggle("portfolio__item__light-theme")
    );
    contactsItemInput.forEach((index) =>
      index.classList.toggle("contacts__item__input__light-theme")
    );
    titlesSectionLine.forEach((index) =>
      index.classList.toggle("section__title__light-theme")
    );
    linkLanguage.forEach((index) =>
      index.classList.toggle("link__language__light-theme")
    );
    titlesSection.forEach((index) =>
      index.classList.toggle("title__light-theme")
    );
    document.querySelector(".body").classList.toggle("light-theme__body");
    document
      .querySelector(".icon__theme")
      .classList.toggle("icon__theme__light-theme");
    document
      .querySelector(".contacts__item__title")
      .classList.toggle("contacts__item__title__light-theme");
    document
      .querySelector(".container__header")
      .classList.toggle("container__header__light-theme");
    document
      .querySelector(".contacts__item__message")
      .classList.toggle("contacts__item__message__light-theme");
    document
      .querySelector(".hero__container")
      .classList.toggle("hero__container__light-theme");
    document
      .querySelector(".contacts__container")
      .classList.toggle("contacts__container__light-theme");
    document
      .querySelector(".button__active")
      .classList.toggle("button__active__light-theme");
    document
      .querySelector(".nav__list")
      .classList.toggle("nav__list__light-theme");
    if (document.querySelector(".active__language")) {
      document
        .querySelector(".active__language")
        .classList.add("active__language__light-theme");
      document
        .querySelector(".active__language")
        .classList.remove("active__language");
    } else if (document.querySelector(".active__language__light-theme")) {
      document
        .querySelector(".active__language__light-theme")
        .classList.add("active__language");
      document
        .querySelector(".active__language__light-theme")
        .classList.remove("active__language__light-theme");
    }
  }
}
preloadImages();
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((el) => el.addEventListener("click", closeMenu));
const portfolioBtns = document.querySelector(".portfolio__items");
portfolioBtns.addEventListener("click", changeImage);
const languageList = document.querySelector(".language__list");
languageList.addEventListener("click", changeLanguage);
const themeBtns = document.querySelector(".icon__theme");
themeBtns.addEventListener("click", changeTheme);
const divPlayer = document.querySelector(".video-player");
const videoSection = document.querySelector(".viewer");
const buttonPlay = divPlayer.querySelector(".play");
const buttonPlayCenter = divPlayer.querySelector(".button__play");
const buttonVolume = divPlayer.querySelector(".volume");
const controlVol = divPlayer.querySelector(".slider__volume");
const controlProgress = divPlayer.querySelector(".slider__progress");
let drag;
let grap;
let dragVol;
let grapVol;
let progressing;

function stopPlayVideo() {
  if (videoSection.paused) {
    videoSection.play();
    buttonPlay.classList.toggle("play__pause");
    buttonPlayCenter.classList.toggle("button__play__disabled");
      updateProgress();
      progressing = window.setInterval(updateProgress, 200);
  } else {
    videoSection.pause();
    buttonPlay.classList.toggle("play__pause");
    buttonPlayCenter.classList.toggle("button__play__disabled");
    clearInterval(progressing);
  }
}
function updateVolume() {
  let volume = controlVol.value;
  videoSection.volume = volume;
  controlVol.style.background = `linear-gradient( to right, #bdae82 0%, #bdae82 ${volume*100}%, #c8c8c8 ${volume*100}%, #c8c8c8 100% )`;
  if (videoSection.volume === 0) {
    buttonVolume.classList.add("volume__mute");
  } else {
    buttonVolume.classList.remove("volume__mute");
  }
}

function muteVolume() {
  if (buttonVolume.classList.contains("volume__mute")) {
    videoSection.volume = controlVol.value;
    buttonVolume.classList.toggle("volume__mute");
  } else {
    videoSection.volume = 0;
    buttonVolume.classList.toggle("volume__mute");
  }
}

function updateProgress() {
  let progress = videoSection.currentTime / videoSection.duration;
  controlProgress.value = Math.floor(progress * 1000) / 10;
  controlProgress.style.background = `linear-gradient( to right, #bdae82 0%, #bdae82 ${controlProgress.value}%, #c8c8c8 ${controlProgress.value}%, #c8c8c8 100% )`;
  if(controlProgress.value == 100){
    clearInterval(progressing);
    buttonPlay.classList.toggle("play__pause");
    buttonPlayCenter.classList.toggle("button__play__disabled");
  }
  
}
function updateCurrentPos(){
  let newProgress = controlProgress.value / 100;
  controlProgress.style.background = `linear-gradient( to right, #bdae82 0%, #bdae82 ${controlProgress.value}%, #c8c8c8 ${controlProgress.value}%, #c8c8c8 100% )`;
  videoSection.currentTime = newProgress * videoSection.duration;
}

videoSection.addEventListener("click", stopPlayVideo);
buttonPlay.addEventListener("click", stopPlayVideo);
buttonPlayCenter.addEventListener("click", stopPlayVideo);
buttonVolume.addEventListener("click", muteVolume);
controlVol.addEventListener("change", updateVolume);
controlProgress.addEventListener('mouseover', function(){drag = true});
controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});
controlProgress.addEventListener('mousedown', function(){grap = drag});
controlProgress.addEventListener('mouseup', function(){grap = false});
controlProgress.addEventListener('click', updateCurrentPos);
controlProgress.addEventListener('mousemove', function(){ if(drag && grap){updateCurrentPos()}});
controlVol.addEventListener('mouseover', function(){dragVol = true});
controlVol.addEventListener('mouseout', function(){dragVol = false; grapVol = false});
controlVol.addEventListener('mousedown', function(){grapVol = dragVol});
controlVol.addEventListener('mouseup', function(){grapVol = false});
controlVol.addEventListener('mousemove', function(){ if(dragVol && grapVol){updateVolume()}});