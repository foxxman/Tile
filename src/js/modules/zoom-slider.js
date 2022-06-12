const initSlider = (slider) => {
  const content = slider
    .querySelector("[data-zoom-content]")
    .querySelectorAll("[data-zoom-order]");
  const list = slider.querySelector("[data-zoom-list]");

  list.addEventListener("click", ({ target }) => {
    const chosenItem = target.closest("[data-zoom-order]");
    if (chosenItem) {
      const orderNumber = chosenItem.dataset.zoomOrder;
      content.forEach((item) => {
        if (item.dataset.zoomOrder === orderNumber) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    }
  });
};

export const activateZoomSliders = () => {
  document
    .querySelectorAll("[data-zoom-slider]")
    .forEach((slider) => initSlider(slider));
};
