import * as polzunok from "./polzunok.js";

const addTag = (tagsBlock, tagText) => {
  const tag = document.createElement("div");
  tag.classList.add("tags-line__item-mini");
  tag.innerHTML = `<span>${tagText}</span>
  <button class="tag-delete">&#10006;</button>`;
  tagsBlock.append(tag);
};

//после выбора тега показать следующую группу
const showTagLine = (linesArr, tagIndex) => {
  linesArr.forEach((line, index) => {
    if (index !== tagIndex) {
      line.closest("section.tags-block").classList.add("hidden");
    } else {
      line.closest("section.tags-block").classList.remove("hidden");
    }
  });
};

const initTags = () => {
  const tagLines = document.querySelectorAll(".tags-line");

  //   показать только первую группу тегов
  showTagLine(tagLines, 0);
  const tagsCollection = document.querySelector(".tags-line__collection");

  tagLines.forEach((tagLine, index) => {
    tagLine.addEventListener("click", ({ target }) => {
      const tag = target.closest("button.tags-line__item");
      if (tag) {
        showTagLine(tagLines, index + 1);
        // console.log(tag.textContent);
        addTag(tagsCollection, tag.textContent);
      }
    });
  });

  //   для удаления тега
  tagsCollection.addEventListener("click", ({ target }) => {
    const delBtn = target.closest("button.tag-delete");

    if (delBtn) {
      const delTag = delBtn.closest(".tags-line__item-mini");
      delTag.remove();
    }
  });
};

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

  //   открытие модалки
  filterBtn.addEventListener("click", () => {
    filterModal
      .closest(".filters-block__select-wrapper")
      .classList.toggle("active");

    filterModal.classList.toggle("hidden");

    // выходит ли окно за пределы браузера
    //   1. определить ширину видимой области браузера
    var all = $(window).width();
    // 2. определить координаты выпадающего меню относительно окна
    var left = $(filterModal).offset().left;
    // 3. найти ширину меню
    var width = $(filterModal).outerWidth(true);
    // теперь простыми математическими расчетами можно определить выходит ли правый край меню за пределы видимой области,
    var offset = all - (left + width);
    // если оффсет отрицательный значит выходит
    console.log("offset", offset);
    if (offset < 0) {
      filterModal.style = `left: ${offset}px`;
    } else {
      filterModal.style = `left: 0`;
    }
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
    const searchInput = cleanBtn
      .closest(".filters-block__modal-head")
      .querySelector(".filters-block__modal-search input");
    if (searchInput) searchInput.value = "";
  });
};

export const initFilters = () => {
  const filterBtns = document.querySelectorAll(".filters-block__select");

  if (filterBtns.length !== 0) {
    filterBtns.forEach((item) => {
      activateFilterModal(item);
    });
    polzunok.initPolzunok();

    initTags();
  }
};
