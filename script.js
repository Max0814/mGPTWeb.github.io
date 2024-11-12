document.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  // Hero section smooth fade-out on scroll
  document.querySelector(".hero").style.opacity = 1 - scrollPos / 700;

  // Reveal content on scroll
  document.querySelectorAll(".feature, .gallery-item img").forEach((item) => {
    const itemPos = item.getBoundingClientRect().top;
    if (itemPos < window.innerHeight * 0.8) {
      item.classList.add("show");
    }
  });
});
