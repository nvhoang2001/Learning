const app = Vue.createApp({
	data() {
		return {
			boxesSelected: [false, false, false],
		};
	},
	computed: {
		boxA: function () {
			return {
				active: this.boxesSelected[0],
			};
		},
	},
	methods: {
		boxSelect(box) {
			switch (box) {
				case "A":
					this.boxesSelected[0] = !this.boxesSelected[0];
					break;
				case "B":
					this.boxesSelected[1] = !this.boxesSelected[1];
					break;
				case "C":
					this.boxesSelected[2] = !this.boxesSelected[2];
					break;

				default:
					break;
			}
		},
	},
}).mount("#styling");
