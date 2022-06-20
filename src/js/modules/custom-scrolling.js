export const scroll = (config) => {
  config.from.addEventListener("click", (event) => {
    console.log(config.from);
    event.preventDefault();
    window.scroll({
      left: 0,
      top: config.to.offsetTop,
      behavior: "smooth",
    });
  });
};
