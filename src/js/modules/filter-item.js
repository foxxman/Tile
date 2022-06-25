import * as polzunok from "./polzunok.js";

const changeCount = (block) => {
  const countBlock = block.querySelector(".filters-block__modal-chosen span");
  const count = block.querySelectorAll("label.filters-block__item.checked");
  countBlock.innerHTML = count.length;
};

const activateFilterModal = (filterBtn) => {
  // сам блок фильтра
  const filterModal = filterBtn.parentNode.querySelector(
    ".filters-block__modal"
  );

  //   открытие блока
  filterBtn.addEventListener("click", () => {
    filterModal.classList.toggle("hidden");
  });

  //   изменение кастомных checkbox-ов
  const inputChecks = filterModal.querySelectorAll('input[type="checkbox"]');
  inputChecks.forEach((input) => {
    input.addEventListener("change", () => {
      input.closest("label").classList.toggle("checked");
      changeCount(filterModal);
    });
  });

  //   кнопка очистки
  const cleanBtn = filterModal.querySelector(".filters-block__modal-clean");
  cleanBtn.addEventListener("click", () => {
    inputChecks.forEach((input) => {
      input.checked = 0;
      input.closest("label").classList.remove("checked");
      changeCount(filterModal);
    });
  });
};

export const initFilters = () => {
  const filterBtns = document.querySelectorAll(".filters-block__select");

  filterBtns.forEach((item) => {
    activateFilterModal(item);
  });
  polzunok.initPolzunok();
};
