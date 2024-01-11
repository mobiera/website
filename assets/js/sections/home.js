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
      // navigation: { enabled: false },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const swiper6 = new Swiper(".swiper6", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next6",
    prevEl: ".swiper-button-prev6",
  },
});

let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

document.querySelector("#tab-contents").children[0].classList.remove("hidden");
tabTogglers[0].classList.add("tab-selected");

tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();
    let tabName = this.getAttribute("href");
    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].classList.remove("tab-selected");
      tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
    }
    e.target.classList.add("tab-selected");
  });
});

let tabsContainerVertical = document.querySelector("#tabsVertical");

let tabTogglersVertical =
  tabsContainerVertical.querySelectorAll("#tabsVertical a");

document
  .querySelector("#tab-contentsVertical")
  .children[0].classList.remove("hidden");
tabTogglersVertical[0].classList.add("tab-selectedVertical");

tabTogglersVertical.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();
    let tabNameVertical = this.getAttribute("href");
    let tabContentsVertical = document.querySelector("#tab-contentsVertical");

    for (let i = 0; i < tabContentsVertical.children.length; i++) {
      tabTogglersVertical[i].classList.remove("tab-selectedVertical");
      tabContentsVertical.children[i].classList.remove("hidden");
      if ("#" + tabContentsVertical.children[i].id === tabNameVertical) {
        continue;
      }
      tabContentsVertical.children[i].classList.add("hidden");
    }
    e.target.classList.add("tab-selectedVertical");
  });
});
