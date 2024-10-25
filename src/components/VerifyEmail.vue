<template>
    <div>
      <h1>Verificar Email</h1>
      <p>Por favor, verifica tu email para activar tu cuenta.</p>
      <form @submit.prevent="verifyEmail">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <button type="submit">Verificar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VerifyEmail',
    data() {
      return {
        email: '',
      };
    },
    methods: {
      verifyEmail() {
        // Aquí va tu lógica para verificar el email
        console.log('Verifying email:', this.email);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el componente VerifyEmail */
  </style>
  