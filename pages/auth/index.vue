<template>
    <div class="h-screen w-screen flex justify-center items-center">
        <el-card class="box-card w-[35%]">
            <h2 class="font-bold text-2xl">
                {{ title }}
            </h2>
            <el-divider></el-divider>
            <form @submit.prevent="onSubmit">
                <div>
                    <label>
                        <span class="font-semibold text-base my-2 inline-block"
                            >Email</span
                        >
                        <el-input
                            placeholder="Email"
                            v-model="email"
                            type="email"
                            clearable
                            style="width: 95%; display: block"
                            class="ml-auto"
                        >
                        </el-input>
                    </label>
                </div>
                <div>
                    <label>
                        <span class="font-semibold text-base my-2 inline-block"
                            >Password</span
                        >
                        <el-input
                            placeholder="Password"
                            v-model="password"
                            type="password"
                            clearable
                            style="width: 95%; display: block"
                            class="ml-auto"
                        >
                        </el-input>
                    </label>
                </div>
                <div class="mt-4">
                    <el-button
                        type="primary"
                        plain
                        native-type="submit"
                        :loading="submitting"
                    >
                        {{ submitting ? "Submitting" : submitMode }}
                    </el-button>
                    <el-button
                        type="text"
                        @click="switchMode"
                        class="text-black"
                        :disabled="submitting"
                    >
                        Switch to {{ changeMode }}
                    </el-button>
                </div>
            </form>
        </el-card>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    layout: "auth",

    data() {
        return {
            mode: "signin",
            submitting: false,
            email: "",
            password: "",
        };
    },
    computed: {
        title() {
            return this.mode === "signin" ? "Log in" : "Sign up";
        },
        submitMode() {
            return this.mode === "signin" ? "Sign in" : "Sign up";
        },
        changeMode() {
            return this.mode === "signin" ? "sign up" : "sign in";
        },
    },
    methods: {
        ...mapActions("auth", ["login"]),
        onSubmit() {
            this.submitting = true;
            const account = {
                email: this.email,
                password: this.password,
            };

            this.login(account).then((token) => {
                this.submitting = false;
                this.$router.push("/");
            });
        },
        switchMode() {
            this.mode = this.mode === "signin" ? "signup" : "signin";
        },
    },
};
</script>

<style lang="scss" scoped>
.el-button--text {
    color: black;

    &:hover {
        color: #3b82f6;
    }
}
</style>
