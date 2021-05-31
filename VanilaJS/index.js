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
let slideNumber = 1;
let direction = 1;
const slidesChainHtml = document.querySelector('.slides-chain');
const slides2 = document.querySelectorAll('.slides-2');
const carousel = document.querySelector('.carousel');

// setSlide(slideNumber);

function setSlide(n) {
  const dotsHtml = document.querySelectorAll('.dot-2');
  slideNumber = n;
  const xCoordinate = -(direction * 20);
  slidesChainHtml.style.transform = `translate(${xCoordinate}%)`;

  console.log(slideNumber);

  // selecting dots
  for (i = 0; i < dotsHtml.length; i++) {
    dotsHtml[i].className = dotsHtml[i].className.replace(' active', '');
  }

  dotsHtml[slideNumber - 1].className += ' active';
}

function moveSlide(n) {
  if (n === 1) {
    carousel.style.justifyContent = 'flex-start';
    direction = 1;

    // setting the silde number
    if (slideNumber === slides2.length) {
      setSlide(1);
      return;
    }
  } else if (n === -1) {
    carousel.style.justifyContent = 'flex-end';
    direction = -1;

    // setting the silde number
    if (slideNumber === 1) {
      setSlide(5);
      return;
    }
  }

  setSlide((slideNumber += n));
}

slidesChainHtml.addEventListener('transitionend', function () {
  if (direction === 1) {
    slidesChainHtml.append(slidesChainHtml.firstElementChild);
  } else {
    slidesChainHtml.prepend(slidesChainHtml.lastElementChild);
  }

  // we set the transition to none because the following transform should not transition
  slidesChainHtml.style.transition = 'none';
  slidesChainHtml.style.transform = 'translate(0)';

  // we reset the transition
  setTimeout(() => {
    slidesChainHtml.style.transition = 'transform 0.5s ease';
  });
  console.log(direction);
});
