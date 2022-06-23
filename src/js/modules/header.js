const initMenuList = (list) => {
  list.addEventListener("click", (event) => {
    const { target } = event;
    const toggleButton = target.closest(".sidebar-menu__link_toggle");

    if (toggleButton) {
      event.preventDefault();

      toggleButton.parentNode
        .querySelector(".sidebar-menu__inner")
        .classList.toggle("hidden");
    }
  });
};

const initSidebarMenu = () => {
  const openSidebarMenus = document.querySelectorAll(".header .open-menu");
  const sidebarMenu = document.querySelector(".sidebar-menu");
  const closeSidebarMenu = document.querySelector(".sidebar-menu__close");

  openSidebarMenus.forEach((openSidebarMenu) => {
    openSidebarMenu.addEventListener("click", () => {
      console.log(sidebarMenu);
      sidebarMenu.classList.remove("hidden");
    });
  });

  closeSidebarMenu.addEventListener("click", () => {
    sidebarMenu.classList.add("hidden");
  });

  const menuLists = sidebarMenu.querySelectorAll(".sidebar-menu__list");
  menuLists.forEach((list) => initMenuList(list));
};
const addHiderBtns = (block, showNum) => {
  const links = block.querySelectorAll(".divide-menu-item__link");

  if (links.length > showNum) {
    let button = document.createElement("button");
    button.classList.add("divide-menu-item__btn");
    button.textContent = "Ещё";
    // console.log("кнопОчка: ", button);
    block.append(button);
  }
};

const hideLinks = (block, showNum) => {
  const links = block.querySelectorAll(".divide-menu-item__link");
  links.forEach((link, index) => {
    if (index + 1 > showNum) {
      link.classList.add("hidden");
    }
  });
};
const initShowBtn = (block) => {
  const btn = block.querySelector(".divide-menu-item__btn");
  const links = block.querySelectorAll(".divide-menu-item__link");
  let isHiddennLinks = block.querySelector(".hidden");
  if (btn)
    btn.addEventListener("click", () => {
      btn.classList.toggle("rotate-arrow");
      if (isHiddennLinks) {
        links.forEach((link) => link.classList.remove("hidden"));
        isHiddennLinks = false;
        btn.textContent = "Свернуть";
      } else {
        isHiddennLinks = true;
        hideLinks(block, block.dataset.showItems);
        btn.textContent = "Еще";
      }
    });
};

const initDivideMenu = () => {
  const menuItems = document.querySelectorAll(".divide-menu-item");

  menuItems.forEach((item) => {
    const linksToShow = item.dataset.showItems;
    //добавить кнопки скрытия туда, куда нужно
    addHiderBtns(item, linksToShow);
    // скрыть "лишние ссылки"
    hideLinks(item, linksToShow);
    // слушатель на кнопку для открытия
    initShowBtn(item);
  });
};
const openInputWindow = (input, searchWindow) => {
  if (input.value) {
    searchWindow.classList.remove("hidden");
  } else {
    searchWindow.classList.add("hidden");
  }
};

const initInput = () => {
  const input = document.querySelector(".header-menuline__search-input");
  if (input) {
    const searchWindow = input.parentNode.querySelector(
      ".header-menuline__search-window"
    );

    input.oninput = function () {
      openInputWindow(input, searchWindow);
    };
  }
};

const initMobileInput = () => {
  const headerMobile = document.querySelector(".header-mobile");
  const activateBtn = headerMobile.querySelector(".search-activate");
  const searchWindow = headerMobile.querySelector(
    ".header-menuline__search-window"
  );

  activateBtn.addEventListener("click", () => {
    console.log(searchWindow);

    searchWindow.classList.toggle("hidden");
  });
};

export const initHeader = () => {
  // открытие бокового меню
  initSidebarMenu();
  // открытие ссылок в выпадающем меню
  initDivideMenu();
  // открытие окна input
  initInput();
  // открытие окна input на мобилках
  initMobileInput();
};
