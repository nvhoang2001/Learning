export default {
    getConvertedProps(context, propName) {
        context.commit("convertToPercent");
        return context.state[propName];
    },
};
