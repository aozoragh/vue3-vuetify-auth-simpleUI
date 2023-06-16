const state = {
  userToken: "",
  isAuth: false,
  currentUser: {
    id: "",
  },
};
const mutations = {
  SET_CURRENT_USER: (state, user) => {
    state.currentUser.id = user.id;
    localStorage.setItem("currentUser", user.id);
  },
};
const actions = {
  setCurrentUser({ commit }, user) {
    commit("SET_CURRENT_USER", user);
  },
};
export default {
  state,
  actions,
  mutations,
};
