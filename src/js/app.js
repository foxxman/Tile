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
import * as header from "./modules/header.js";

flsFunctions.isWebp();
// LAZY LOAD====================
// document.querySelectorAll("img").forEach((img) => img.classList.add("lazy"));

var lazyLoadInstance = new LazyLoad({
  selector: "img", // all images
});

// HEADER MENU===============
header.initHeader();

// SLIDERS
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
// for block with zoom lens
zoomImg.activateZoom();
zoomSlider.activateZoomSliders();

accordions.activateAccordion();
// ===============================
