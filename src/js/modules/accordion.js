const initAccordion = (accordionBlock) => {
  const btn = accordionBlock.querySelector(".accordion-btn");
//   const panel = accordionBlock.querySelector(".accordion-panel");

  btn.addEventListener("click", () => {
    accordionBlock.classList.toggle("active");
  });
};

export const activateAccordion = () => {
  document
    .querySelectorAll(".accordion")
    .forEach((item) => initAccordion(item));
};
