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
// contact form
var form = document.getElementById("contact__form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)