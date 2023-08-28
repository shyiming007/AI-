

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import axios from "axios";
import store from './stores/record';



const app = createApp(App)
axios.defaults.baseURL = 'http://localhost:8080'
app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')
