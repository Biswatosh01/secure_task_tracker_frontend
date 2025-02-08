<template>
  <div>
    <h2>Hello, {{ username }}</h2>
    <h2>Your Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task._id">{{ task.title }}</li>
    </ul>
    <button @click="goToAddTask">Add New Task</button>
    <button @click="logoutUser" style="background-color: #dc3545;">Logout</button>
  </div>
</template>

<script>
import api from '../axios';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TaskList',
  data() {
    return { 
      tasks: [],
    };
  },
  computed: {
    ...mapState(['username']), // Access the username from Vuex state
  },
  async created() {
    try {
      // Fetch tasks
      const { data: tasks } = await api.get('/tasks');
      this.tasks = tasks;

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
      this.logout(); // Clear token on logout
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
h2 {
  color: #007bff;
}
</style>
