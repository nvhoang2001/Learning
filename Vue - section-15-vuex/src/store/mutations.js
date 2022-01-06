export default {
	login(state) {
		state.isAuth = true;
		console.log(state);
	},
	logout(state) {
		state.isAuth = false;
	},
};
