document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Hardcoded credentials
    const validUsername = 'Star';
    const validPassword = 'Star123';

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered username and password match
    if (username === validUsername && password === validPassword) {
        // Login successful, redirect to another page
        window.location.href = 'https://spectraspec.github.io/Anime'; // Redirect to homepage or another page
    } else {
        // Show error message if the credentials are invalid
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password!';
        errorMessage.style.display = 'block';
    }
});

