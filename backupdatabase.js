const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMsg = document.querySelector('#error-msg');

const username = 'admin'; 
const password = 'password123'; 
const username1 = 'kali'; 
const password2 = 'kali'; 
const username3 = 'baron88894';
const password4 = 'Meyeu1981';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputUsername = usernameInput.value;
  const inputPassword = passwordInput.value;

  if (inputUsername === username && inputPassword === password) {
    // Login successful, redirect to dashboard or whatever
    window.location.href = "mainweb.html";
    alert('Login succesfull')
  } else {
    errorMsg.textContent = 'Invalid username or password';
  }
  if (inputUsername === username1 && inputPassword === password2) {
    // Login successful, redirect to dashboard or whatever
    window.location.href = "mainweb.html";
    alert('Login succesfull')
  } else {
    errorMsg.textContent = 'Invalid username or password';
  }
  if (inputUsername === username3 && inputPassword === password4) {
    // Login successful, redirect to dashboard or whatever
    alert('Login succesfull')
    window.location.href = "mainweb.html";
  } else {
    errorMsg.textContent = 'Invalid username or password';
  }
});
