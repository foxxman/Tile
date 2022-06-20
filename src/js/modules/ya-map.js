export const initMap = () => {
  //Переменная для включения/отключения индикатора загрузки
  var spinner = $(".ymap-container").children(".loader");
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMap, myPlacemarkTemp;

  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init() {
    myMap = new ymaps.Map(
      "map-yandex",
      {
        center: [55.90287306881785, 37.41408599999999],
        zoom: 13,
        // Добавим панель маршрутизации.
        controls: ["routePanelControl"],
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    var myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        //   hintContent: "Собственный значок метки",
        balloonContent: "Мы здесь!",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "../img/map-logo.png",
        // Размеры метки.
        iconImageSize: [42, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-55, -38],
      }
    );
    var obiPlacemark = new ymaps.Placemark(
      [55.91245471033023, 37.39330792969248],
      {
        //   hintContent: "Собственный значок метки",
        // balloonContent: "Мы здесь!",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "../img/obi-logo.svg",
        // Размеры метки.
        iconImageSize: [42, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
      }
    );
    var leroyPlacemark = new ymaps.Placemark(
      [55.90320927535217, 37.416176421243684],
      {
        //   hintContent: "Собственный значок метки",
        //   balloonContent: "Мы здесь!",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "../img/leroy-logo.svg",
        // Размеры метки.
        iconImageSize: [42, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
      }
    );

    var control = myMap.controls.get("routePanelControl");

    // Зададим состояние панели для построения машрутов.
    control.routePanel.state.set({
      // Тип маршрутизации.
      type: "masstransit",
      // Выключим возможность задавать пункт отправления в поле ввода.
      fromEnabled: true,
      // Адрес или координаты пункта отправления.
      //   from: "Химки, ул. 9 Мая, дом 12-Д стр.2",
      // Включим возможность задавать пункт назначения в поле ввода.
      toEnabled: false,
      // Адрес или координаты пункта назначения.
      to: "Химки, ул. 9 Мая, дом 12-Д стр.2",
    });

    // Зададим опции панели для построения машрутов.
    control.routePanel.options.set({
      // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
      allowSwitch: false,
      // Включим определение адреса по координатам клика.
      // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
      reverseGeocoding: true,
      // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
      types: { masstransit: true, pedestrian: true, taxi: true },
    });

    // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
    var switchPointsButton = new ymaps.control.Button({
      data: { content: "Поменять местами", title: "Поменять точки местами" },
      options: { selectOnClick: false, maxWidth: 160 },
    });
    // Объявляем обработчик для кнопки.
    switchPointsButton.events.add("click", function () {
      // Меняет местами начальную и конечную точки маршрута.
      control.routePanel.switchPoints();
    });

    myMap.controls.add(switchPointsButton);

    myMap.geoObjects.add(myPlacemark).add(obiPlacemark).add(leroyPlacemark);

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMap.layers.get(0).get(0);

    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function () {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass("is-active");
    });
  }

  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer),
        readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
          layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) {
      // IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      // Другие браузеры
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  var ymap = function () {
    $(".ymap-container").mouseenter(function () {
      if (!check_if_load) {
        // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

        // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true;

        // Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass("is-active");

        // Загружаем API Яндекс.Карт
        ymaps.load(init);
        // loadScript(
        //   "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=89cf032e-4aaa-4735-8612-942c25100d42",
        //   function () {
        //     // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
        //     ymaps.load(init);
        //   }
        // );
      }
    });
  };

  $(function () {
    //Запускаем основную функцию
    ymap();
  });
};
