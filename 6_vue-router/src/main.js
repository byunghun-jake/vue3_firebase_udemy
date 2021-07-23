import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
// import router from "./router/index.js"

createApp(App)
  .use(router) // export한 vue-router를 vue app에 등록한다.
  .mount("#app")
