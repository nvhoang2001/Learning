const app = Vue.createApp({
	data() {
		return {
			message: ["Simple", " Vue ", "app"],
			vueLink: "http://vuejs",
			goalA: "Vue2",
			goalB: "Vue3",
			// simpleFunc: () => "Simple Function",
		};
	},
	methods: {
		outputGoal() {
			const ranNum = Math.random();
			return ranNum < 0.5 ? this.goalA : this.goalB;
		},
		simpleFunc() {
			return "Simple Function 2";
		},
	},
});

app.mount("#user-goal");
