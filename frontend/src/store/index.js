import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      token: localStorage.getItem('token') || ''
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearToken(state) {
      state.token = '';
      localStorage.removeItem('token');
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const { data } = await axios.post('/api/auth/login', credentials);
      commit('setToken', data.token);
    },
    logout({ commit }) {
      commit('clearToken');
    }
  }
});

export default store;
