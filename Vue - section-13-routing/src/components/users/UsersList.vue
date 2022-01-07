<template>
    <div>
        <button @click="routing">Go to teams</button>
        <button @click="saveChanges">Save change</button>
        <ul>
            <user-item
                v-for="user in users"
                :key="user.id"
                :name="user.fullName"
                :role="user.role"
            ></user-item>
        </ul>
    </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
    components: {
        UserItem,
    },
    inject: ['users'],
    data() {
        return {
            savedChanges: false,
        };
    },
    methods: {
        routing() {
            this.$router.push('/teams');
        },
        saveChanges() {
            this.savedChanges = true;
        },
    },
    beforeRouteLeave(to, from, next) {
        if (!this.savedChanges) {
            const ans = confirm('Do you really want to leave?');
            next(ans);
        } else next();
    },
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 2rem auto;
    max-width: 20rem;
    padding: 0;
}
</style>
