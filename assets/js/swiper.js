const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper2", {
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 2,
  spaceBetween: 120,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: { enabled: false },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: { enabled: false },
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
