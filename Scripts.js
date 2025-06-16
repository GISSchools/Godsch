// Login Form
const loginForm = document.getElementById('login-form');
const loginResponse = document.getElementById('login-response');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (username && password) {
            loginResponse.innerHTML = '<p>Login Successful! Redirecting to your dashboard...</p>';
            loginResponse.classList.add('show', 'success');
            loginForm.reset(); // Clear form

            // Simulate redirect to dashboard after 2 seconds
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 2000);
        } else {
            loginResponse.innerHTML = '<p>Please enter both username and password.</p>';
            loginResponse.classList.add('show', 'error');

            // Hide error after 3 seconds
            setTimeout(() => {
                loginResponse.classList.remove('show', 'error');
                loginResponse.innerHTML = '';
            }, 3000);
        }
    });
}

// Contact Form (Optional Validation)
const contactForm = document.getElementById('contact-form');
const contactResponse = document.getElementById('contact-response');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message || !emailRegex.test(email)) {
            e.preventDefault(); // Prevent submission if invalid
            contactResponse.innerHTML = '<p>Please fill out all fields correctly.</p>';
            contactResponse.classList.add('show', 'error');

            // Hide error after 3 seconds
            setTimeout(() => {
                contactResponse.classList.remove('show', 'error');
                contactResponse.innerHTML = '';
            }, 3000);
        } else {
            // FormSubmit handles submission; no success message here to avoid duplication
            contactResponse.innerHTML = '<p>Sending your message...</p>';
            contactResponse.classList.add('show', 'success');
        }
    });
}