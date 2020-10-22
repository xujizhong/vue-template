import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    strict: process.env.NODE_ENV === 'development',
    modules: {},
    state: {
        userInfo: {}
    },
    actions: {
        updateUserInfo({ commit }, userInfo) {
            commit('updateUserInfo', userInfo);
        }
    },
    mutations: {
        updateUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    }
});
