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

const activateGeneralSlide = (activeIndex, slides) => {
  slides.forEach((slide, index) => {
    if (index === activeIndex) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });
};

const activateGeneral = () => {
  let activeSlideIndex = 0;
  const reviewBlock = document.querySelector(".review");

  if (reviewBlock) {
    const slides = reviewBlock.querySelectorAll(
      ".review__track .review__content"
    );

    const btnPrev = reviewBlock.querySelector(
      ".review__changer .review__changer-previous"
    );
    const btnNext = reviewBlock.querySelector(
      ".review__changer .review__changer-next"
    );

    activateGeneralSlide(activeSlideIndex, slides);

    btnNext.addEventListener("click", () => {
      if (++activeSlideIndex === slides.length) {
        activeSlideIndex = 0;
      }
      activateGeneralSlide(activeSlideIndex, slides);
    });

    btnPrev.addEventListener("click", () => {
      if (--activeSlideIndex < 0) {
        activeSlideIndex = slides.length - 1;
      }
      activateGeneralSlide(activeSlideIndex, slides);
    });
  }
};

export const activateReviewSliders = () => {
  // console.log(
  //   document.querySelectorAll(".review-slider__changer").length !== 0
  // );
  if (document.querySelectorAll(".review-slider__changer").length !== 0) {
    console.log(true);
    activateInternal();
    activateGeneral();
  }
};
