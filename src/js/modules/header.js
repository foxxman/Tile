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

export const initHeader = () => {
  initSidebarMenu();
};
