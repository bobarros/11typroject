import AnimationScroll from "./modules/AnimationScroll.js";
import FormHandle from "./modules/FormHandle.js";
import SubmitForm from "./modules/SubmitForm.js";
import SlideShow from "./modules/SlideShow.js";
import NavMobile from "./modules/NavMobile.js";

let animationScroll = new AnimationScroll();
let formHandle = new FormHandle();
let submitForm = new SubmitForm();
let navMobile = new NavMobile();

// Only for index

if (window.location.pathname === "/") {
  let slideShow = new SlideShow();
}

//avoiding any transition glitch when the page loads

window.addEventListener("load", function () {
  document.body.classList.remove("preload");
});

