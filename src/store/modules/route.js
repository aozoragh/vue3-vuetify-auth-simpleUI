const state = {
  c_route: "",
};

const mutations = {
  SET_CURRENT_ROUTE: (state, route) => {
    state.c_route = route;
    localStorage.setItem("c_route", route);
  },
};

const actions = {
  setCurrentRoute({ commit }, route) {
    commit("SET_CURRENT_ROUTE", route);
  },
};

export default {
  state,
  mutations,
  actions,
};
