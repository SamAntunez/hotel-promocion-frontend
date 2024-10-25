import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de importar el enrutador

createApp(App)
  .use(router) // Añade el enrutador
  .mount('#app');
        