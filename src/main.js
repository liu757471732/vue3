import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/main.scss'



// element的引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// main中只能使用一个create
const app = createApp(App)
app.use(ElementPlus)



app.use(store).use(router).mount('#app')
