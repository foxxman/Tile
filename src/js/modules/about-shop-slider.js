export const initAboutShopSlider = () => {
  // Инициализация превью слайдера
  const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
    // ищем слайдер превью по селектору
    // задаем параметры
    loop: false,
    watchOverflow: true,
    autoHeight: false,
    slidesPerView: 3, // показывать по 3 превью
    grid: {
      rows: 4,
      fill: "row",
    },
    spaceBetween: 38, // расстояние между слайдами
    breakpoints: {
      // условия для разных размеров окна браузера
      0: {
        // при 0px и выше
        // direction: "horizontal", // горизонтальная прокрутка
      },
      768: {
        // при 768px и выше
        // direction: "vertical", // вертикальная прокрутка
      },
    },
  });
  // Инициализация слайдера изображений
  const sliderImages = new Swiper(".slider__images .swiper-container", {
    // ищем слайдер превью по селектору
    // задаем параметры
    slidesPerView: 1, // показывать по 1 изображению
    spaceBetween: 32, // расстояние между слайдами
    mousewheel: true, // можно прокручивать изображения колёсиком мыши
    navigation: {
      // задаем кнопки навигации
      nextEl: ".slider__next", // кнопка Next
      prevEl: ".slider__prev", // кнопка Prev
    },
    grabCursor: true, // менять иконку курсора
    thumbs: {
      // указываем на превью слайдер
      swiper: sliderThumbs, // указываем имя превью слайдера
    },
    breakpoints: {
      // условия для разных размеров окна браузера
      0: {
        // при 0px и выше
        direction: "horizontal", // горизонтальная прокрутка
      },
      768: {
        // при 768px и выше
        // direction: "vertical", // вертикальная прокрутка
      },
    },
  });
};
