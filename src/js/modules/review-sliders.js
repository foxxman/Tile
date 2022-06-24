const activateInternal = () => {
  const reviewSliderChangers = document.querySelectorAll(
    ".review-slider__changer"
  );
  reviewSliderChangers.forEach((reviewSliderChanger) =>
    reviewSliderChanger.addEventListener("click", ({ target }) => {
      const chosenBtn = target.closest("button");

      if (!chosenBtn.classList.contains("review-slider__changer-active")) {
        reviewSliderChanger
          .querySelectorAll("button")
          .forEach((el) =>
            el.classList.toggle("review-slider__changer-active")
          );
        reviewSliderChanger
          .closest(".review__content")
          .querySelectorAll(".review-slider")
          .forEach((el) => el.classList.toggle("review-slider-hidden"));
      }
    })
  );
};

// const activateGeneralSlide = (activeIndex, slides) => {
//   slides.forEach((slide, index) => {
//     if (index === activeIndex) {
//       slide.classList.remove("hidden");
//     } else {
//       slide.classList.add("hidden");
//     }
//   });
// };

// const activateGeneral = () => {
//   let activeSlideIndex = 0;
//   const reviewBlock = document.querySelector(".review");

//   if (reviewBlock) {
//     const slides = reviewBlock.querySelectorAll(
//       ".review__track .review__content"
//     );

//     const btnPrev = reviewBlock.querySelector(
//       ".review__changer .review__changer-previous"
//     );
//     const btnNext = reviewBlock.querySelector(
//       ".review__changer .review__changer-next"
//     );

//     activateGeneralSlide(activeSlideIndex, slides);

//     btnNext.addEventListener("click", () => {
//       if (++activeSlideIndex === slides.length) {
//         activeSlideIndex = 0;
//       }
//       activateGeneralSlide(activeSlideIndex, slides);
//     });

//     btnPrev.addEventListener("click", () => {
//       if (--activeSlideIndex < 0) {
//         activeSlideIndex = slides.length - 1;
//       }
//       activateGeneralSlide(activeSlideIndex, slides);
//     });
//   }
// };

export const activateReviewSliders = () => {
  // const review = new Swiper(".review", {
  //   slidesPerView: 1,
  //   allowTouchMove: false,
  //   loop: true,
  //   navigation: {
  //     nextEl: ".review__changer-next",
  //     prevEl: ".review__changer-previous",
  //   },
  // });
  const insideReview = new Swiper(".review-slider", {
    slidesPerView: 1,
    // allowTouchMove: false,
    loop: true,
    pagination: {
      el: ".review-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 4000,
      disableOnIteration: true,
    },
  });

  if (document.querySelectorAll(".review-slider__changer").length !== 0) {
    // console.log(true);
    activateInternal();
    // activateGeneral();
  }
};
