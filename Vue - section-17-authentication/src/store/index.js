import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index';

export const KEY = 'AIzaSyBdEUtDzjVqziCf7Blv-SpPM5Sb1uDefXI';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
        auth: authModule,
    },
});

export default store;
