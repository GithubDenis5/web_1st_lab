document.addEventListener("DOMContentLoaded", () => {
  const colorBtn = document.getElementById("colorBtn");

  colorBtn.addEventListener("click", () => {
    const randomColor = getRandomColor();
    document.body.style.color = randomColor;
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});