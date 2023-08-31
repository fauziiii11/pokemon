import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './style.css'

const app = createApp(App);
app.use(store);
app.use(router).mount('#app');