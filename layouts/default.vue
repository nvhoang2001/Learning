<template>
    <el-container class="w-full h-screen">
        <the-side-bar />
        <nuxt />
    </el-container>
</template>

<script>
import TheSideBar from "../components/layouts/TheSideBar.vue";
export default {
    components: { TheSideBar },
    middleware: ["check-auth", "navigation-guard"],
};
</script>
