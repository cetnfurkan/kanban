import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import icons from 'v-svg-icons'

import vDragDrop from 'v-drag-drop'

const app = createApp(App)
app.use(vDragDrop).use(store).use(router)
app.component('icon', icons)
app.mount('#app')
