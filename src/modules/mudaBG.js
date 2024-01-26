document.querySelector("#search").addEventListener("click", function(event) {
    changeBackground();
  });
  
  function changeBackground() {
      const images = ["city1.jpg", "city3.jpg", "city4.jpg", "city5.jpg"];
      const img = images[Math.floor(Math.random() * images.length)];
      document.body.style.backgroundImage = `url('../src/assets/imgs/${img}')`;
  }
  