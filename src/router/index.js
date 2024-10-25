// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../components/SignUp.vue';
import VerifyEmail from '../components/VerifyEmail.vue';
import UserLogin from '../components/Login.vue';
import ProtectedView from '../components/Protected.vue';
import HomeView from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/verify-email',
    name: 'VerifyEmail',
    component: VerifyEmail,
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin,
  },
  {
    path: '/protected',
    name: 'ProtectedView',
    component: ProtectedView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Añadir lógica para proteger rutas
router.beforeEach((to, from, next) => {
  const isAuthenticated = false; // Aquí deberías verificar si el usuario está autenticado

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'UserLogin' }); // Redirige al login si no está autenticado
  } else {
    next();
  }
});

export default router;
