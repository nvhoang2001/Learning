const convertToPercentage = (array, limit) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = +(100 * (array[i] / limit)).toFixed(2);
    }
};

export default {
    convertToPercent(state) {
        convertToPercentage(state.revenue, state.reLimit);
        convertToPercentage(state.follower, state.foLimit);
        convertToPercentage(state.visitor, state.viLimit);
        state.converted = true;
    },
};
