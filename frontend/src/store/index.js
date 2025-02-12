import { createStore } from 'vuex';
import api from '../axios';

export default createStore({
  state: {
    token: localStorage.getItem('token') || '', // Store JWT token
    username: localStorage.getItem('username') || '', // Store username
  },
  mutations: {
    setToken(state, { token, username }) {
      state.token = token;
      state.username = username; // Save username in Vuex store
      localStorage.setItem('token', token); // Store JWT token
      localStorage.setItem('username', username); // Store username
    },
    clearToken(state) {
      state.token = '';
      state.username = ''; 
      localStorage.removeItem('token'); // Clear token on logout
      localStorage.removeItem('username'); // Clear username on logout
    },
  },
  actions: {
    async login({ commit }, credentials) {
      const { data } = await api.post('/auth/login', credentials);
      commit('setToken', { token: data.token, username: credentials.username }); // Save token and username after successful login
    },
    logout({ commit }) {
      commit('clearToken'); // Clear token during logout
    },
  },
});