let currentSlide = 0;
const carouselImgs = document.querySelectorAll('.carousel img');

function showNextBook() {
  currentSlide++; // Increment current slide index

  // Check if exceeding image count
  if (currentSlide >= carouselImgs.length) {
    currentSlide = 0; // Reset to first image
  }

  // Loop through images and hide all
  carouselImgs.forEach(img => img.classList.add('hidden'));

  // Show the current slide image
  carouselImgs[currentSlide].classList.remove('hidden');
}
