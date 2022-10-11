"use strict";
// swiper slider js
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + 0 + (index + 1) + "</span>"
      );
    },
  },
});
// wow js
new WOW().init();
// header-section js start
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 250 ) {
    $(".header-section").addClass("active");
  } else {
    $(".header-section").removeClass("active");
  }
});