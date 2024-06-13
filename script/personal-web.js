function displayPopup() {
    alert("This function is unavailable. Please click on envelope icon under Connect With Me instead.");
}
function confirmationPopup(){
    var confirmation = confirm("You will be redirected to your email client for further actions. Do you wish to proceed ?");
    if (confirmation){
        var text = document.getElementById("user-message").value;
        var mailtoLink = "mailto:lbibek2004@gmail.com?subject=From Github: I want to connect&body=" + encodeURIComponent(text);
        window.location.href = mailtoLink;
    }
    else{
        alert("You've terminated the action.");
    }
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
function getText() {
    var text = document.getElementsByName("feedback-form-textarea")[0].value;
    console.log(text); // Or do whatever you want with the text
  }
  function insertText() {
    var text = document.getElementById("feedback-form-textarea").value;
    this.href += encodeURIComponent(text);
  }
