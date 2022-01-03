<template>
	<form @submit.prevent="submitForm">
		<!-- <p>Name: <input type="text" name="name" v-model="name" /></p>
		<p>Phone: <input type="text" name="phone" v-model="phone" /></p>
		<p>Email: <input type="text" name="email" v-model="email" /></p>
		<p>Favourite? <input type="checkbox" v-model="isFavourite" /></p>
		<button>Add</button> -->
		<div>
			<label>Name</label>
			<input type="text" v-model="name" />
		</div>
		<div>
			<label>Phone</label>
			<input type="tel" v-model="phone" />
		</div>
		<div>
			<label>Email</label>
			<input type="email" v-model="email" />
		</div>
		<div>
			<button>Add Contact</button>
		</div>
	</form>
</template>

<script>
	export default {
		emits: { "add-friend": (name, phone, email) => name && phone && email },
		data() {
			return {
				name: "",
				phone: "",
				email: "",
				isFavourite: false,
			};
		},
		methods: {
			submitForm() {
				this.$emit("add-friend", this.name, this.phone, this.email, this.isFavourite);
				this.name = this.phone = this.email = "";
				this.isFavourite = false;
			},
		},
	};
</script>
