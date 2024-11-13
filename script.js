// 節流滾動事件
let isScrolling = false;

document.addEventListener("scroll", function () {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      handleScroll();
      isScrolling = false;
    });
    isScrolling = true;
  }
});

function handleScroll() {
  const scrollPos = window.scrollY;

  // Hero section smooth fade-out on scroll
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = Math.max(1 - scrollPos / 700, 0);
  }

  // Reveal content on scroll
  document.querySelectorAll(".feature, .gallery-item img").forEach((item) => {
    const itemPos = item.getBoundingClientRect().top;
    if (itemPos < window.innerHeight * 0.8) {
      item.classList.add("show");
    }
  });
}
