document.addEventListener('DOMContentLoaded', function() {
    // Get references to all input fields and error message elements
    const usernameInput = document.getElementById('username');
    const dateOfBirthInput = document.getElementById('dateOfBirth');
    const emailInput = document.getElementById('email');
    const contactInput = document.getElementById('contact');
    const oldPasswordInput = document.getElementById('oldPassword');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const usernameError = document.getElementById('usernameError');
    const dateOfBirthError = document.getElementById('dateOfBirthError');
    const emailError = document.getElementById('emailError');
    const contactError = document.getElementById('contactError');
    const passwordError = document.getElementById('passwordError');
    const roleElement = document.getElementById('role');


    // Function to validate all input fields
    const validateInputs = () => {
        let isValid = true;

        // Username validation
        if (usernameInput.value.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters';
            isValid = false;
        } else {
            usernameError.textContent = '';
        }

        // Date of Birth validation
        // Check if date of birth is provided
        if (dateOfBirthInput.value === '') {
            dateOfBirthError.textContent = 'Date of Birth is required';
            isValid = false;
        } else {
            // Calculate age based on provided date of birth
            const dob = new Date(dateOfBirthInput.value);
            const now = new Date();
            const diff = now - dob;
            const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

            // Check if age is less than 3 years
            if (age < 3) {
                dateOfBirthError.textContent = 'You must be at least 3 years old';
                isValid = false;
            } else {
                dateOfBirthError.textContent = '';
            }
        }

        // Email validation (basic validation)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Contact No validation
        if (contactInput.value.length !== 11 || isNaN(contactInput.value)) {
            contactError.textContent = 'Contact No must be 11 digits';
            isValid = false;
        } else {
            contactError.textContent = '';
        }

        // Password validation
        if (newPasswordInput.value !== confirmPasswordInput.value) {
            passwordError.textContent = 'Passwords do not match';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        return isValid;
    };

    // Function to save changes
    const saveChanges = () => {
        // Check if inputs are valid
        if (!validateInputs()) {
            console.log("Changes could not be saved. Please fix the validation errors.");
            return;
        }

        // Replace this with your actual code to save changes
        console.log("Changes saved successfully!");
    };

    // Function to enable editing of fields
    const enableEditing = () => {
        // Make input fields editable
        usernameInput.removeAttribute('readonly');
        dateOfBirthInput.removeAttribute('readonly');
        emailInput.removeAttribute('readonly');
        contactInput.removeAttribute('readonly');
        oldPasswordInput.removeAttribute('readonly');
        newPasswordInput.removeAttribute('readonly');
        confirmPasswordInput.removeAttribute('readonly');

        // Set text color to black for editable fields
        usernameInput.style.color = 'black';
        dateOfBirthInput.style.color = 'black';
        emailInput.style.color = 'black';
        contactInput.style.color = 'black';
        oldPasswordInput.style.color = 'black';
        newPasswordInput.style.color = 'black';
        confirmPasswordInput.style.color = 'black';
    };

    // Function to disable editing of fields
    const disableEditing = () => {
        // Make input fields read-only
        usernameInput.setAttribute('readonly', true);
        dateOfBirthInput.setAttribute('readonly', true);
        emailInput.setAttribute('readonly', true);
        contactInput.setAttribute('readonly', true);
        oldPasswordInput.setAttribute('readonly', true);
        newPasswordInput.setAttribute('readonly', true);
        confirmPasswordInput.setAttribute('readonly', true);

        // Set text color to grey for non-editable fields
        usernameInput.style.color = 'grey';
        dateOfBirthInput.style.color = 'grey';
        emailInput.style.color = 'grey';
        contactInput.style.color = 'grey';
        oldPasswordInput.style.color = 'grey';
        newPasswordInput.style.color = 'grey';
        confirmPasswordInput.style.color = 'grey';
    };

    // Function to show password fields
    const showPasswordFields = () => {
        // Show password fields
        document.querySelector('.password-fields').style.display = 'block';
    };

    // Event listener for the "Edit Profile" button
    document.querySelector('.edit-profile').addEventListener('click', function(event) {
        // Enable editing of fields
        enableEditing();
    });

    // Event listener for the "Change Password" button
    document.querySelector('.change-password').addEventListener('click', function(event) {
        // Show password fields
        showPasswordFields();
        // Enable editing for all fields
        enableEditing();
    });

    // Event listener for the "Save Changes" button
    document.querySelector('.save-changes').addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Check if inputs are valid
        if (validateInputs()) {
            // Save changes if inputs are valid
            saveChanges();
            // Disable editing of fields
            disableEditing();
        }
        else {
            // If inputs are not valid, display an error message or take appropriate action
            console.log("Changes could not be saved. Please fix the validation errors.");
        }
    });

    // Call disableEditing function initially to make fields non-editable
    disableEditing();


});
