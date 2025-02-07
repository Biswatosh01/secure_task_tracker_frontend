<template>
    <div>
      <h2>User Signup</h2>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <input v-model="confirmPassword" type="password" placeholder="Confirm Password" />
      <button @click="signupUser">Signup</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserSignup',
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      async signupUser() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        try {
          await axios.post('/api/auth/signup', { username: this.username, password: this.password });
          alert('Signup successful! Please login.');
          this.$router.push('/login');
        } catch (error) {
          alert('Signup failed.');
        }
      }
    }
  };
  </script>