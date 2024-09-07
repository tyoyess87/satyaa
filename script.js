function showUl() {
  const navUl = document.querySelector("ul");
  const icon = document.getElementById("icon");
  // show ul
  if (navUl.classList.contains("hidden-ul")) {
    navUl.classList.remove("hidden-ul");
    navUl.classList.add("show-ul");
    icon.classList.remove("fa-grip-lines");
    icon.classList.add("fa-xmark");
  } else {
    navUl.classList.remove("show-ul");
    navUl.classList.add("hidden-ul");
    icon.classList.add("fa-grip-lines");
    icon.classList.remove("fa-xmark");
  }
}
