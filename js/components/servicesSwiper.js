import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

var swipers=document.querySelectorAll(".mySwiper3");
var swiperScrollbar=document.querySelectorAll(".swiper-scrollbar")

// swiper for all team
var swiper = new Swiper(".mySwiper2", {
  simulateTouch: false,
  spaceBetween: 30,
  breakpoints: {
    1200:{
      slidesPerView: 3,
      grid: {
          rows: 4,
        },
    },
    800:{
      slidesPerView: 2,
      grid: {
          rows: 4,
        },
    },
    300:{
      slidesPerView: 1,
      grid: {
        rows: 4,
      },
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// siper for each one has many works
swipers.forEach((slider,index)=>{
  console.log(swiperScrollbar[index])
  var swiper2 = new Swiper(slider, {
  slidesPerView: 3,
  spaceBetween:10,
  centeredSlides: false,
  slidesPerGroupSkip: 3,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    900:{
        slidesPerView: 3,
        slidesPerGroup: 3,
    },
    600:{
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    300:{
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: swiperScrollbar[index],
  },
  });        
})
