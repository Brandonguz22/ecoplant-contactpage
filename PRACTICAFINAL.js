const backgroundImages = [
    "https://fondosmil.com/fondo/26786.jpg",
    "https://fondosmil.com/fondo/26809.jpg",
    "https://fondosmil.com/fondo/26832.jpg",
    "https://images6.alphacoders.com/410/410481.jpg",
  ];
  
  let currentImageIndex = 0;
  
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    const backgroundImageUrl = `url(${backgroundImages[currentImageIndex]})`;
    const bgImage = document.querySelector(".bg-image");
    bgImage.style.backgroundImage = backgroundImageUrl;
    bgImage.classList.remove("show");
    setTimeout(() => {
      bgImage.classList.add("show");
    }, 100);
  }, 5000);
  
  

