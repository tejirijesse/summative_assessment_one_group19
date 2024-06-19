document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventDate = document.getElementById('eventDate').value;
    const tickets = document.getElementById('tickets').value;

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

    if (!namePattern.test(name)) {
        alert('Please enter a valid name.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number in the format (123) 456-7890.');
        return;
    }

    if (!datePattern.test(eventDate)) {
        alert('Please enter a valid date in the format MM/DD/YYYY.');
        return;
    }

    if (tickets < 1 || tickets > 10) {
        alert('Please enter a number of tickets between 1 and 10.');
        return;
    }

    alert('Form submitted successfully!');
});
