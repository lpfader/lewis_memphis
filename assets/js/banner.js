// banner.js
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const banner = document.querySelector('.memphis-banner');

  // Adjust animation speed based on scroll position
  const speed = 10 - Math.min(scrollY / 100, 8);
  banner.style.animationDuration = `${speed}s`;

  // Optional: add a slight hue shift for extra Memphis flair
  banner.style.filter = `hue-rotate(${scrollY / 5}deg)`;
  console.log("banner.js loaded");

});
