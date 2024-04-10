function displayPopup() {
    alert("This function is unavailable. Please click on envelope icon under Connect With Me instead.");
}

function scrollToHeading(headingId) {
    var headingElement = document.getElementById(headingId);
    if (headingElement) {
        var scrollOffset = headingElement.getBoundingClientRect().top + window.scrollY;
        var startPosition = window.scrollY;
        var distance = scrollOffset - startPosition;
        var duration = 400; // Adjust the duration of the scroll animation (in milliseconds)

        var startTime = null;
        function scrollToTimestamp(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var easeInOutQuad = function(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }; // Easing function for smooth animation
            window.scrollTo(0, startPosition + easeInOutQuad(Math.min(progress / duration, 1)) * distance);
            if (progress < duration) {
                window.requestAnimationFrame(scrollToTimestamp);
            }
        }

        window.requestAnimationFrame(scrollToTimestamp);
    }
}