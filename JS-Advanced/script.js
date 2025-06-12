document.addEventListener("DOMContentLoaded", function () {
    
const form = document.getElementById('registration-form');
     form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Validate username
      const usernameInput = document.getElementById('username').value.trim();
      const isTrue = true;
      let messages {};
      if (usernameInput.value.length < 3) {
        isTrue = false;
        messages = 'Username must be at least 3 characters long.';
        return;
      } else {
        messages = '';

      }

      // Validate email
      const emailInput = document.getElementById('email').value.trim();
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
      } else {
        emailError.textContent = '';
      }

      // Validate password
      const passwordInput = document.getElementById('password').value.trim();
      if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return;
      } else {
        passwordError.textContent = '';
      }

      // If all validations pass, submit the form
      form.submit();
    });
const feedbackDiv = document.getElementById('form-feedback');
    sty

   
});