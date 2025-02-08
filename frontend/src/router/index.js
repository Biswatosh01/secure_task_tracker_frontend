import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import TaskList from '../views/TaskList.vue';
import TaskForm from '../views/TaskForm.vue';

// Define routes
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/tasks', component: TaskList },
  { path: '/add-task', component: TaskForm }
];

// Create and export the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
