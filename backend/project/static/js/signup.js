// // Get form elements
// let signupForm = document.querySelector('.signup form');
// let loginForm = document.querySelector('.login form');

// let usernameInput = signupForm.querySelector('input[name="txt"]');
// let emailInputSignup = signupForm.querySelector('input[name="email"]');
// let passwordInputSignup = signupForm.querySelector('input[name="pswd"]');
// let confirmPasswordInput = signupForm.querySelectorAll('input[name="pswd"]')[1]; 
// let roleInputsSignup = signupForm.querySelectorAll('input[name="role"]');

// let emailInputLogin = loginForm.querySelector('input[name="email"]');
// let passwordInputLogin = loginForm.querySelector('input[name="pswd"]');
// let roleInputsLogin = loginForm.querySelectorAll('input[name="role"]');

// ///////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////

// signupForm.addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     let username = usernameInput.value;
//     let email = emailInputSignup.value;
//     let password = passwordInputSignup.value;
//     let confirmPassword = confirmPasswordInput.value;
//     let selectedRoleInput = Array.from(roleInputsSignup).find(input => input.checked);
//     let role = selectedRoleInput ? selectedRoleInput.value : null;

//     if (!role) {
//         alert('Please choose your role!');
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

//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     if (users.some(user => user.username === username || user.email === email)) {
//         alert('A user with this username or email already exists!');
//         return;
//     }

//     let user = {
//         username: username,
//         email: email,
//         password: password,
//         role: role,
//         dateOfBirth:'',
//         contact:''
//     };

//     users.push(user);
//     localStorage.setItem('users', JSON.stringify(users));

//     alert('Signup successful!');
//     if (user) {
//         if (user.role === 'admin') {
//             window.location.href = "./admin_dashboard.html"; 
//         } else if (user.role === 'user') {
//             window.location.href = "./user_dashboard.html"; 
//         }

//     }
//     signupForm.reset();

// });


// //////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////

// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     let email = emailInputLogin.value;
//     let password = passwordInputLogin.value;
//     let selectedRoleInput = Array.from(roleInputsLogin).find(input => input.checked);
//     let role = selectedRoleInput ? selectedRoleInput.value : null;
//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     let user = users.find(user => user.email === email && user.password === password && user.role === role);

//     if (!role) {
//         alert('Please choose your role!');
//         return;
//     }
    
//     if (user) {
//         alert('Login successful!');
//         if (user.role === 'admin') {
//             window.location.href = "./admin_dashboard.html"; 
//         } else if (user.role === 'user') {
//             window.location.href = "./user_dashboard.html"; 
//         }
//     } else {
//         alert('Invalid email, password, or role!');
//     }

//     loginForm.reset();
// });


