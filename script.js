const mainContainer = document.getElementById("main-container");
const menuButton = document.getElementById("menu-btn");

function minimizeSideBar() {
  if (mainContainer.classList.contains("main-content-minimized")) {
    mainContainer.classList.remove("main-content-minimized");
    menuButton.classList.remove("minimized-menu-btn");
  } else {
    mainContainer.classList.add("main-content-minimized");
    menuButton.classList.add("minimized-menu-btn");
  }
}
