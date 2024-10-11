import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import './style.css'
import App from './App.vue'

// Import PrimeVue styles
const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.mount('#app')