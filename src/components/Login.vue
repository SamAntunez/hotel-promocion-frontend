<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserLogin',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Aquí va tu lógica de inicio de sesión
        console.log('Logging in with:', this.email, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el componente Login */
  </style>
  