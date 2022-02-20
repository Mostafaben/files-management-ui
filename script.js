const mainContainer = document.getElementById("main-container");
const menuButton = document.getElementById("menu-btn");
const notificationPanel = document.getElementById("notificationPanel");

function minimizeSideBar() {
  if (mainContainer.classList.contains("main-content-minimized")) {
    mainContainer.classList.remove("main-content-minimized");
    menuButton.classList.remove("minimized-menu-btn");
  } else {
    mainContainer.classList.add("main-content-minimized");
    menuButton.classList.add("minimized-menu-btn");
  }
}

function closeNotificationPanel() {
  if (notificationPanel.classList.contains("closed-panel")) {
    notificationPanel.classList.remove("closed-panel");
    mainContainer.append(notificationPanel);
  } else {
    notificationPanel.classList.add("closed-panel");
    setTimeout(() => {
      notificationPanel.remove();
    }, 300);
  }
}


notificationPanel.remove()