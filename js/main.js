// BURGER

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav-burger");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");

  burger.setAttribute("aria-label", "Закрыть меню");

  menu.classList.toggle("header__nav--active");

  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    burger.setAttribute("aria-label", "Открыть меню");

    menu.classList.remove("header__nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

// if (burger.hasAttribute("aria-label", "Закрыть меню")) {
//   burger.addEventListener("click", function () {
//     burger.setAttribute("aria-label", "Открыть меню");
//   })
//   burger.removeAttribute("aria-label", "Закрыть меню");
// };

// SEARCH BOX
let search = document.querySelector(".search-form");
let searchBox = document.querySelector(".search-box");
let openSearch = document.querySelector(".header__search");
let closeSearch = document.querySelector(".search-close");

openSearch.addEventListener("click", function () {
  search.classList.toggle("search--active");
});

closeSearch.addEventListener("click", function () {
  search.classList.remove("search--active");
});

// SLIDER
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  autoHeight: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// OUR WORK TABS
let menuTab = document.querySelectorAll(".our-work__menu-btn");
let tabsItem = document.querySelectorAll(".our-work__wrapper");

menuTab.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    menuTab.forEach(function (btn) {
      btn.classList.remove("our-work__menu-btn--active");
    });

    e.currentTarget.classList.add("our-work__menu-btn--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("our-work__article--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("our-work__article--active");
  });
});

// ACCORDION
new Accordion('.accordion-container', {
  showMultiple: true,
});