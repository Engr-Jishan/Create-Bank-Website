document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'j@gmail.com' && userPassword == 'cool') {
        console.log('valid user');
        window.location.href = 'bank.html';
    }

    /* if (userEmail == 'yourjishan66@gmail.com' && userPassword == 'badamipacha69') {
        console.log('valid user');
    } */
})