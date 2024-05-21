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
    event.preventDefault(); 

    let username = usernameInput.value;
    let email = emailInputSignup.value;
    let password = passwordInputSignup.value;

    if (!username.trim()) {
        alert('Username field cannot be empty!');
        return;
    }

    if (!email.trim()) {
        alert('Email field cannot be empty!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        return;
    }

    // Submit the form if all validations pass
    $.ajax({
        url: '/auth/signup/',  // the endpoint
        type: 'POST',  // http method
        data: $(this).serialize(),  // data sent with the post request

        // handle a successful response
        success: function(response) {
            if (response.redirect_url) {
                window.location.href = response.redirect_url;  // redirect to the dashboard
            } else {
                // If there's no redirect_url in the response, submit the form normally
                signupForm.submit();
            }
        },

        // handle a non-successful response
        error: function(xhr, errmsg, err) {
            var json = JSON.parse(xhr.responseText);
            alert(json.error);  // display the error message
        }
    });
});
