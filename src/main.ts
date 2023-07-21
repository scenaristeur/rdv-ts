import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import OpenLayersMap , {
    type Vue3OpenlayersGlobalOptions,
  }  from "vue3-openlayers";
import "vue3-openlayers/styles.css"; // vue3-openlayers version < 1.0.0-*

const options: Vue3OpenlayersGlobalOptions = {
    debug: true,
  };

const app = createApp(App)
.use(store)
.use(router)
// .use(OpenLayersMap /* options */);
.use(OpenLayersMap, options);

app.mount('#app')
