import './slider.js';


document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll("#hero-slides img");
  const dots = document.querySelectorAll("#slideDots span");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === index) ? "1" : "0";
      dots[i].classList.toggle("bg-emerald-600", i === index);
      dots[i].classList.toggle("bg-slate-300", i !== index);
    });
  }

  document.getElementById("nextSlide").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  document.getElementById("prevSlide").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  // Auto-slide setiap 5 detik
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4000);
});

