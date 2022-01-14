export default {
    namespaced: true,
    state() {
        return {
            reLimit: 10_000,
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
            foLimit: 100,
            follower: [49, 52, 83, 21, 61, 20, 11, 98, 16, 81],
            viLimit: 1_000,
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
    },

    mutations: {
        convertToPercent(state) {
            state.revenue.value.forEach(rev =>
                (100 * (rev / state.reLimit)).toFixed(2)
            );
            state.follower.value.forEach(fol =>
                (100 * (fol / state.foLimit)).toFixed(2)
            );
            state.visitor.value.forEach(vis =>
                (100 * (vis / state.viLimit)).toFixed(2)
            );
        }
    },

    actions: {
        getConvertedProps(context, propName) {
            context.commit("convertToPercent");
            return context.state[propName];
        }
    }
};
