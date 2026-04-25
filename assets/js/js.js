console.log("Shapes found:", document.querySelectorAll('.memphis-float').length);
console.log("JS is loading!");
document.querySelectorAll('.memphis-float').forEach(shape => {
  const speed = 0.3 + Math.random() * 0.4;
  let y = Math.random() * window.innerHeight;

  function float() {
    y += speed;
    if (y > window.innerHeight) y = -50;
    shape.style.transform = `translateY(${y}px)`;
    requestAnimationFrame(float);
  }

  float();
});
