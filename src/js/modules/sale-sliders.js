export const activateSaleSliders = () => {
  document.querySelectorAll(".items-track").forEach((itemTrack) => {
    // console.log(itemTrack);
    itemTrack.addEventListener("click", ({ target }) => {
      const chosenBtn = target.closest(".sale-img-btn");
      // console.log(chosenBtn);

      if (chosenBtn) {
        let resultIndex = 0;
        itemTrack.querySelectorAll(".sale-img-btn").forEach((el, index) => {
          if (el === chosenBtn) resultIndex = index;

          const parentBlock = itemTrack.closest(".catalog__block__sale-images");
          const images = parentBlock.querySelectorAll(".image-item");

          images.forEach((img, index) => {
            if (index === resultIndex) img.classList.remove("hidden");
            else img.classList.add("hidden");
          });
        });
      }
    });
  });
};
