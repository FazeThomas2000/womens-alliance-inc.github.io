const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
  
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });
  
  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const about = document.querySelector(".about__grid");

about.addEventListener("click", (e) => {
  const target = e.target;
  const aboutCard = target.closest(".about__card");
  if (target.classList.contains("ri-arrow-down-s-line")) {
    if (aboutCard.classList.contains("active")) {
      aboutCard.classList.remove("active");
    } else {
      Array.from(about.children).forEach((item) => {
        item.classList.remove("active");
      });
      aboutCard.classList.add("active");
    }
  }
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});