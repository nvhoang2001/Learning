export default {
	cartItems(state) {
		return state.items;
	},
	cartTotal(state) {
		return state.total.toFixed(2);
	},
	totalQuatity(state) {
		return state.qty;
	},
};
