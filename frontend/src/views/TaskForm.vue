<template>
    <div>
      <h2>Add New Task</h2>
      <input v-model="title" placeholder="Task Title" />
      <textarea v-model="description" placeholder="Task Description"></textarea>
      <button @click="addTask">Add Task</button>
      <button @click="$router.push('/tasks')" style="background-color: #6c757d;">Back to Task List</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'TaskForm',
    data() {
      return {
        title: '',
        description: ''
      };
    },
    methods: {
      async addTask() {
        if (!this.title || !this.description) {
          alert('Both Title and Description are required!');
          return;
        }
        try {
          const token = localStorage.getItem('token');
          await axios.post('/api/tasks', {
            title: this.title,
            description: this.description
          }, {
            headers: { Authorization: `Bearer ${token}` }
          });
          alert('Task added successfully!');
          this.$router.push('/tasks');
        } catch (error) {
          alert('Failed to add task.');
        }
      }
    }
  };
  </script>
  