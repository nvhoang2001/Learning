export default {
    getOrders(state) {
        return state.orders;
    },
    getAOrder(state) {
        return (id) => {
            return state.orders.find((or) => or.id === id);
        };
    },
};
