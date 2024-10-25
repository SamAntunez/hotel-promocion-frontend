import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Asegúrate de que esta sea la URL base correcta
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
