const swiper = new Swiper('.swiper',
  {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    longSwipes: false,

    breakpoints: {
      600: {
        slidesPerView: 1.5,
      },
      850: {
        slidesPerView: 2,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
