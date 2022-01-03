<template>
	<section>
		<header>
			<h1>FriendList</h1>
		</header>
		<add-form @add-friend="addFriend"></add-form>
		<ul>
			<friend-contact
				v-for="friend in friends"
				:key="friend.id"
				:id="friend.id"
				:name="friend.name"
				:phone="friend.phone"
				:email="friend.email"
				:is-favourite="friend.isFavourite"
				:friend-data="friend"
				@toggle-favourite="toggleFavouriteStatus"
				@delete="deleteFriend"
			></friend-contact>
		</ul>
	</section>
</template>

<script>
	const app = {
		data() {
			return {
				friends: [
					{
						id: "manuel",
						name: "Manuel Lorenz",
						phone: "01234 5678 991",
						email: "manuel@localhost.com",
						isFavourite: true,
					},
					{
						id: "julie",
						name: "Julie Jones",
						phone: "09876 543 221",
						email: "julie@localhost.com",
						isFavourite: false,
					},
				],
			};
		},
		methods: {
			toggleFavouriteStatus(id) {
				const friend = this.friends.find((friend) => friend.id === id);
				friend.isFavourite = !friend.isFavourite;
			},
			addFriend(name, phone, email, isFavourite) {
				this.friends.push({ id: name.split(" ")[0], name, phone, email, isFavourite });
			},
			deleteFriend(id) {
				this.friends.splice(
					this.friends.findIndex((fi) => fi.id === id),
					1,
				);
			},
		},
	};
	export default app;
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

	* {
		box-sizing: border-box;
	}

	html {
		font-family: "Jost", sans-serif;
	}

	body {
		margin: 0;
	}

	header {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 3rem auto;
		border-radius: 10px;
		padding: 1rem;
		background-color: #58004d;
		color: white;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	#app ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	#app li,
	#app form {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 1rem auto;
		border-radius: 10px;
		padding: 1rem;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	#app h2 {
		font-size: 2rem;
		border-bottom: 4px solid #ccc;
		color: #58004d;
		margin: 0 0 1rem 0;
	}

	#app button {
		font: inherit;
		cursor: pointer;
		border: 1px solid #ff0077;
		background-color: #ff0077;
		color: white;
		padding: 0.05rem 1rem;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
	}

	#app button:hover,
	#app button:active {
		background-color: #ec3169;
		border-color: #ec3169;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
	}

	#app input {
		font: inherit;
		padding: 0.15rem;
	}
	#app label {
		font-weight: bold;
		margin-right: 1rem;
		width: 7rem;
		display: inline-block;
	}
	#app form div {
		margin: 1rem 0;
	}
</style>
