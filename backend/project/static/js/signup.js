// // Get form elements
// let signupForm = document.querySelector('.signup form');

// let usernameInput = signupForm.querySelector('input[name="username"]');
// let emailInputSignup = signupForm.querySelector('input[name="email"]');
// let passwordInputSignup = signupForm.querySelector('input[name="pswd"]');
// let confirmPasswordInput = signupForm.querySelector('input[name="pswdconf"]');
// let userRoleInput = signupForm.querySelector('input[name="role1"]');
// let adminRoleInput = signupForm.querySelector('input[name="role2"]');

// ///////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////

// signupForm.addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     let username = usernameInput.value;
//     let email = emailInputSignup.value;
//     let password = passwordInputSignup.value;
//     let confirmPassword = confirmPasswordInput.value;

//     // Check if either admin or user role is selected
//     if (!userRoleInput.checked && !adminRoleInput.checked) {
//         alert('Please choose your role!');
//         return;
//     }

//     if (!username.trim()) {
//         alert('Username field cannot be empty!');
//         return;
//     }

//     if (!email.trim()) {
//         alert('Email field cannot be empty!');
//         return;
//     }

//     if (!validateEmail(email)) {
//         alert('Please enter a valid email address!');
//         return;
//     }

//     if (password.length < 8) {
//         alert('Password must be at least 8 characters long!');
//         return;
//     }

//     if (password !== confirmPassword) {
//         alert('Passwords do not match!');
//         return;
//     }

//     if (!role) {
//         alert('Please choose your role!');
//         return;
//     }

//     // Submit the form if all validations pass
//     signupForm.submit();
// });

// function validateEmail(email) {
//     // Email validation regex
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }


// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     let email = emailInputLogin.value;
//     let password = passwordInputLogin.value;

//     if (!email.trim()) {
//         alert('Email field cannot be empty!');
//         return;
//     }

//     if (!validateEmail(email)) {
//         alert('Please enter a valid email address!');
//         return;
//     }

//     if (!password.trim()) {
//         alert('Password field cannot be empty!');
//         return;
//     }

//     loginForm.submit();
// });
