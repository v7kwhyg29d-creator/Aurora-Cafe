const form = document.querySelector(".contact-form");
const successMessage = document.querySelector("#success-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    successMessage.style.display = "block";
    form.reset();
});