console.log("Welcome to Gareeb Da Dhaba!");
let currentSlide = 0;
const testimonials = document.querySelector('.testimonial-slider');
const totalSlides = document.querySelectorAll('.testimonial-card').length;

function showNextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
  } else {
    currentSlide = 0; // Loop back to the first slide
  }
  updateSlider();
}

function showPrevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - 1; // Go to the last slide
  }
  updateSlider();
}

function updateSlider() {
  testimonials.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto slide every 4 seconds
setInterval(showNextSlide, 4000);

// Add event listeners to slider arrows
document.querySelector('.testimonial-slider::before').addEventListener('click', showPrevSlide);
document.querySelector('.testimonial-slider::after').addEventListener('click', showNextSlide);
