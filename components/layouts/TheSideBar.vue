<template>
    <aside
        class="h-full overflow-x-hidden relative aside-menu"
        @mouseenter="expandMenu"
        @mouseleave="collapseMenu"
        ref="sideMenu"
    >
        <el-menu
            :default-active="$route.path"
            class="el-menu-vertical h-full"
            :collapse="isMinimize && isCollapse"
            :collapse-transition="false"
            :active-text-color="activeColor"
            :background-image="backgroundImage"
            background-color="transparent"
            :style="{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor,
            }"
            router
        >
            <div class="pt-5 px-[10px] flex justify-start items-center">
                <div class="w-12 h-12 rounded-full bg-white"></div>
                <p class="pl-4 text-lg username">User name</p>
            </div>
            <div class="p-3">
                <el-divider></el-divider>
            </div>
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">Dashboard</span>
            </el-menu-item>
            <el-submenu index="/manage">
                <template slot="title">
                    <i class="el-icon-s-management"></i>
                    <span slot="title">Manage</span>
                </template>
                <el-menu-item index="/manage/user">
                    <i class="el-icon-s-custom"></i>
                    <span>Employee</span>
                </el-menu-item>
                <el-menu-item index="/manage/products">
                    <i class="el-icon-s-promotion"></i>
                    <span>Products</span>
                </el-menu-item>
                <el-menu-item index="/manage/order">
                    <i class="el-icon-s-order"></i>
                    <span>Orders</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
        <div
            class="background absolute top-0 left-0 h-full w-full opacity-25 pointer-events-none"
            :style="{ backgroundColor }"
        ></div>
    </aside>
</template>

<script>
let isEnter = false;
let colTimer, expTimer;

export default {
    data() {
        return {
            isCollapse: true,
            menuWidth: "",
        };
    },
    computed: {
        activeColor() {
            return this.$store.getters["theme/getFilterColor"];
        },
        backgroundColor() {
            return this.$store.getters["theme/getBackgroundColor"];
        },
        isMinimize() {
            return this.$store.getters["theme/getSizeState"];
        },
        backgroundImage() {
            if (!this.$store.getters["theme/getBackgroundImageState"])
                return "";
            return this.$store.getters["theme/getBackgroundImageURL"];
        },
    },
    methods: {
        expandMenu() {
            if (!this.$store.getters["theme/getSizeState"]) {
                return;
            }
            if (isEnter) {
                if (colTimer) {
                    clearTimeout(colTimer);
                    colTimer = null;
                } else return;
            }
            isEnter = true;
            expTimer = setTimeout(() => {
                this.isCollapse = false;
                expTimer = null;
                isEnter = false;
            }, 125);
        },
        collapseMenu(e) {
            if (!this.$store.getters["theme/getSizeState"]) {
                return;
            }

            if (isEnter) {
                if (expTimer) {
                    clearTimeout(expTimer);
                    expTimer = null;
                } else return;
            }
            isEnter = true;

            colTimer = setTimeout(() => {
                this.isCollapse = true;
                colTimer = null;
                isEnter = false;
            }, 375);
        },
    },
};
</script>

<style lang="scss" scoped>
.username {
    display: none;
}
.aside-menu {
    width: 64px;
    transition: width 0.5s;

    &:hover {
        width: 300px;

        .username {
            display: block;
        }
    }
}
</style>
