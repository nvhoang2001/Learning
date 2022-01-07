<template>
    <div>
        <base-dialog
            :show="!!error"
            title="Error occured"
            @close="handlerError"
        >
            <p>{{ error }}</p>
        </base-dialog>
        <base-dialog :show="isLoading" fixed title="Authenticating">
            <base-spinner />
        </base-dialog>
        <base-card>
            <form @submit.prevent="submitForm">
                <div class="form-control">
                    <label for="email"> Email </label>
                    <input type="email" id="email" v-model.trim="email" />
                </div>
                <div class="form-control">
                    <label for="password"> Password </label>
                    <input
                        type="password"
                        id="password"
                        v-model.trim="password"
                    />
                </div>
                <p v-if="!formIsValid">
                    Please enter a valid e-mail and password(At least 6
                    characters)
                </p>
                <base-button>{{ submitBtnCaption }}</base-button>
                <base-button
                    type="button"
                    mode="flat"
                    @click="switchAuthMode"
                    >{{ switchBtnCaption }}</base-button
                >
            </form>
        </base-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null,
        };
    },
    computed: {
        submitBtnCaption() {
            return this.mode === 'login' ? 'Login' : 'Signup';
        },
        switchBtnCaption() {
            return `${this.mode !== 'login' ? 'Login' : 'Signup'} instead`;
        },
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;
            this.isLoading = true;
            if (
                this.email === '' ||
                !this.email.includes('@') ||
                this.password.length < 6
            ) {
                this.formIsValid = false;
                return;
            }
            const actionPayload = {
                email: this.email,
                password: this.password,
            };

            try {
                if (this.mode === 'signup') {
                    await this.$store.dispatch('signup', actionPayload);
                } else {
                    await this.$store.dispatch('login', actionPayload);
                }

                const redirectUrl = '/' + (this.$route.query.redirect || '');
                this.$router.replace(redirectUrl);
                // if (this.$route.query.redirect === 'register') {
                //     this.$router.replace('/register');
                // } else this.$router.replace('/');
            } catch (error) {
                this.error =
                    error.message ||
                    'Failed to authenticated, try again later.';
            }
            this.isLoading = false;
        },
        switchAuthMode() {
            this.mode = this.mode === 'login' ? 'signup' : 'login';
        },

        handlerError() {
            this.error = null;
        },
    },
};
</script>

<style scoped>
form {
    margin: 1rem;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}
</style>
