const convertToPercentage = (array, limit) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = +(100 * (array[i] / limit)); //.toFixed(2);
    }
};

export default {
    convertToPercent(state) {
        convertToPercentage(state.revenue, state.reLimit);
        convertToPercentage(state.follower, state.foLimit);
        convertToPercentage(state.visitor, state.viLimit);
        state.converted = true;
        // state.revenue.forEach((rev) =>
        //     (100 * (rev / state.reLimit)).toFixed(2)
        // );

        // for (let i = 0; i < state.revenue.length; i++) {
        //     state.revenue[i] = +(
        //         100 *
        //         (state.revenue[i] / state.reLimit)
        //     ).toFixed(2);
        // }
        // for (let i = 0; i < state.follower.length; i++) {
        //     state.follower[i] = +(
        //         100 *
        //         (state.follower[i] / state.foLimit)
        //     ).toFixed(2);
        // }
        // for (let i = 0; i < state.visitor.length; i++) {
        //     state.visitor[i] = +(
        //         100 *
        //         (state.visitor[i] / state.viLimit)
        //     ).toFixed(2);
        // }

        // state.follower.forEach((fol) =>
        //     (100 * (fol / state.foLimit)).toFixed(2)
        // );
        // state.visitor.forEach((vis) =>
        //     (100 * (vis / state.viLimit)).toFixed(2)
        // );
    },
};
