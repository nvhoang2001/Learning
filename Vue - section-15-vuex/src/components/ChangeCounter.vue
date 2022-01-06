<template>
	<button @click="inc">Add 2</button>
	<button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	methods: {
		// add1() {
		// 	// this.$store.state.counter++;
		// 	this.$store.commit('increment');
		// },

		// ...mapActions(['increment', 'increase']),
		...mapActions('counter', {
			inc: 'increment',
			increase: 'increase',
		}),
	},
};
</script>
