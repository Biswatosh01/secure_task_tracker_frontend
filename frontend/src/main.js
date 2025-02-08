import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Create the Vue application instance
const app = createApp(App);

// Use Vue Router and Vuex for routing and state management
app.use(router);
app.use(store);

// Mount the app to the DOM
app.mount('#app');
