// Verifica sesión
if (!localStorage.getItem('session')) {
  window.location.href = 'index.html'
}

document.getElementById('reservaForm').addEventListener('submit', function (e) {
  e.preventDefault()
  const nombre = document.getElementById('nombre').value.trim()
  const personas = document.getElementById('personas').value
  const fecha = document.getElementById('fecha').value
  const hora = document.getElementById('hora').value
  const mensaje = document.getElementById('reservaMensaje')

  if (!nombre || !personas || !fecha || !hora) {
    mensaje.style.color = '#ff0000'
    mensaje.textContent = 'Por favor, completa todos los campos.'
    return
  }

  // Guardar reserva en localStorage
  const reserva = { nombre, personas, fecha, hora }
  localStorage.setItem('reserva', JSON.stringify(reserva))
  mensaje.style.color = '#ffd600'
  mensaje.textContent = '¡Reserva realizada con éxito!'
  document.getElementById('reservaForm').reset()
})
