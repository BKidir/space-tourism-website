const menus = document.querySelectorAll("svg.ham.hamRotate.ham7");
const nav = document.querySelector("nav");

menus.forEach((menu) => {
  menu.addEventListener("click", function () {
    nav.classList.toggle("show-nav");
    this.classList.toggle("active");
  });
});

document.addEventListener("click", function (e) {
  if (!nav.contains(e.target) && !isMenuClicked(menus, e.target)) {
    nav.classList.remove("show-nav");
    menus.forEach((menu) => {
      menu.classList.remove("active"); // revert the menu to its original state
    });
  }
});

function isMenuClicked(menus, target) {
  let clickedInsideMenu = false;
  menus.forEach((menu) => {
    if (menu.contains(target)) {
      clickedInsideMenu = true;
    }
  });
  return clickedInsideMenu;
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    window.location.href = href;

    // Remove active class from all links
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active-link");
    });

    // Add active class to clicked link
    link.classList.add("active-link");
  });
});

const destinationLinks = document.querySelectorAll(".destinations a");

destinationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    window.location.href = href;

    destinationLinks.forEach((destinationLink) => {
      destinationLink.classList.remove("active-destination");
    });

    link.classList.add("active-destination");
  });
});
