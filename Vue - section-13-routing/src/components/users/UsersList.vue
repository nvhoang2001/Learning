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
    beforeRouteEnter(to, from, next) {
        console.log('Component before enter');
        console.log(to);
        console.log(from);
        next();
    },
    beforeRouteLeave(to, from, next) {
        console.log('Before route leave');
        console.log(to);
        console.log(from);
        if (!this.savedChanges) {
            const ans = confirm('Do you really want to leave?');
            console.log(ans);
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
