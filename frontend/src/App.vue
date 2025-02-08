<template>
  <div id="app">
    <router-view /> <!-- Placeholder for rendering views -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Basic styling for the app */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0;
  color: #333;
}

#app {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: #0056b3;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  color: #007BFF;
}
</style>
