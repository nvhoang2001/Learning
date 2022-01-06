<template>
	<base-container title="Vuex" v-if="userIsAuth">
		<the-counter />
		<favourite-value />
		<button @click="add10">Add 10</button>
		<change-counter></change-counter>
	</base-container>
	<base-container title="Auth">
		<user-auth />
	</base-container>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
	components: {
		BaseContainer,
		TheCounter,
		ChangeCounter,
		FavouriteValue,
		UserAuth,
	},
	computed: {
		...mapGetters(['userIsAuth']),
	},

	methods: {
		add10() {
			// Commit a mutation
			// this.$store.commit('increase', { value: 10 });
			// this.$store.commit({
			// 	type: 'increase',
			// 	value: 10,
			// });
			this.$store.dispatch({
				type: 'counter/increase',
				value: 10,
			});
		},
	},
	mounted() {
		console.log(this.$store);
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
