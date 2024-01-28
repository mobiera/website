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

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

var sidebar = new StickySidebar(".stick", {
  topSpacing: 180,
  containerSelector: ".main-content",
  innerWrapperSelector: ".sidebar__inner",
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-trigger",
    duration: 1.5,
    // pin: true,
    scrub: true,
    start: "top center",
    end: "+=1330",
    toggleActions: "restart pause resume pause",
    // markers: true,
  },
});

// Slides Scroll Animation
tl.from(
  "[data-slide='1'] ",
  {
    opacity: 0.5,
    duration: 1,
    stagger: 2,
  },
  "+=1",
)

  .to(
    "[data-slide='1'] ",
    {
      opacity: 0,
      duration: 1,
      stagger: 2,
      ease: "power4",
    },
    "+=10",
  )

  .from(
    "[data-slide='2'] ",
    {
      opacity: 0,
      duration: 1,
      stagger: 2,
    },
    "+=1",
  )
  .to(
    "[data-slide='2']",
    {
      opacity: 0,
      duration: 1,
      stagger: 2,
      ease: "power4",
    },
    "+=10",
  )

  .from(
    "[data-slide='3']",
    {
      opacity: 0,
      duration: 1,
      stagger: 2,
    },
    "+=1",
  )
  .to(
    "[data-slide='3']",
    {
      opacity: 0,
      duration: 1,
      stagger: 2,
      ease: "power4",
    },
    "+=10",
  )

  .from(
    "[data-slide='4']",
    {
      opacity: 0,
      duration: 1,
      stagger: 2,
    },
    "+=1",
  )
  .to(
    "[data-slide='4'] ",
    {
      opacity: 0.5,
      duration: 1,
      stagger: 2,
      ease: "power4",
    },
    "+=10",
  );
