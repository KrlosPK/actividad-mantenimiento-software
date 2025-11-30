// Verifica sesión
if (!localStorage.getItem('session')) {
  window.location.href = 'index.html'
}

// Ejemplo de menú
const menu = [
  { nombre: 'Pizza Margarita', precio: 120, opciones: 'Individual, Familiar' },
  { nombre: 'Ensalada César', precio: 80, opciones: 'Vegetariana' },
  {
    nombre: 'Hamburguesa Clásica',
    precio: 100,
    opciones: 'Carne, Pollo, Vegetariana'
  },
  { nombre: 'Pasta Alfredo', precio: 110, opciones: 'Con pollo, Sin pollo' },
  { nombre: 'Soda', precio: 30, opciones: 'Coca-Cola, Sprite, Fanta' }
]

const menuList = document.getElementById('menu-list')
menu.forEach((plato) => {
  const item = document.createElement('div')
  item.className = 'menu-item'
  item.innerHTML = `<h2>${plato.nombre}</h2>
        <p><strong>Precio:</strong> $${plato.precio}</p>
        <p><strong>Opciones:</strong> ${plato.opciones}</p>`
  menuList.appendChild(item)
})

// Cerrar sesión
const logoutBtn = document.getElementById('logoutBtn')
logoutBtn.onclick = function () {
  localStorage.removeItem('session')
  window.location.href = 'index.html'
}
