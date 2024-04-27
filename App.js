let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.sign-up-slides img');

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    slides[i].style.opacity = 0;
    slides[i].style.transition = 'opacity 1.5s ease-in-out'; // Ad
  }

  // Increment slideIndex and show the corresponding slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 1].style.opacity = 1;

  // Change slide every 2 seconds
  setTimeout(showSlides, 3000);
}
