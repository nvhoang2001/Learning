<template>
    <div class="h-screen w-screen flex justify-center items-center">
        <el-card class="box-card">
            <h2>
                Login
            </h2>
            <el-divider></el-divider>
            <form>
                <p>
                    <label>
                        Email
                        <el-input placeholder="Email" v-model="email" clearable>
                        </el-input>
                    </label>
                    <label>
                        Password
                        <el-input
                            placeholder="Password"
                            v-model="password"
                            clearable
                        >
                        </el-input>
                    </label>
                </p>
            </form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    }
};
</script>
