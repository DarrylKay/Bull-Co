// -----------nav bar code---------------------------------------------------------------------

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// -----------main image autoplay code----------------------------------------------------------

const slides = document.querySelectorAll(".slide");

const auto = true;
const imageIntervalTime = 4000;
let slideInterval;

const nextImageSlide = () => {
  // Get current class
  const current = document.querySelector(".current");

  // Remove current class
  current.classList.remove("current");

  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// run slide automatically
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextImageSlide, imageIntervalTime);
}

// -----------reviews autoplay code------------------------------------------------------------

const reviews = document.querySelectorAll(".review");
const reviewsIntervalTime = 7500;

const nextReviewSlide = () => {
  // Get active class
  const active = document.querySelector(".active");
  // Remove active class
  active.classList.remove("active");
  // Check for next slide
  if (active.nextElementSibling) {
    // Add active to next sibling
    active.nextElementSibling.classList.add("active");
  } else {
    // Add active to start
    reviews[0].classList.add("active");
  }
  setTimeout(() => active.classList.remove("active"));
};

// run slide automatically
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextReviewSlide, reviewsIntervalTime);
}

//-----------------------SMOOTH SCROLL CODE----------------------------------------------------

// script from smoothscroll js library.
const scroll = new SmoothScroll('nav .nav-links li a[href*="#"]', {
  easing: "easeInOutQuad"
});
