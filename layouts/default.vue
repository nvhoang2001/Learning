<template>
    <el-container class="w-full h-screen">
        <the-side-bar />
        <el-container class="min-h-full w-full">
            <el-header class="bg-[#89919b]">
                <the-header />
            </el-header>
            <nuxt />
            <el-footer style="height: auto">
                <the-footer />
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
import TheSideBar from "~/components/layouts/TheSideBar.vue";
import TheHeader from "~/components/layouts/TheHeader.vue";
import TheFooter from "~/components/layouts/TheFooter.vue";
export default {
    components: { TheSideBar, TheHeader, TheFooter },
    middleware: ["check-auth", "navigation-guard"],
};
</script>
