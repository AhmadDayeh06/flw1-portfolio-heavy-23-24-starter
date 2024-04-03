// Slideshow example
var slideIndex = 0;

function showSlides() {
    var slides = document.getElementsByClassName('mySlides');

    // Check if there are slides
    if (slides.length > 0) {
        // Hide all slides
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        // Increment the slide index
        slideIndex++;

        // Reset to the first slide if reached the end
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Display the current slide
        slides[slideIndex - 1].style.display = 'block';
    }

    // Call the function recursively
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Call the function to start the slideshow
showSlides();
