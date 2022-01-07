import { createRouter, createWebHistory } from 'vue-router';
import TeamList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams', // redirect '/' to '/teams'
        },
        {
            path: '/teams',
            components: {
                default: TeamList,
                footer: TeamFooter,
            },
            children: [
                {
                    name: 'team-member',
                    path: ':teamID',
                    component: TeamMembers,
                },
            ],
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UserFooter,
            },
            meta: { needAuth: true },
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        },
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        return {
            left: 0,
            top: 0,
            behavior: 'smooth',
        };
    },
});

export default router;
