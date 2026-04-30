console.log("Shapes found:", document.querySelectorAll('.memphis-float').length);
console.log("JS is loading!");

document.querySelectorAll('.memphis-float').forEach(shape => {
const speed = 0.2 + Math.random() * 1.2;


  // Random X position between the two banners
  const x = 200 + Math.random() * (window.innerWidth - 400);
  shape.style.left = `${x}px`;

let y = Math.random() * window.innerHeight;


  function float() {
    y += speed;
    if (y > window.innerHeight) y = -50 - Math.random() * 150;
    shape.style.transform = `translateY(${y}px)`;
    requestAnimationFrame(float);
  }

  float();
});
