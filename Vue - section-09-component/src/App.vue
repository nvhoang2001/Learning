<template>
	<div>
		<!-- <the-header /> -->

		<TheHeader />
		<button @click="setSelectedComponent('manage-goal')">Manage Goal</button>
		<button @click="setSelectedComponent('active-goal')">Active Goal</button>
		<!-- <manage-goal v-if="selectedComponent === 'manage-goal'" />
		<active-goal v-if="selectedComponent === 'active-goal'" /> -->
		<keep-alive>
			<component :is="selectedComponent"></component>
		</keep-alive>
		<!-- <BadgeList />
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info> -->
		<!-- <course-goals>
			<template #default="slotProps">
				<h2>{{ slotProps.goal }}</h2>
			</template>
		</course-goals> -->
		<!-- <course-goals #default="slotProps">
			<h2>{{ slotProps.goal }}</h2>
		</course-goals> -->
	</div>
</template>

<script>
	import TheHeader from "./components/Layout/TheHeader.vue";
	// import BadgeList from "./components/BadgeList.vue";
	// import UserInfo from "./components/UserInfo.vue";
	// import CourseGoals from "./components/CourseGoals.vue";
	import ManageGoal from "./components/ManageGoal.vue";
	import ActiveGoal from "./components/ActiveGoal.vue";

	export default {
		components: {
			TheHeader,
			// BadgeList,
			// UserInfo,
			// CourseGoals,
			ManageGoal,
			ActiveGoal,
		},
		data() {
			return {
				activeUser: {
					name: "Maximilian Schwarzmüller",
					description: "Site owner and admin",
					role: "admin",
				},
				selectedComponent: "manage-goal",
			};
		},
		methods: {
			setSelectedComponent(cpm) {
				this.selectedComponent = cpm;
			},
		},
	};
</script>

<style>
	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
