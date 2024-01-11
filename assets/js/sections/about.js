const swiper4 = new Swiper(".swiper4", {
  slidesPerView: 3,
  spaceBetween: 120,
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      // navigation: { enabled: false },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      // navigation: { enabled: false },
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >= 640px
    1080: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
