<template>
    <div>
      <h2>Registro</h2>
      <form @submit.prevent="register">
        <div>
          <label for="username">Nombre de Usuario:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="email">Correo Electrónico:</label>
          <input type="email" v-model="email" required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
      };
    },
    methods: {
      async register() {
        // Lógica para registrar al usuario
        console.log('Registrando:', this.username, this.email);
      },
    },
  };
  </script>
  