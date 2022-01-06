export default {
	difCounter(state) {
		console.log(state);
		return state.counter * 2;
	},
	normalizedCounter(_, getters) {
		const counter2 = getters.difCounter;
		if (counter2 < 0) {
			return 0;
		} else if (counter2 > 100) {
			return 100;
		}
		return counter2;
	},
};
