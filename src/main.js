import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Aquí importamos el router

createApp(App)
  .use(router) // Usamos el router en la app
  .mount('#app')
