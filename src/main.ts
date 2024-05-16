import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import "./assets/tailwind.css"
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
