import productData from "./productData";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
    namespaced: true,
    state() {
        return {
            products: productData,
        };
    },

    getters,
    mutations,
    actions,
};
