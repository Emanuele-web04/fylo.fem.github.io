var labelError = document.getElementById('label');
var errorMessage = document.getElementById('error');
var emailInput = document.getElementById('email-input');
const button = document.querySelector('#submit');

function validateEmail() {
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorMessage.innerHTML = "Please enter a valid email address";
        emailInput.style.color = "red";
        return false;
    }
    errorMessage.innerHTML = "";
    emailInput.style.color = "green";
    return true;
}

document.querySelector('#submit').onclick = function() {
    alert('Thank you for subscribing');
}

const hamburger_btn = document.querySelector('.ham_menu');

const mobile_menu = document.querySelector('.full-menu');

hamburger_btn.addEventListener('click', function() {
    hamburger_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});