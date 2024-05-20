window.onload = function () {
    var today = new Date();
    var maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 21); // Set maximum date to three weeks from today
    var dateInput = document.getElementById('date');
    dateInput.min = today.toISOString().split('T')[0]; // Set minimum date to today
    dateInput.max = maxDate.toISOString().split('T')[0]; // Set maximum date to three weeks from today
};

