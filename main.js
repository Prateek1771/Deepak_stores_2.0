// ----show menu-----

// menu show
// validate if conatant exists

// ----image gallery----
function imgGallery() {
  const mainImg = document.querySelector('.details_img'),
    smallImg = document.querySelectorAll('.details_small_img');

  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src;
    });
  });
}

// ----swiper categories----
var swiperCategories = new Swiper(".categories_container", {
    spaceBetween: 24,
    loop:true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 22,
        },
        1400:{
            slidesPerView: 6,
            spaceBetween: 24,
        }
      },
});

// ----swiper products----
var swiperProducts = new Swiper('.new_container', {
  spaceBetween: 24,
  loop:true,
  
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 22,
      },
      1400:{
          slidesPerView: 6,
          spaceBetween: 24,
      }
    },
});


// ----products tabs----
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab')
    });

    target.classList.add('active-tab');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  });
});
