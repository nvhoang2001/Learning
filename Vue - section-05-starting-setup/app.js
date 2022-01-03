const app = Vue.createApp({
	data() {
		return {
			currentUserInput: "",
			message: "Vue is great!",
			extraData: null,
		};
	},
	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			// this.message = this.currentUserInput;
			this.message = this.$refs.userText.value;
		},
	},

	beforeCreate() {
		console.log("Before create phase!");
		console.log(this.message);
		this.extraData = 5;
		console.log(this.extraData);
	},
	created() {
		console.log("Created Phase");
		console.log(this.message);
		console.log(this.extraData);
	},
	beforeMount() {
		console.log("Before mount phase");
	},
	mounted() {
		console.log("Mounted phase");
	},
	beforeUpdate() {
		console.log("Before update phase");
	},
	updated() {
		console.log("Updated phase");
	},
	beforeUnmount() {
		console.log("Before unmount phase");
	},
	unmounted() {
		console.log("Mounted phase");
	},
});

app.mount("#app");

setTimeout(() => {
	app.unmount();
}, 5000);

const app2 = Vue.createApp({
	template: `
		<p>{{ favouriteMeal }}</p>
	`,
	data() {
		return {
			favouriteMeal: "Meal",
		};
	},
});

app2.mount("#app2");
