let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = slider.querySelectorAll('img');

function showSlide(index) {
    if (index < 0) currentIndex = slides.length - 1;
    else if (index >= slides.length) currentIndex = 0;
    else currentIndex = index;

    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optional: swipe gesture for mobile
let startX = 0;

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    else if (endX - startX > 50) prevSlide();
});

showSlide(0);
