const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			confirmName: "",
			// fullname: "",
			lastName: "",
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				this.counter = 0;
			}
		},
		// name(value, oldValue) {
		// 	console.log(oldValue);
		// 	console.log(value);
		// 	if (value === "") {
		// 		this.fullname = "";
		// 	} else {
		// 		this.fullname = "123" + " " + value;
		// 	}
		// },
	},
	computed: {
		fullname() {
			console.log("Name is leveraging");
			return this.name === "" || this.lastName === "" ? "" : `${this.lastName} ${this.name}`;
		},
	},
	methods: {
		increase(amount) {
			this.counter += amount;
		},
		decrease(amount) {
			this.counter -= amount;
		},
		setName(e) {
			this.name = e.target.value;
		},
		submitForm(e) {
			// e.preventDefault();
			console.log(e);
		},
		updateName() {
			this.confirmName = this.name;
		},
		resetInput() {
			this.name = "";
		},
		outputFullname() {
			console.log("Name is leveraging");
			return this.name === "" ? "" : `${this.lastName} ${this.name}`;
		},
	},
});

app.mount("#events");
