const menu = document.querySelector(".hamburger-menu");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("active");
  closeIcon.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("active");
  closeIcon.classList.remove("show");
});

document.addEventListener("click", function (e) {
  if (
    !nav.contains(e.target) &&
    !closeIcon.contains(e.target) &&
    !menu.contains(e.target)
  ) {
    nav.classList.remove("active");
    closeIcon.classList.remove("show");
  }
});

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
