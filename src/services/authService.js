import apiClient from '../utils/axios';

// Registro de usuario
export function registerUser(userData) {
  // Cambia la URL para que coincida con la ruta del backend
  return apiClient.post('/usuarios/registrar/', userData);
}

// Verificación de email
export function verifyEmail(userId) {  // Cambié el parámetro de `token` a `userId`
  // Cambia la URL para que coincida con la ruta del backend
  return apiClient.get(`/usuarios/verificar-email/${userId}/`); 
}

// Login
export function loginUser(credentials) {
  return apiClient.post('/usuarios/login/', credentials); // Cambia la URL si es necesario
}

// Obtener usuario actual
export function getCurrentUser() {
  return apiClient.get('/usuarios/user/'); // Cambia la URL si es necesario
}
