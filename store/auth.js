import Cookies from "js-cookie";

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
    actions: {
        login(context, account) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("121241242141241232");
                }, 1500);
            }).then((token) => {
                console.log(account);
                Cookies.set("token", token);
                context.commit("setToken", token);
                return token;
            });
        },
        logout(context) {
            context.commit("setToken", "");
            Cookies.remove("token");
        },
        initAuth(context, request) {
            let token = "";
            if (request) {
                if (!request.headers.cookie) {
                    return;
                }
                const tokenCookie = request.headers.cookie
                    .split(";")
                    .find((c) => c.trim().startsWith("token="));
                if (!tokenCookie) {
                    return;
                }
                token = tokenCookie.split("=")[1];
            } else {
                token = Cookies.get("token");
            }

            context.commit("setToken", token);
        },
    },
};
