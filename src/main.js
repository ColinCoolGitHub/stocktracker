import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(router).use(store).use(VueApexCharts).mount('#app')
