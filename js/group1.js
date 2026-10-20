
const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();

    if (fullname.length < 3) {
        message.style.color = "red";
        message.textContent = "Please enter your full name (at least 3 characters).";
        return;
    }

    message.style.color = "blue";
    message.textContent = "Your form has been submitted successfully!";

    form.reset();
});
