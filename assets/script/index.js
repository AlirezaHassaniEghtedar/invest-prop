const mobileMenuIcon = document.querySelector('header .right-section .mobile-menu-icon')
const mobileNavMenu = document.querySelector('header nav')
const mobileNavMenuCloseBtn = document.querySelector('header nav .close-btn')



// Event Listeners
mobileMenuIcon.addEventListener('click' , handleMobileMenuIconClick)
mobileNavMenuCloseBtn.addEventListener('click' , handleMobileMenuIconClick)

// Functions
function handleMobileMenuIconClick () {
  mobileNavMenu.classList.toggle('active')
}





var swiper = new Swiper(".heroSection .mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".heroSection .swiper-button-next",
      prevEl: ".heroSection .swiper-button-prev",
    },
    pagination: {
      el: ".heroSection .swiper-pagination",
    },
    loop: true,
    mousewheel: true,
    keyboard: true,
  });

  var swiper = new Swiper(".plans-section .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    cssMode: true,
    navigation: {
      nextEl: ".plans-section .swiper-button-next",
      prevEl: ".plans-section .swiper-button-prev",
    },
    pagination: {
      el: ".plans-section .swiper-pagination",
      clickable: true,
    },
    loop: true,
    mousewheel: true,
    keyboard: true,

    breakpoints: {
      570: {
        slidesPerView : 1 ,
        spaceBetween : 15,
      },
      767: {
        slidesPerView : 1 ,
        spaceBetween : 15,
      },
      840: {
        slidesPerView : 2 ,
        spaceBetween : 20,
      },
      1150: {
        slidesPerView : 3 ,
        spaceBetween : 25,
      },
    }
  });


  var swiper = new Swiper(".videos-section .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    cssMode: true,
    navigation: {
      nextEl: ".videos-section .swiper-button-next",
      prevEl: ".videos-section .swiper-button-prev",
    },
    pagination: {
      el: ".videos-section .swiper-pagination",
      clickable: true,
    },
    loop: true,
    mousewheel: true,
    keyboard: true,

    breakpoints: {
      570: {
        slidesPerView : 1 ,
        spaceBetween : 15,
      },
      767: {
        slidesPerView : 1 ,
        spaceBetween : 15,
      },
      840: {
        slidesPerView : 2 ,
        spaceBetween : 20,
      },
      1150: {
        slidesPerView : 3 ,
        spaceBetween : 25,
      },
    }
  });