const mobileMenuIcon = document.querySelector('header .right-section .mobile-menu-icon')
const mobileNavMenu = document.querySelector('header nav')
const mobileNavMenuCloseBtn = document.querySelector('header nav .close-btn')
const plansSectionHeaderBtns = document.querySelectorAll('.plans-section .plans-buttons button')
const plansSectionSwipers = document.querySelectorAll('.plans-section .swiper-wrapper-container .swiper-container .swiper')


// Event Listeners
mobileMenuIcon.addEventListener('click', handleMobileMenuIconClick)
mobileNavMenuCloseBtn.addEventListener('click', handleMobileMenuIconClick)

plansSectionHeaderBtns.forEach(btn => btn.addEventListener('click', handlePlansSectionHeaderBtnClick))

// Functions
function handleMobileMenuIconClick() {
  mobileNavMenu.classList.toggle('active')
}

function handlePlansSectionHeaderBtnClick(e) {
  const targetBtn = e.target

  if (targetBtn.classList.contains('active')) return

  plansSectionHeaderBtns.forEach(btn => btn.classList.remove('active'))
  targetBtn.classList.add('active')

  handleLoadSwiper(targetBtn.getAttribute('swiper-number'))
}

function handleLoadSwiper(num) {
  plansSectionSwipers.forEach(item => {
    Number(item.id) === Number(num) ? item.classList.add('active') : item.classList.remove('active');
  })
}




var swiper = new Swiper(".heroSection .mySwiper .swiper-wrapper-container .swiper-container", {
  cssMode: true,
  navigation: {
    nextEl: ".heroSection .swiper-button-next",
    prevEl: ".heroSection .swiper-button-prev",
  },
  pagination: {
    el: ".heroSection .swiper-pagination",
    clickable: true,
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
      slidesPerView: 1,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    840: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 25,
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
      slidesPerView: 1,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    840: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  }
});