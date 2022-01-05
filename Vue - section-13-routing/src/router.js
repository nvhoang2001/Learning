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
                    props: true, // Pass teamID as props rather using this.route
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
            beforeEnter(to, from, next) {
                console.log('Route before enter');
                console.log(to);
                console.log(from);
                next();
            },
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        console.log(to);
        console.log(from);
        console.log(savedPosition);

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

// Run before each navigation
router.beforeEach((to, from, next) => {
    console.log('Global beforeEach');
    console.log(to);
    console.log(from);
    if (to.meta.needAuth) {
        console.log('Route need auth to navigate');
    }

    next();
});

// Run after each navigation
// Ofter use for sending analytics
router.afterEach((to, from) => {
    console.log('Global afterEach');
    console.log(to);
    console.log(from);
});

export default router;
