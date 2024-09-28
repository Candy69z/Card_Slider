new Swiper('.card-wrapper', {
    // // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 30,
  
    // Paganation Bullets {in-used}
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Displaying the number of slides
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  
  });