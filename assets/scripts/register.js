function registerUser(username, password, lastname, birthdate) {
  const email = `${username.toLowerCase()}.${lastname.toLowerCase()}@gmail.com`;
  const user = { email, password, username, lastname, birthdate };


  const users = JSON.parse(localStorage.getItem('usersDatabase')) || [];
  users.push(user);
  localStorage.setItem('usersDatabase', JSON.stringify(users));

  return email;
}


document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const lastname = document.getElementById('lastname').value;
  const birthdate = document.getElementById('birthdate').value;
  const email = registerUser(username, password, lastname, birthdate);
  
  alert(`Usuario registrado correctamente. Tu correo es: ${email}. Por favor, inicia sesión.`);
  window.location.href = 'login.html';
});
