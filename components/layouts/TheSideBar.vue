<template>
    <aside
        class="h-full overflow-x-hidden relative"
        @mouseenter="expandMenu"
        @mouseleave="collapseMenu"
        ref="sideMenu"
        :style="{ width: isMinimize ? menuWidth : '300px' }"
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
                backgroundColor: backgroundColor,
            }"
            router
        >
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
const collapsedWidth = 64;
const accumulator = 4;
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
                    clearInterval(colTimer);
                    colTimer = null;
                } else return;
            }
            isEnter = true;
            let menuWidth = Math.max(
                collapsedWidth,
                parseInt(getComputedStyle(this.$refs.sideMenu).width)
            );

            this.isCollapse = false;
            expTimer = setInterval(() => {
                if (menuWidth >= 300) {
                    clearInterval(expTimer);
                    expTimer = null;
                    menuWidth = 300;
                    isEnter = false;
                } else {
                    menuWidth += accumulator;
                }
                this.menuWidth = `${menuWidth}px`;
            }, 1);
        },
        collapseMenu(e) {
            if (!this.$store.getters["theme/getSizeState"]) {
                return;
            }

            if (isEnter) {
                if (expTimer) {
                    clearInterval(expTimer);
                    expTimer = null;
                } else return;
            }
            isEnter = true;

            let menuWidth = Math.min(
                300,
                parseInt(getComputedStyle(this.$refs.sideMenu).width)
            );
            colTimer = setInterval(() => {
                if (menuWidth <= collapsedWidth) {
                    this.isCollapse = true;
                    this.menuWidth = "auto";
                    clearInterval(colTimer);
                    colTimer = null;
                    isEnter = false;
                } else {
                    menuWidth -= accumulator;
                    this.menuWidth = `${menuWidth}px`;
                }
            }, 1);
        },
    },
};
</script>
