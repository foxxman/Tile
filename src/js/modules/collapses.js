const collapseListener = (colContent, colBtn, limitBlock) => {
  if (colContent.classList.contains("collapse")) {
    colBtn.innerHTML = "Свернуть";
  } else {
    colBtn.innerHTML = "Развернуть";
  }

  colContent.classList.toggle("collapse");
  colBtn.classList.toggle("collapsed");

  if (limitBlock && colContent.classList.contains("collapse")) {
    colContent.style.height = `${limitBlock.clientHeight - 2}px`;
  } else {
    colContent.style.height = "";
  }
};

const activateCollapse = (block) => {
  // назодим блок для свертки и кнопку
  const colBtn = block.querySelector(".collapse-btn");
  const colContent = block.querySelector(".collapse-block");
  const limitBlock = colContent.querySelector(".collapse-limiting");
  // console.log(colBtn, colContent);

  // начальное положение кнопки
  if (!colContent.classList.contains("collapse")) {
    colBtn.innerHTML = "Свернуть";
  } else {
    colBtn.innerHTML = "Развернуть";
  }

  if (limitBlock && colContent.classList.contains("collapse")) {
    colContent.style.height = `${limitBlock.clientHeight - 2}px`;
  } else {
    colContent.style.height = "";
  }

  // colBtn.removeEventListener("click", () =>
  //   collapseListener(colContent, colBtn, limitBlock)
  // );
  colBtn.addEventListener("click", () =>
    collapseListener(colContent, colBtn, limitBlock)
  );
};

export const initCollapses = () => {
  const colBlocks = document.querySelectorAll(".collapses");
  // console.log(colBlocks);

  colBlocks.forEach((block) => {
    activateCollapse(block);
  });

  // window.addEventListener("resize", () => {
  //   colBlocks.forEach((block) => {
  //     activateCollapse(block);
  //   });
  // });
};
