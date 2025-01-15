const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.children.length - 1;
  updateSlide();
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex < slides.children.length - 1) ? currentIndex + 1 : 0;
  updateSlide();
});

setInterval(() => {
  currentIndex = (currentIndex < slides.children.length - 1) ? currentIndex + 1 : 0;
  updateSlide();
}, 5000);

document
.getElementById("contactForm")
.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received.`);
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill out all fields correctly.");
  }
});

// Mobile Menu Toggle Functionality
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
mobileMenu.classList.toggle("hidden");
});



