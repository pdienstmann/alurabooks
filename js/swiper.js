const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    allowSlideNext: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });