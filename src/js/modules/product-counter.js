const initCounter = (counterBlock) => {
  if (counterBlock) {
    const inputCounter = counterBlock.querySelector("input");
    const btnPlus = counterBlock.querySelector(".product-cost__number-more");
    const btnMinus = counterBlock.querySelector(".product-cost__number-less");
    inputCounter.value = 1;

    btnPlus.addEventListener("click", () => {
      const value = Number(inputCounter.value);
      inputCounter.value = value + 1;
    });

    btnMinus.addEventListener("click", () => {
      const value = Number(inputCounter.value);

      inputCounter.value = value - 1;
      if (Number(inputCounter.value) < 0) inputCounter.value = 0;
    });
  }
};

export const activateProductCounter = () => {
  const counterBlock = document.querySelectorAll(".product-cost__number");
  counterBlock.forEach((block) => initCounter(block));
};
