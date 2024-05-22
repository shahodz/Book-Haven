let signupForm = document.querySelector('.signup form');

let usernameInput = signupForm.querySelector('input[name="username"]');
let emailInputSignup = signupForm.querySelector('input[name="email"]');
let passwordInputSignup = signupForm.querySelector('input[name="pswd"]');
let confirmPasswordInput = signupForm.querySelector('input[name="pswdconf"]');
let isAdminCheckbox = signupForm.querySelector('input[name="is_admin"]');

function validateEmail(email) {
    // Email validation regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

signupForm.addEventListener('submit', function(event) {
    let username = usernameInput.value.trim();
    let email = emailInputSignup.value.trim();
    let password = passwordInputSignup.value.trim();
    let confirmPassword = confirmPasswordInput.value.trim();
    let isAdmin = isAdminCheckbox.checked;

    if (!username) {
        alert('Username field cannot be empty!');
        event.preventDefault();
        return;
    }

    if (!email) {
        alert('Email field cannot be empty!');
        event.preventDefault();
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        event.preventDefault();
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        event.preventDefault();
        return;
    }
});
