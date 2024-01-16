function closeWindow() {
    window.close();
}
function displayPopup() {
    alert("This function is unavailable. Please click on envelope icon under Connect With Me instead.");
}


document.addEventListener("DOMContentLoaded", function () {
    var dropdownList = document.querySelector(".dropdown-list");
    var languagesLink = document.querySelector("nav ul li a[href='#']");

    languagesLink.addEventListener("click", function (e) {
        e.preventDefault();
        dropdownList.classList.toggle("show");
    });
});
