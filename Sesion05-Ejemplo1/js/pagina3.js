const anchoImg = 1100; // Ancho de cada imagen en píxeles

const sliderImages = document.getElementById('sliderImages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderDots = document.getElementById('sliderDots');
const totalImages = sliderImages.children.length;
let currentIndex = 0;

// Crear dots
for (let i = 0; i < totalImages; i++) {
  const dot = document.createElement('button');
  dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goToSlide(i));
  sliderDots.appendChild(dot);
}

function updateSlider() {
  sliderImages.style.transform = `translateX(-${currentIndex * anchoImg}px)`;
  Array.from(sliderDots.children).forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
});

// Auto-slide cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
}, 5000);