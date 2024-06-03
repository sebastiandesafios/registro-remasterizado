function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem('usersDatabase')) || [];
  const user = users.find(user => user.email === email && user.password === password);
  return user;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = loginUser(email, password);
  if (user) {
    alert('Inicio de sesión exitoso. Bienvenido, ' + user.username + '!');
    window.location.href = 'menu.html';
  } else {
    alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
  }
});
