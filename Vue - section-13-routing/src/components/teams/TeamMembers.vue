<template>
    <section>
        <h2>{{ teamName }}</h2>
        <ul>
            <user-item
                v-for="member in members"
                :key="member.id"
                :name="member.fullName"
                :role="member.role"
            ></user-item>
        </ul>
        <router-link to="/teams/t2">Team 2</router-link>
    </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
    inject: ['teams', 'users'],
    props: ['teamID'],
    components: {
        UserItem,
    },
    data() {
        return {
            teamName: '',
            members: [],
        };
    },
    watch: {
        $teamID(teamId) {
            this.loadTeamMembers(teamId);
        },
    },
    methods: {
        loadTeamMembers(teamID) {
            const team = this.teams.find((team) => team.id === teamID);
            this.teamName = team.name;
            const { members } = team;
            this.members = this.users.filter((user) => {
                return members.find((mem) => mem === user.id);
            });
        },
    },
    created() {
        console.log(this.$route.query);
        this.loadTeamMembers(this.teamID);
    },

    beforeRouteUpdate(to, from, next) {
        console.log('Before route update');
        console.log(to);
        console.log(from);

        next();
    },
};
</script>

<style scoped>
section {
    margin: 2rem auto;
    max-width: 40rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 12px;
}

h2 {
    margin: 0.5rem 0;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
