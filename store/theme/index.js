import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
    namespaced: true,
    state() {
        return {
            filterColor: "#3b82f6",
            backgroundColor: "#fff",
            sidebarIsMini: true,
            sidebarUseImage: true,
            sidebarBackgroundImage:
                "https://images.pexels.com/photos/2011367/pexels-photo-2011367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        };
    },
    mutations,
    getters,
    actions,
};
