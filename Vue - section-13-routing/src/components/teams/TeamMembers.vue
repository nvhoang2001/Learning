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
        /* 
            - Gặp lỗi:
                Khi ở trong route con. VD: http://localhost:8080/teams/t1,
                khi click vào Teams hoặc Users trên thanh header thì
                route trên trình duyệt đã được thay đổi, nhưng component cha chưa được
                render, console đưa ra thông báo:
                Unhandled error during execution of watcher callback 
                at <TeamMembers onVnodeUnmounted=fn<onVnodeUnmounted> 
                at <RouterView> 
                at <TeamsList onVnodeUnmounted=fn<onVnodeUnmounted>  
                at <RouterView> 
                at <App>
                uncaught error during route navigation:
                TypeError: Cannot read properties of undefined (reading 'name')
                at Proxy.loadTeamMembers (TeamMembers.vue?a719:50)
                at Proxy.$route (TeamMembers.vue?a719:44)
                at callWithErrorHandling (runtime-core.esm-bundler.js?5c40:6737)
                at callWithAsyncErrorHandling (runtime-core.esm-bundler.js?5c40:6746)
                at Array.job (runtime-core.esm-bundler.js?5c40:7154)
                at flushPreFlushCbs (runtime-core.esm-bundler.js?5c40:6910)
                at flushJobs (runtime-core.esm-bundler.js?5c40:6951)
        */

        $route(state) {
            const { teamID } = state.params;
            /* 
                Khi em kiểm tra thêm dòng này thì không còn lỗi nữa, thay đổi route bình thường

                if (!teamID) {
                    return;
                }
            */

            /* 
                - Ở phần Q&A thì em biết được, lỗi này là do $route watcher được 
                gọi lại khi chuyển về route cha. Nhưng em không hiểu nó được gọi lại
                nhằm mục đích gì khi mà ở các phiên bản thấp hơn thì không?

            */

            this.loadTeamMembers(teamID);
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
        const { teamID } = this.$route.params;
        this.loadTeamMembers(teamID);
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
