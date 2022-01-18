import actions from "./actions";

export default {
    namespaced: true,
    state() {
        return {
            token: "",
        };
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload;
        },
    },
    getters: {
        isAuth(state) {
            return !!state.token;
        },
    },
    actions,
};
