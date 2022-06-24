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
import * as favourites from "./modules/favourites.js";
import * as comparison from "./modules/comparison.js";
import * as yaMap from "./modules/ya-map.js";
import * as custScroll from "./modules/custom-scrolling.js";
import * as imgComp from "./modules/img-comparison.js";
import * as aboutShop from "./modules/about-shop-slider.js";
import * as modalCart from "./modules/modal-cart.js";

$(document).ready(function () {
  new WOW().init();
});

flsFunctions.isWebp();

// скролл к форме обратной связи
const callRequestBtn = document.getElementById("call-request");
const callForm = document.getElementById("call-form");
if (callRequestBtn && callForm) {
  custScroll.scroll({ from: callRequestBtn, to: callForm });
}
// скролл к карте
const mapBlock = document.querySelector("#map-block");
const mapReference = document.querySelector("#ref-to-map");
if (mapReference && mapBlock) {
  custScroll.scroll({ from: mapReference, to: mapBlock });
}

// LAZY LOAD====================
var lazyLoadInstance = new LazyLoad({
  selector: "img", // all images
});
// SVG========================
$("img.img-svg").each(function () {
  var $img = $(this);
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");
  $.get(
    imgURL,
    function (data) {
      var $svg = $(data).find("svg");
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
        $svg.attr(
          "viewBox",
          "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
        );
      }
      $img.replaceWith($svg);
    },
    "xml"
  );
});
// HEADER MENU===============
header.initHeader();

// SLIDERS
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  // allowTouchMove: true,
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
  // breakpoints: {
  //   // when window width is >= 480px
  //   500: {
  //     allowTouchMove: false,
  //   },
  // },
});

const view = new Swiper(".slider-1", {
  slidesPerView: 1,
  spaceBetween: 10,

  loop: true,
  navigation: {
    nextEl: ".view-next",
    prevEl: ".view-prev",
  },
  // If we need pagination
  pagination: {
    el: ".view-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 480px
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    800: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  autoplay: {
    delay: 4000,
    disableOnIteration: true,
  },
});

const doubleImg = new Swiper(".slider-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  allowTouchMove: false,
  loop: true,
  navigation: {
    nextEl: ".view-next",
    prevEl: ".view-prev",
  },
  pagination: {
    el: ".view-pagination",
    clickable: true,
  },
  breakpoints: {},
});
aboutShop.initAboutShopSlider();
comparison.initTable(); //таблица

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
favourites.initButtons(); //кнопки добавления в избранное
yaMap.initMap(); //яндекс карта
imgComp.initNewComparisons(); //сравнение двух картинок с ползунком
modalCart.initOpenModalBtns(); // активация кнопок "в корзину" для открытия модалки
