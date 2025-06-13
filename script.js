document.addEventListener("DOMContentLoaded", function () {
    
const form = document.getElementById('registration-form');
     form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Validate username
      const usernameInput = document.getElementById('username').value.trim();
      const isValid = true;
      let messages [];
      if (usernameInput.value.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long.');
        return;
      } else {
        messages.push("");

      }

      // Validate email
      const emailInput = document.getElementById('email').value.trim();
      let isValid = true;
      let messages [];
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        messages.push = 'Please enter a valid email address.';
        return;
      } else {
        messages.push("");
      }

      // Validate password
      const passwordInput = document.getElementById('password').value.trim();
      let isValid = true;
      let messages [];
      if (passwordInput.value.length < 6) {
        passwordError.push('Password must be at least 6 characters long.');
        return;
      } else {
        messages.push("");
      }

      // If all validations pass, submit the form
      form.submit();
    });
const feedbackDiv = document.getElementById('form-feedback'); 
});