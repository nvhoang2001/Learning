import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootGetters from './getters';
import counterModule from './counter/index';

const store = createStore({
	modules: {
		counter: counterModule,
	},
	state() {
		return {
			isAuth: false,
		};
	},
	mutations: rootMutations,

	getters: rootGetters,
});

export default store;
