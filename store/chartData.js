export default {
    namespaced: true,
    state() {
        return {
            revenue: [
                3114,
                6124,
                9670,
                3083,
                6052,
                6418,
                7155,
                6706,
                5637,
                767
            ],
            follower: [49, 52, 83, 21, 61, 20, 11, 98, 16, 81],
            visitor: [706, 499, 600, 568, 836, 418, 736, 298, 481, 860]
        };
    },

    getters: {
        getRevenue(state) {
            return state.revenue;
        },
        getVisitor(state) {
            return state.visitor;
        },
        getFollower(state) {
            return state.follower;
        }
    }
};
