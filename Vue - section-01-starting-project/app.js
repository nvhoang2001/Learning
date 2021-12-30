Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: "",
		};
	},
	methods: {
		addGoals() {
			console.log(this.enteredValue);
			this.goals.push(this.enteredValue);
			this.enteredValue = "";
		},
	},
}).mount("#app");

// const btnEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
// 	const inpVal = inputEl.value;
// 	const newListEl = document.createElement("li");
// 	newListEl.textContent = inpVal;

// 	listEl.appendChild(newListEl);
// 	inputEl.value = "";
// }

// btnEl.addEventListener("click", addGoal);
