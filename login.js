const username = "Maduka";
const password = "123";


const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");


form.addEventListener("submit", (e) => {

    e.preventDefault();


    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;


    if (inputUsername === username && inputPassword === password) {
        window.location.href = '\index.html';
    } else {

        errorMessage.textContent = "Invalid username or password";
    }
});