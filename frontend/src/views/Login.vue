<template>
  <div>
    <h2>User Login</h2>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="loginUser">Login</button>
    <button @click="goToSignup" style="background-color: #28a745;">Signup</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UserLogin',
  data() {
    return { username: '', password: '' };
  },
  methods: {
    ...mapActions(['login']),
    async loginUser() {
      try {
        await this.login({ username: this.username, password: this.password }); // Login API call
        this.$router.push('/tasks'); // Redirect to tasks after login
      } catch (error) {
        alert('Login failed. Check credentials.');
      }
    },
    goToSignup() {
      this.$router.push('/signup'); // Redirects to the signup page
    },
  },
};
</script>

<style scoped>
button {
  margin: 5px; /* Added margin for better spacing */
}

button:hover {
  opacity: 0.9; /* Smooth hover effect */
}
</style>
