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

const turnSlide = (slides, activeSlide) => {
  slides.forEach((slide, index) => {
    if (index === activeSlide) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });
};

const activateGeneral = () => {
  const review = document.querySelector(".review");
  if (review) {
    const changer = review.querySelector(".review__changer");
    const track = review.querySelector(".review__track");
    const slides = track.querySelectorAll(".review__content");
    let activeSlide = 0;
    turnSlide(slides, activeSlide);

    changer.addEventListener("click", ({ target }) => {
      if (target.closest(".review__changer-previous")) {
        activeSlide--;
        if (activeSlide < 0) activeSlide = slides.length - 1;
      } else if (".review__changer-next") {
        activeSlide++;
        if (activeSlide > slides.length - 1) activeSlide = 0;
      }

      turnSlide(slides, activeSlide);
    });
  }
};

export const activateReviewSliders = () => {
  const insideReview = new Swiper(".review-slider", {
    slidesPerView: 1,
    loop: true,
    nested: true,
    pagination: {
      el: ".review-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnIteration: true,
    },
  });

  // const review = new Swiper(".review", {
  //   slidesPerView: 1,
  //   nested: false,
  //   allowTouchMove: false,
  //   loop: true,
  //   navigation: {
  //     nextEl: ".review__changer-next",
  //     prevEl: ".review__changer-previous",
  //   },
  // });

  if (document.querySelectorAll(".review-slider__changer").length !== 0) {
    activateInternal();
    activateGeneral();
  }
};
