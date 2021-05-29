// first slide with opacity animation
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

// second slide with scrolling animation
var slideNumber = 1;

function moveslide(n) {
  const slidesChainHtml = document.querySelector('.slides-chain');
  slideNumber += n;
  const xCoordinate = (slideNumber - 1) * 100;
  slidesChainHtml.style.transform = `translate(-${xCoordinate}%)`;
  console.log(slideNumber);
}

function selectSlide(n) {
  slideNumber = 2 * n;
  moveslide(-1 * n);
}
