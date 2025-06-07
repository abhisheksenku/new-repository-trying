document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
//   const password = document.getElementById('password').value;
//   const confirmPassword = document.getElementById('confirmPassword').value;
    
//   if (password !== confirmPassword) {
//     alert('Passwords do not match!');
//     return;
//   }
    
    console.log('Form submitted:', {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: password
    });
    
    alert('Signup successful! (This is a frontend demo)');
    this.reset();
});