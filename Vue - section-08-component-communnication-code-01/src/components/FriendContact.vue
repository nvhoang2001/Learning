<template>
	<li>
		<h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
		<button @click="toggleVisible">{{ contactsAreVisible ? "Hide" : "Show" }} Details</button>
		<button @click="toggleFavourite">Toggle Favourite</button>
		<ul v-show="contactsAreVisible">
			<li><strong>Phone:</strong> {{ phone }}</li>
			<li><strong>Email:</strong> {{ email }}</li>
		</ul>
		<button @click="$emit('delete', id)">Delete</button>
	</li>
</template>

<script>
	export default {
		// props: ["name", "phone", "email", "isFavourite"],
		// props: {
		// 	name: String,
		// 	phone: String,
		// 	email: String,
		// 	isFavourite: String,
		// },
		props: {
			id: { type: String, required: true },
			name: {
				type: String,
				required: true,
			},
			phone: {
				type: String,
				required: true,
			},
			email: {
				type: String,
				required: true,
			},
			isFavourite: {
				type: Boolean,
				required: false,
				default: false,
				// validator: (value) => value === "1" || value === "0",
			},
			friendData: Object,
		},
		// emit: ["toggle-favourite"],
		emit: {
			"toggle-favourite": (id) => {
				if (id) {
					return true;
				} else {
					console.warn("Missing id");
					return false;
				}
			},
			delete: (id) => !!id,
		},

		data() {
			return {
				contactsAreVisible: false,
				// favourite: this.isFavourite,
			};
		},
		methods: {
			toggleVisible() {
				this.contactsAreVisible = !this.contactsAreVisible;
			},
			toggleFavourite() {
				this.$emit("toggle-favourite", this.id);
			},
		},
	};
</script>
