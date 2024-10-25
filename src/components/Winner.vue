<template>
    <div>
      <h2>Ganador del Sorteo</h2>
      <button @click="generateWinner">Generar Ganador</button>
      <div v-if="winner">
        <h3>¡Felicidades!</h3>
        <p>El ganador es: {{ winner }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        winner: null,
      };
    },
    methods: {
      async generateWinner() {
        // Lógica para generar un ganador
        this.winner = 'Nombre del Ganador'; // Reemplaza esto con la lógica real
        console.log('Ganador generado:', this.winner);
      },
    },
  };
  </script>
  