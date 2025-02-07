<template>
    <div>
      <h2>User Login</h2>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="loginUser">Login</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'UserLogin',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      ...mapActions(['login']),
      async loginUser() {
        try {
          await this.login({ username: this.username, password: this.password });
          this.$router.push('/tasks');
        } catch (error) {
          alert('Login failed. Check credentials.');
        }
      }
    }
  };
  </script>
  