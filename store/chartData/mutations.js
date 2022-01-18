export default {
    convertToPercent(state) {
        state.revenue.value.forEach((rev) =>
            (100 * (rev / state.reLimit)).toFixed(2)
        );
        state.follower.value.forEach((fol) =>
            (100 * (fol / state.foLimit)).toFixed(2)
        );
        state.visitor.value.forEach((vis) =>
            (100 * (vis / state.viLimit)).toFixed(2)
        );
    },
};
