import authMutations from './mutations';
import authActions from './actions';
export default {
	state() {
		return {
			isLoggedIn: false,
		};
	},
	mutations: authMutations,
	actions: authActions,
};
