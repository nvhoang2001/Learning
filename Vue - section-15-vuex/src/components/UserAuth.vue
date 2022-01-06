<template>
	<button @click="login" v-if="!userIsAuth">Login</button>
	<button @click="logout" v-if="userIsAuth">Logout</button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
	computed: {
		...mapGetters(['userIsAuth']),
	},
	methods: {
		...mapMutations(['login', 'logout']),
	},
};
</script>
