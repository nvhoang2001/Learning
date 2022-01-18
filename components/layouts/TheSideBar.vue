<template>
    <aside
        class="h-full overflow-x-hidden"
        @mouseenter="expandMenu"
        @mouseleave="collapseMenu"
        ref="sideMenu"
        :style="{ width: menuWidth }"
    >
        <el-menu
            default-active="2"
            class="el-menu-vertical h-full"
            :collapse="isCollapse"
            :collapse-transition="false"
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
    methods: {
        expandMenu() {
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
