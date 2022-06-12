const initZoom = (zoomBlock) => {
  zoomBlock.addEventListener(
    "mousemove",
    function (e) {
      // сам img
      const original = zoomBlock.querySelector("img");
      //   блок - (за)лупа
      const magnified = zoomBlock.querySelector(".large-img");
      // стили лупы
      const style = magnified.style;
      // координаты курсора
      const x = e.clientX - original.getBoundingClientRect().left;
      const y = e.clientY - original.getBoundingClientRect().top;
      // размеры изображения
      const imgWidth = original.width;
      const imgHeight = original.height;

      let xperc = (x / imgWidth) * 100,
        yperc = (y / imgHeight) * 100;

      style.background = ` url('${original.src}') no-repeat`;
      style.backgroundSize = `600% 600%`;

      // Add some margin for right edge
      if (x > 0.01 * imgWidth) {
        xperc += 0.15 * xperc;
      }

      // Add some margin for bottom edge
      if (y >= 0.01 * imgHeight) {
        yperc += 0.15 * yperc;
      }

      // Set the background of the magnified image horizontal
      style.backgroundPositionX = xperc - 9 + "%";
      // Set the background of the magnified image vertical
      style.backgroundPositionY = yperc - 9 + "%";

      // Move the magnifying glass with the mouse movement.
      style.left = x - 90 + "px";
      style.top = y - 90 + "px";
    },
    false
  );
};

export const activateZoom = () => {
  const zoomBlocks = document.querySelectorAll(".magnify-wrapper");
  zoomBlocks.forEach((block) => initZoom(block));
};
