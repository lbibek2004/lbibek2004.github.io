// Smooth scrolling to a specific heading
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

// EmailJS integration for form submission
(function () {
  emailjs.init("ShVxVoojS6XK09raH");
})();

function attachEmailForm(formId) {
  var form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    emailjs
      .sendForm("service_lbibek2004gmail", "template_x9dl7y7", form)
      .then(function () {
        alert("Email sent!");
        form.reset();
      })
      .catch(function (error) {
        alert("Failed: " + error.text);
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send";
        }
      });
  });
}


document.addEventListener("DOMContentLoaded", function () {
  attachEmailForm("contact-form");
  attachEmailForm("feedback-form");
});
