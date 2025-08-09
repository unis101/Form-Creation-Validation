document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const feedbackDiv = document.getElementById("feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;
        let messages = [];

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const email = document.getElementById("email").value.trim();

        // Validation for username
        if (username === "" || username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Validation for password
        if (password.length < 6) {
            isValid = false;
            messages.push("Password must be at least 6 characters long.");
        }

        // Validation for email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Feedback display logic
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});