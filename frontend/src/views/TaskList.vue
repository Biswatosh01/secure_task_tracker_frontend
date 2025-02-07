<template>
    <div>
      <h2>Your Tasks</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
      </ul>
      <button @click="goToAddTask">Add New Task</button>
      <button @click="logoutUser" style="background-color: #dc3545;">Logout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapActions } from 'vuex';
  
  export default {
    name: 'TaskList',
    data() {
      return {
        tasks: []
      };
    },
    async created() {
      const token = localStorage.getItem('token');
      try {
        const { data } = await axios.get('/api/tasks', {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.tasks = data;
      } catch (error) {
        alert('Error fetching tasks.');
      }
    },
    methods: {
      ...mapActions(['logout']),
      goToAddTask() {
        this.$router.push('/add-task');
      },
      logoutUser() {
        this.logout();
        this.$router.push('/login');
      }
    }
  };
  </script>