document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const carouselTrack = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    let indicators = [];
    //const prevBtn = document.getElementById('carouselPrev');
    //const nextBtn = document.getElementById('carouselNext');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Build indicators dynamically based on slide count
    const buildIndicators = () => {
        if (!indicatorsContainer) return;
        indicatorsContainer.innerHTML = '';
        indicators = Array.from({ length: totalSlides }, (_, i) => {
            const btn = document.createElement('button');
            btn.className = 'indicator' + (i === currentSlide ? ' active' : '');
            btn.type = 'button';
            btn.setAttribute('aria-label', `Slide ${i + 1}`);
            btn.setAttribute('aria-controls', 'carouselTrack');
            btn.dataset.slide = String(i);
            indicatorsContainer.appendChild(btn);
            btn.addEventListener('click', () => {
                stopAutoPlay();
                goToSlide(i);
                startAutoPlay();
            });
            return btn;
        });
    };

    // Auto-play carousel with 5 second interval
    let autoPlayInterval;

    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            goToSlide((currentSlide + 1) % totalSlides);
        }, 5000); 
    };

    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };

    // Go to specific slide
    const goToSlide = (slideIndex) => {
        // Update current slide index
        currentSlide = slideIndex;

        // Update transform for smooth sliding
        const translateX = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-selected', 'true');
            } else {
                indicator.classList.remove('active');
                indicator.setAttribute('aria-selected', 'false');
            }
        });
    };

    // Previous button
    /* // Previous button (optional, currently disabled)
    prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
        startAutoPlay();
    });

    // Next button (optional, currently disabled)
    nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        goToSlide((currentSlide + 1) % totalSlides);
        startAutoPlay();
    }); */

    // Build indicators at startup
    buildIndicators();

    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);

    // Start auto-play
    startAutoPlay();

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    });

    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    });

    const handleSwipe = () => {
        if (touchEndX < touchStartX - 50) {
            // Swipe left
            goToSlide((currentSlide + 1) % totalSlides);
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right
            goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
        }
    };
});
