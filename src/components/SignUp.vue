<template>
    <div class="register">
      <h2>Registro</h2>
      <form @submit.prevent="register" class="register-form">
        <input v-model="username" placeholder="Usuario" class="input-field" />
        <input v-model="email" placeholder="Correo" class="input-field" />
        <input v-model="password" type="password" placeholder="Contraseña" class="input-field" />
        <button type="submit" class="submit-button">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script>
  import { registerUser } from '../services/authService';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      async register() {
        try {
          const userData = {
            username: this.username,
            email: this.email,
            password: this.password,
          };
          await registerUser(userData);
          alert('Registro exitoso, por favor verifica tu correo.');
        } catch (error) {
          console.error(error);
          alert('Error en el registro');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    color: #fff;
    text-align: center;
    font-family: 'Arial', sans-serif;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    animation: fadeIn 0.5s ease; /* Animación de entrada */
  }
  
  .register-form {
    display: flex;
    flex-direction: column;
    width: 300px; /* Ancho del formulario */
  }
  
  .input-field {
    margin-bottom: 15px; /* Espacio inferior entre los campos */
    padding: 10px; /* Relleno interno */
    border: none; /* Sin borde */
    border-radius: 5px; /* Bordes redondeados */
    transition: all 0.3s ease; /* Transiciones suaves */
  }
  
  .input-field:focus {
    outline: none; /* Sin contorno en enfoque */
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); /* Sombra al enfocar */
  }
  
  .submit-button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: #ff7e5f;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s; /* Transiciones para el efecto hover */
  }
  
  .submit-button:hover {
    background-color: #ff7e5f; /* Color de fondo en hover */
    color: #fff; /* Cambia el color del texto en hover */
  }
  
  /* Animación de entrada para el título */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  