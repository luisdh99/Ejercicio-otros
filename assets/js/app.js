// Definimos los endpoints para la API de Github
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Seleccionamos los elementos correctos del DOM usando id
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');

// Hacemos la función asíncrona para manejar la llamada a la API correctamente
async function displayUser(username) {
  try {
    // Mostramos un mensaje mientras se cargan los datos
    $n.textContent = 'Cargando...';

    // Hacemos la llamada a la API
    const response = await fetch(`${usersEndpoint}/${username}`);
    if (!response.ok) throw new Error('Usuario no encontrado'); // Manejo de errores

    const data = await response.json(); // Convertimos la respuesta a JSON
  }
}