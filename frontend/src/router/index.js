import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../views/Login.vue';
import UserSignup from '../views/Signup.vue';
import TaskList from '../views/TaskList.vue';
import TaskForm from '../views/TaskForm.vue';

const routes = [
  { path: '/login', component: UserLogin },
  { path: '/signup', component: UserSignup },
  { path: '/tasks', component: TaskList },
  { path: '/add-task', component: TaskForm },
  { path: '/:pathMatch(.*)*', redirect: '/login' } // Handle unknown routes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
