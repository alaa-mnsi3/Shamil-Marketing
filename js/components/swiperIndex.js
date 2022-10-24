import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
var swiper = new Swiper('.mySwiper', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    autoplay: {
      delay: 8000,
    },
});

var swiper1 = new Swiper('.swiper1', {
    slidesPerView:3,
    spaceBetween:55,
    slidesPerGroupSkip:3,
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
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
