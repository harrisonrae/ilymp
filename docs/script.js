const images = document.querySelectorAll('.floating-image');

images.forEach(image => {
    let x = Math.random() * window.innerWidth; // Random x position
    let y = Math.random() * (window.innerHeight * 0.2); // Random y position (only in the top 50% of the screen)
    let dx = (Math.random() - 0.5) * 1; // Random horizontal movement
    let dy = (Math.random() - 0.5) * 1; // Random vertical movement

    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

    function moveImage() {
        x += dx;
        y += dy;

        // Bounce off the side walls
        if (x + image.offsetWidth > window.innerWidth || x < 0) dx = -dx;

        // Bounce off the "walls" at the top and halfway down the screen
        const maxY = window.innerHeight * 0.8; // Limit to top 50% of the screen
        if (y + image.offsetHeight > maxY || y < 0) dy = -dy;

        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        requestAnimationFrame(moveImage);
    }

    moveImage();
});


// Splash screen functionality
const splashScreen = document.getElementById('splash-screen');
const enterImage = document.getElementById('enter-image');
const mainContent = document.getElementById('main-content');
const scriptt = document.getElementById('scriptt');
const backgroundMusic = document.getElementById('background-music'); // Audio element
const seeWorksButton = document.getElementById('see-works-button');
const carousel = document.getElementById('carousel');
const carouselTrack = document.querySelector('.carousel-track');
const carouselImages = document.querySelectorAll('.carousel-image');
const prevButton = document.getElementById('carousel-prev');
const nextButton = document.getElementById('carousel-next');

enterImage.addEventListener('click', () => {
    splashScreen.style.display = 'none'; // Hide splash screen
    mainContent.style.display = 'block'; // Show main content
    backgroundMusic.play(); // Start playing the background music
    seeWorksButton.style.display = 'none';
    scriptt.style.display = 'none'; // Show main content
});

     // Event listener for "See Works" button
     seeWorksButton.addEventListener('click', () => {
        backgroundVideo.style.display = 'none';
        floatingImages.forEach(img => img.style.display = 'none');

    
});


  // Carousel navigation
  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % carouselImages.length;
    updateCarouselPosition();
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
    updateCarouselPosition();
});

function updateCarouselPosition() {
    const slideWidth = carouselImages[0].clientWidth;
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Return to background video after carousel ends
function returnToBackgroundVideo() {
    carousel.style.display = 'none';
    backgroundVideo.style.display = 'block';
    floatingImages.forEach(img => img.style.display = 'block');
}

// Automatically return to background video after cycling through all images
setTimeout(() => {
    returnToBackgroundVideo();
}, carouselImages.length * 5000); // Assume 5 seconds per image
