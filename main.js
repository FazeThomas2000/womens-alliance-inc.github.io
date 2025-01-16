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

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".about__card", {
    duration: 1000,
    interval: 500,
    delay: 500,
  });

  ScrollReveal().reveal(".scholarship__content .section__header", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".scholarship__content p", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".hats__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".hats__content h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".hats__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".hats__btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".donate__content .section__header", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".donate__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".donate__content .donate__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".bourbon__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".bourbon__content h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".bourbon__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".bourbon__btn", {
    ...scrollRevealOption,
    delay: 1500,
  }); 
  