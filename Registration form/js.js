// script.js
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validation flags
    let isValid = true;

    // Clear previous error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    // Validate username
    if (username.length < 5) {
        document.getElementById("usernameError").innerText = "Username must be at least 5 characters.";
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }

    // Validate email using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    // Validate password length
    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters.";
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        document.getElementById("confirmPasswordError").style.display = "block";
        isValid = false;
    }

    // If all validations pass, proceed with form submission (e.g., send data to the server)
    if (isValid) {
        alert("Registration successful!");
        // You can now send the form data to the server here using AJAX or form submission
    }
});
