document.addEventListener('DOMContentLoaded', function() {
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

    const validateInputs = () => {
        let isValid = true;

        if (usernameInput.value.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters';
            isValid = false;
        } else {
            usernameError.textContent = '';
        }

        if (dateOfBirthInput.value === '') {
            dateOfBirthError.textContent = 'Date of Birth is required';
            isValid = false;
        } else {
            const dob = new Date(dateOfBirthInput.value);
            const now = new Date();
            const diff = now - dob;
            const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

            if (age < 3) {
                dateOfBirthError.textContent = 'You must be at least 3 years old';
                isValid = false;
            } else {
                dateOfBirthError.textContent = '';
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (contactInput.value.length !== 11 || isNaN(contactInput.value)) {
            contactError.textContent = 'Contact No must be 11 digits';
            isValid = false;
        } else {
            contactError.textContent = '';
        }

        if (newPasswordInput.value !== confirmPasswordInput.value) {
            passwordError.textContent = 'Passwords do not match';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        return isValid;
    };

    const saveChanges = () => {
        if (!validateInputs()) {
            console.log("Changes could not be saved. Please fix the validation errors.");
            return;
        }
    
        const formData = new FormData();
        formData.append('username', usernameInput.value);
        formData.append('dateOfBirth', dateOfBirthInput.value);
        formData.append('email', emailInput.value);
        formData.append('contact', contactInput.value);
        formData.append('oldPassword', oldPasswordInput.value);
        formData.append('newPassword', newPasswordInput.value);
        formData.append('confirmPassword', confirmPasswordInput.value);
    
        const saveProfileUrl = document.querySelector('.save-changes').dataset.saveProfileUrl;
    
        fetch(saveProfileUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value,
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Profile updated successfully.');
                disableEditing();
                document.querySelector('.password-fields').style.display = 'none';
            } else {
                if (data.error) {
                    passwordError.textContent = data.error;
                }
                alert('Failed to update profile.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred.');
        });
    };
    

    const enableEditing = () => {
        usernameInput.removeAttribute('readonly');
        dateOfBirthInput.removeAttribute('readonly');
        emailInput.removeAttribute('readonly');
        contactInput.removeAttribute('readonly');
        oldPasswordInput.removeAttribute('readonly');
        newPasswordInput.removeAttribute('readonly');
        confirmPasswordInput.removeAttribute('readonly');

        usernameInput.style.color = 'black';
        dateOfBirthInput.style.color = 'black';
        emailInput.style.color = 'black';
        contactInput.style.color = 'black';
        oldPasswordInput.style.color = 'black';
        newPasswordInput.style.color = 'black';
        confirmPasswordInput.style.color = 'black';
    };

    const disableEditing = () => {
        usernameInput.setAttribute('readonly', true);
        dateOfBirthInput.setAttribute('readonly', true);
        emailInput.setAttribute('readonly', true);
        contactInput.setAttribute('readonly', true);
        oldPasswordInput.setAttribute('readonly', true);
        newPasswordInput.setAttribute('readonly', true);
        confirmPasswordInput.setAttribute('readonly', true);

        usernameInput.style.color = 'grey';
        dateOfBirthInput.style.color = 'grey';
        emailInput.style.color = 'grey';
        contactInput.style.color = 'grey';
        oldPasswordInput.style.color = 'grey';
        newPasswordInput.style.color = 'grey';
        confirmPasswordInput.style.color = 'grey';
    };

    const showPasswordFields = () => {
        document.querySelector('.password-fields').style.display = 'block';
    };

    document.querySelector('.edit-profile').addEventListener('click', function(event) {
        enableEditing();
    });

    document.querySelector('.change-password').addEventListener('click', function(event) {
        showPasswordFields();
        enableEditing();
    });

    document.querySelector('.save-changes').addEventListener('click', function(event) {
        event.preventDefault();

        if (validateInputs()) {
            saveChanges();
        } else {
            console.log("Changes could not be saved. Please fix the validation errors.");
        }
    });

    disableEditing();
});