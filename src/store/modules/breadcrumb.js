const state = {
  module: {
    id: 0,
    title: "",
  },
  content: {
    mId: 0,
    id: 0,
    title: "",
  },
};

const mutations = {
  SET_CURRENT_MODULE: (state, { id, title }) => {
    state.module.id = id;
    state.module.title = title;
  },
  SET_CURRENT_CONTENT: (state, { mId, id, title }) => {
    state.content.mId = mId;
    state.content.id = id;
    state.content.title = title;
  },
};

const actions = {
  setCurrentModule({ commit }, { id, title }) {
    commit("SET_CURRENT_MODULE", { id, title });
  },
  setCurrentContent({ commit }, { mId, id, title }) {
    commit("SET_CURRENT_CONTENT", { mId, id, title });
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
