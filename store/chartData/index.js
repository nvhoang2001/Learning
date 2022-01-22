import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
    namespaced: true,
    state() {
        return {
            reLimit: 10000,
            revenue: [
                3114, 6124, 9670, 3083, 6052, 6418, 7155, 6706, 5637, 767,
            ],
            foLimit: 100,
            follower: [49, 52, 83, 21, 61, 20, 11, 98, 16, 81],
            viLimit: 1000,
            visitor: [706, 499, 600, 568, 836, 418, 736, 298, 481, 860],
            converted: false,
        };
    },
    getters,
    mutations,
    actions,
};
