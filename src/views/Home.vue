<template>
  <div class="home">
    <h1>Bienvenido a Hotel Valentine</h1>
    <router-link to="/signup" class="signup-link">Regístrate aquí</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ocupa toda la altura de la vista */
  background: linear-gradient(to right, #ff7e5f, #feb47b); /* Fondo con degradado */
  color: #fff; /* Color del texto */
  text-align: center; /* Centra el texto */
  font-family: 'Arial', sans-serif; /* Fuente del texto */
}

h1 {
  font-size: 3rem; /* Aumentar el tamaño del texto del título */
  margin-bottom: 20px; /* Espacio inferior del título */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Sombra para el título */
  animation: fadeIn 1s ease; /* Animación de entrada */
}

.signup-link {
  background-color: #fff; /* Fondo blanco para el enlace */
  color: #ff7e5f; /* Color del texto del enlace */
  padding: 10px 20px; /* Relleno alrededor del texto */
  border-radius: 5px; /* Bordes redondeados */
  text-decoration: none; /* Sin subrayado */
  font-size: 1.2rem; /* Tamaño del texto del enlace */
  transition: background-color 0.3s, color 0.3s; /* Transiciones para el efecto hover */
}

.signup-link:hover {
  background-color: #ff7e5f; /* Color de fondo en hover */
  color: #fff; /* Cambia el color del texto en hover */
}

/* Animación de entrada */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px); /* Mueve el título hacia arriba */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Regresa a la posición original */
  }
}
</style>
