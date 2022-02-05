import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
