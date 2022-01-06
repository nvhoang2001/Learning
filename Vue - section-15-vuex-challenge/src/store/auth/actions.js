export default {
	login(context) {
		console.log('Logged in');
		console.log(context);
		context.commit('setAuth', { isLoggedIn: true });
	},
	logout(context) {
		context.commit('setAuth', {
			isLoggedIn: false,
		});
	},
};
