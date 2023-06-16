const state = {
  isAgreePolicy: "",
};
const mutations = {
  SET_ISAGREEPOLICY: (state, value) => {
    state.isAgreePolicy = value;
  },
};
const actions = {
  setIsAgreePolicy({ commit }, value) {
    commit("SET_ISAGREEPOLICY", value);
  },
};
export default {
  state,
  actions,
  mutations,
};
