import { createStore } from "vuex";

import getters from "./getters";
import breadcrumb from "./modules/breadcrumb";
import route from "./modules/route";
import auth from "./modules/auth";
import bool from "./modules/bool";

const store = createStore({
  modules: {
    breadcrumb,
    route,
    auth,
    bool,
  },
  getters,
});

export default store;
