<template>
	<section>
		<h2>Manage Goal</h2>
		<input type="text" ref="goal" />
		<button @click="setGoals">Set Goals</button>
		<teleport to="#app">
			<error-dialog v-if="invalidInput">
				<h2>Invalid Input</h2>
				<p>Enter infomation to input</p>
				<button @click="hideError">Close</button>
			</error-dialog>
		</teleport>
	</section>
</template>

<script>
	import ErrorDialog from "./ErrorDialog.vue";

	export default {
		components: { ErrorDialog },
		data() {
			return {
				invalidInput: false,
			};
		},
		methods: {
			setGoals() {
				const enteredGoal = this.$refs.goal.value;
				if (!enteredGoal) {
					console.log("invalid");
					this.invalidInput = true;
				}
			},
			hideError() {
				this.invalidInput = false;
			},
		},
	};
</script>
