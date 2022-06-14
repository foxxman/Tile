import * as flsFunctions from "./modules/functions.js";
import * as reviewSliders from "./modules/review-sliders.js";
import * as saleSliders from "./modules/sale-sliders.js";
import * as catalogsMenus from "./modules/catalogs-dropdown.js";
import * as productCounter from "./modules/product-counter.js";
import * as zoomImg from "./modules/zoom-img.js";
import * as zoomSlider from "./modules/zoom-slider.js";
// import * as catalogsMenus from "./modules/catalogs-dropdown.js";
import * as collapsesBlocks from "./modules/collapses.js";
import * as accordions from "./modules/accordion.js";

flsFunctions.isWebp();
// LAZY LOAD====================
document.querySelectorAll("img").forEach((img) => img.classList.add("lazy"));

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

// HEADER MENU===============
const openHeaderMenu = document.querySelector(".header .open-menu");
const headerMenu = document.querySelector(".header .main-menu");
const headerSearchlineDropdown = document.querySelector(
  ".header-searchline__dropdown"
);
const openHeaderSearchline = document.querySelector(".header-searchline-open");

openHeaderMenu.addEventListener("click", () => {
  headerMenu.classList.toggle("hidden");
});
openHeaderSearchline.addEventListener("click", () => {
  headerSearchlineDropdown.classList.toggle("show");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnIteration: true,
  },
});
// OTHER===================================
reviewSliders.activateReviewSliders();
saleSliders.activateSaleSliders();
catalogsMenus.activateCatalogs();
// ================================================
collapsesBlocks.initCollapses();
productCounter.activateProductCounter();
zoomImg.activateZoom();
zoomSlider.activateZoomSliders();
accordions.activateAccordion();
