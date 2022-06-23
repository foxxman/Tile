export const initOpenModalBtns = () => {
  const modal = document.querySelector(".modal__cart");
  if (modal) {
    const btns = document.querySelectorAll("button[data-open-modal]");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
      });
    });
    modal.querySelector("button[data-close]").addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }
};
