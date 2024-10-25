<template>
    <div>
      <h2>Verificación de Correo</h2>
      <form @submit.prevent="verifyEmail">
        <div>
          <label for="email">Correo Electrónico:</label>
          <input type="email" v-model="email" required />
        </div>
        <button type="submit">Verificar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      async verifyEmail() {
        // Lógica para verificar el correo electrónico
        console.log('Verificando correo:', this.email);
      },
    },
  };
  </script>
  