import { createApp } from "vue";
import App from "./App.vue";

// import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "./assets/css/global.css";
import "vue3-toastify/dist/index.css";

import router from "./router";
import store from "./store";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(store).use(vuetify).mount("#app");
