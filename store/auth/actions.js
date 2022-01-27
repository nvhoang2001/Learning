import Cookies from "js-cookie";

export default {
    login(context, auth) {
        Cookies.set("token", auth.idToken);
        context.commit("setToken", auth.idToken);
        return auth.token;
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
};
