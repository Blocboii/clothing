window.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Fade out the video overlay as the user scrolls down
    // This makes the subsequent content's background visible
    // Adjust the logic based on your specific needs
    // if (scrollPosition < viewportHeight) {
    //     // Calculate a new opacity value between 0.5 and 1
    //     const newOpacity = 0.5 + (scrollPosition / viewportHeight) * 0.5;
    //     // Note: Direct video opacity changes might not work smoothly on all browsers;
    //     // affecting an overlay's opacity is often better.
    // }
});
