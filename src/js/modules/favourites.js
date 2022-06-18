const toggleActive = (btn) => {
  btn.classList.toggle("active");
};

const initLike = (btn) => {
  toggleActive(btn);
};

const initScale = (btn) => {
  toggleActive(btn);
};

const initCheck = (btn) => {
  toggleActive(btn);
};

const initDelete = (btn) => {
  console.log(btn);
};

export const initButtons = () => {
  const btnsLines = document.querySelectorAll(".favourite-buttons");

  btnsLines.forEach((line) =>
    line.addEventListener("click", ({ target }) => {
      const btn = target.closest(".favourite-button");
      if (btn && btn.classList.contains("favourite-button__like")) {
        initLike(btn);
      } else if (btn && btn.classList.contains("favourite-button__scales")) {
        initScale(btn);
      } else if (btn && btn.classList.contains("favourite-button__cross")) {
        initDelete(btn);
      } else if (btn && btn.classList.contains("favourite-button__check")) {
        initCheck(btn);
      }
    })
  );
};
