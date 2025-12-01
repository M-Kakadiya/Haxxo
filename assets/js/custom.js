document.getElementById("year").textContent = new Date().getFullYear();
new Swiper(".myWorksSlider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,

  grabCursor: true,
  navigation: false,
  pagination: false,

  mousewheel: {
    forceToAxis: true,
    sensitivity: 1
  },

  touchMoveStopPropagation: true,
  simulateTouch: true,

  breakpoints: {
    0: { slidesPerView: 1.1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 2.5 }
  }
});
new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,

  grabCursor: true,
  navigation: false,
  pagination: false,

  mousewheel: {
    forceToAxis: true,
    sensitivity: 1
  },

  touchMoveStopPropagation: true,
  simulateTouch: true,

  breakpoints: {
    0: { slidesPerView: 1.1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 }
  }
});
