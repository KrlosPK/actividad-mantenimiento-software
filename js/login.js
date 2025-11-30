document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault()
  const username = document.getElementById('username').value.trim()
  const password = document.getElementById('password').value.trim()
  const message = document.getElementById('loginMessage')

  // Usuario y contraseña de ejemplo
  const validUser = 'usuario'
  const validPass = '1234'

  if (username === validUser && password === validPass) {
    localStorage.setItem('session', JSON.stringify({ username }))
    message.style.color = '#ffd600'
    message.textContent = '¡Ingreso exitoso! Redirigiendo...'
    setTimeout(() => {
      window.location.href = 'menu.html' // Cambia a la página principal si existe
    }, 1200)
  } else {
    message.style.color = '#ff0000'
    message.textContent = 'Usuario o contraseña incorrectos.'
  }
})

// Si ya hay sesión, redirige automáticamente
window.onload = function () {
  const session = localStorage.getItem('session')
  if (session) {
    window.location.href = 'menu.html' // Cambia a la página principal si existe
  }
}
