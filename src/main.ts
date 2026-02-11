import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18n";

const app = createApp(App);
const pinia = createPinia();

import { MotionPlugin } from "@vueuse/motion";

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(MotionPlugin);

app.mount("#app");
