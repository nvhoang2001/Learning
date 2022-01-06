import cartMutation from './mutations';
import cartGetters from './getters';
export default {
	namespaced: true,
	state() {
		return {
			items: [],
			total: 0,
			qty: 0,
		};
	},
	getters: cartGetters,
	mutations: cartMutation,
	actions: {
		addToCart(context, payload) {
			const prodId = payload.id;
			const products = context.rootGetters['productsList'];
			const product = products.find((prod) => prod.id === prodId);

			context.commit('addProductToCart', product);
		},
	},
};
