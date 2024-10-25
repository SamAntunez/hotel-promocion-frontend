<template>
    <div>
      <h1>Vista Protegida</h1>
      <p>¡Felicidades! Has accedido a la vista protegida.</p>
      <button @click="generateWinner">Generar Ganador</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProtectedView',
    methods: {
      generateWinner() {
        // Aquí va la lógica para generar un ganador
        console.log('Generating winner...');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el componente Protected */
  </style>
  