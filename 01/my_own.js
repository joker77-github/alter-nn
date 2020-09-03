var sContainer = document.querySelectorAll('.advant-sw');
var sWrapper = document.querySelectorAll('.advant');
var sSlide = document.querySelectorAll('.advant__item');

if (document.body.clientWidth<480){
  for (var i = 0; i < sContainer.length; i++) {
  sContainer[i].classList.add('swiper-container');
  };
  for (var i = 0; i < sWrapper.length; i++) {
  sWrapper[i].classList.add('swiper-wrapper');
  };
  for (var i = 0; i < sSlide.length; i++) {
  sSlide[i].classList.add('swiper-side');
  };

  console.log('Still working?');
}
