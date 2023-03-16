
var swiper = new Swiper(".mySwiper", {
    
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 640px
      700: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
    
});

var swiper = new Swiper(".tswiper", {
  centeredSlides: true,
  
  spaceBetween: 30,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 640px
    700: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});