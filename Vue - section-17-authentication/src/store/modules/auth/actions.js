import { KEY } from '../..';

let timer;
export default {
    async login(context, payload) {
        const endPoint =
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
        await context.dispatch('auth', { endPoint, ...payload });
    },

    async signup(context, payload) {
        const endPoint =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
        await context.dispatch('auth', { endPoint, ...payload });
    },

    async auth(context, payload) {
        const response = await fetch(`${payload.endPoint}${KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            }),
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(
                responseData.error.message || 'Failed to signup'
            );
            throw error;
        }

        const expiresIn = +responseData.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        timer = setTimeout(() => {
            context.dispatch('autoLogout');
        }, expiresIn);

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('expirationDate', expirationDate);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        });
    },
    autoLogin(context) {
        const expirationDate = localStorage.getItem('expirationDate');
        const expiresIn = +expirationDate - new Date().getTime();
        if (expiresIn < 10000) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('expirationDate');
            return;
        }

        timer = setTimeout(() => {
            context.dispatch('autoLogout');
        }, expiresIn);

        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (token && userId) {
            context.commit('setUser', {
                token,
                userId,
            });
        }
    },

    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expirationDate');
        clearTimeout(timer);
        context.commit('setUser', {
            token: null,
            userId: null,
        });
    },
    autoLogout(context) {
        context.dispatch('logout');
        context.commit('didLogout');
    },
};
