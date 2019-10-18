export default function slider () {
    let slideIndex = 1, // Number of active slide
        slides = document.querySelectorAll('.slider-item'), // All sliders we need slide
        prev = document.querySelector('.prev'), // Button prev
        next = document.querySelector('.next'), // Button next
        dotsWrap = document.querySelector('.slider-dots'),  // Wrapper for dot buttons
        dots = dotsWrap.querySelectorAll('.dot'); // All dot button for sliding

    showSlide(slideIndex);

    /**
     * @param {n} - number of slide 
     */
    function showSlide(n) {
        // Toggle to first slide
        if (n > slides.length) {
            n = slideIndex = 1;
        }

        // Toggle to last slide
        if (n < 1) {
            n = slideIndex = slides.length;
        }

        slides.forEach((item, index) => (n == ++index) ? showImage(item) : hideImage(item));
        dots.forEach((item, index) => (n == ++index) ? activeDot(item, 'dot-active') : anactiveDot(item, 'dot-active'));
    }


    function plusSlides(n) {
        showSlide(slideIndex += n);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n);
    }

    prev.addEventListener('click', () => plusSlides(-1));
    next.addEventListener('click', () => plusSlides(1));

    dotsWrap.addEventListener('click', (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    /**
     * @param {item} - Shown element
     */
    function showImage(item) {
        item.style.display = 'block';
    }

    /**
     * @param {item} - Hide element
     */
    function hideImage(item) {
        item.style.display = 'none';
    }

    /**
     * @param {item} - Active dot of active slide element
     * @param {cls} - CSS class for styling dots
     */
    function activeDot(item, cls) {
        if (!item.classList.contains(cls)) {
            item.classList.add(cls);
        }
    }

    /**
     * @param {item} - Anactive dot of active slide element
     * @param {cls} - CSS class for styling dots
     */
    function anactiveDot(item, cls) {
        item.classList.remove(cls);
    }
}