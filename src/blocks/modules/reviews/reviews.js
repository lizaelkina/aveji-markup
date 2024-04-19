const swiper = new Swiper('.reviews__swiper',
  {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    longSwipes: false,

    breakpoints: {
      850: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 1.5,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
