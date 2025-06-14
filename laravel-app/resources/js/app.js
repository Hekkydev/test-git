import './bootstrap';
import { createApp } from 'vue';
import App from './src/App.vue';
import router from './src/router';
import '../css/app.css';

createApp(App).use(router).mount('#app');
