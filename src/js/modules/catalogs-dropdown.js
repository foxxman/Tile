const initDefault = (btns, contentBlocks, defaultBlockIndex) => {
  btns.forEach((btn, index) => {
    if (index === defaultBlockIndex)
      btn.classList.add("catalog__dropdown-active");
    else btn.classList.remove("catalog__dropdown-active");
  });

  contentBlocks.forEach((contentBlock) => {
    if (contentBlock.dataset.list === btns[defaultBlockIndex].dataset.list)
      contentBlock.classList.remove("hidden");
    else contentBlock.classList.add("hidden");
  });
};

const initCatalogDrop = (block) => {
  const btnsBlock = block.querySelector(".catalog__dropdown");
  const contentBlocks = block.querySelectorAll("div[data-list]");

  // const contentBlocks = block.querySelectorAll(".catalog__block__sales-list");
  const btns = btnsBlock.querySelectorAll("button");
  // const filteredContentList = contentBlocks.map(
  //   (block) => !block.closest(".catalog__block__head")
  // );
  // устанавливаем первое значение
  const defaultBlockIndex = 0;
  initDefault(btns, contentBlocks, defaultBlockIndex);

  // слушатели
  btnsBlock.addEventListener("click", ({ target }) => {
    const chosenBtn = target.closest("button");

    if (chosenBtn) {
      const chosenData = chosenBtn.dataset.list;

      // изменяем состояние кнопки
      btnsBlock.querySelectorAll("button").forEach((btn) => {
        if (btn === chosenBtn) btn.classList.add("catalog__dropdown-active");
        else btn.classList.remove("catalog__dropdown-active");
      });

      // изменяем состояние блока
      contentBlocks.forEach((contentBlock) => {
        if (contentBlock.dataset.list === chosenData) {
          contentBlock.classList.remove("hidden");
        } else {
          contentBlock.classList.add("hidden");
        }
      });
    }
  });
};

export const activateCatalogs = () => {
  const dropsBlocks = document.querySelectorAll(".drops-block");
  // console.log(dropsBlocks);
  dropsBlocks.forEach((block) => {
    // console.log(block);
    initCatalogDrop(block);
  });
};
