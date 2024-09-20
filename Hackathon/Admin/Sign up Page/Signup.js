document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const idCard = document.getElementById('id-card').value;
    const userType = document.getElementById('user-type').value;

    if (firstName && lastName && email && password && idCard && userType) {
        alert('Sign up successful!');
        // Submit data to server (Firebase or other backend)
    } else {
        alert('Please fill out all fields.');
    }
});

