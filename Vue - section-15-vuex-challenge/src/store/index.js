import { createStore } from 'vuex';
import authModule from './auth/index';
import productModule from './products/index';
import cartModule from './cart/index';

const store = createStore({
	modules: {
		auth: authModule,
		products: productModule,
		cart: cartModule,
	},
});

export default store;
