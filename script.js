const words = ["AIML Engineer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

document.addEventListener("DOMContentLoaded", () => {
  const typewriterText = document.querySelector(".typewriter-text");

  function typeEffect() {
    if (!typewriterText) return;

    const currentWord = words[index];
    let displayText = currentWord.substring(0, charIndex);
    typewriterText.textContent = displayText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) index = (index + 1) % words.length;
      setTimeout(typeEffect, 1000);
    }
  }

  setTimeout(typeEffect, 500);

  const toggleBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  const overlay = document.createElement("div");
  overlay.id = "menuOverlay";
  document.body.appendChild(overlay);

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
      overlay.classList.toggle("active");
      toggleBtn.innerHTML = navLinks.classList.contains("active") ? "&times;" : "&#9776;";
    });

    overlay.addEventListener("click", () => {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
      toggleBtn.innerHTML = "&#9776;";
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        toggleBtn.innerHTML = "&#9776;";
      }
    });
  }

  const sayHelloBtn = document.getElementById("sayHelloBtn");
  if (sayHelloBtn) {
    sayHelloBtn.addEventListener("click", () => {
      window.location.href = "mailto:ppriyadarshini2003@gmail.com?subject=Hello!";
    });
  }
});

// Animate images on scroll
const images = document.querySelectorAll(".animate-image");

function revealImages() {
  images.forEach(img => {
    const top = img.getBoundingClientRect().top;
    const height = window.innerHeight * 0.9;
    if (top < height) {
      img.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealImages);
revealImages();

// Fade-left animation on scroll
const fadeLeftElements = document.querySelectorAll(".fade-left");

function revealFadeLeft() {
  fadeLeftElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.9;
    if (top < triggerPoint) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealFadeLeft);
revealFadeLeft();

