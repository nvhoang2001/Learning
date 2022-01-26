<template>
    <div @mouseleave="$emit('mouseleave')">
        <el-card>
            <div slot="header">
                <h2 class="settings__header">Settings</h2>
            </div>
            <div>
                <ul>
                    <!-- Side bar filter color option -->
                    <li>
                        <h3 class="settings__header-option">Sidebar filters</h3>
                        <!-- Sidebar filter color list -->
                        <ul class="flex justify-around my-1">
                            <li
                                class="w-5 h-5 rounded-full hover:scale-110 transition-all duration-500 border-2 border-solid border-transparent hover:border-current hover:cursor-pointer"
                                v-for="color in filterList"
                                :key="color"
                                :style="{
                                    color,
                                    backgroundColor: color,
                                }"
                                @click="changeFilterColor(color)"
                            ></li>
                        </ul>
                    </li>
                    <el-divider></el-divider>
                    <!-- Sidebar background color option -->
                    <li>
                        <h3 class="settings__header-option">
                            Sidebar background
                        </h3>
                        <ul class="flex justify-center my-1">
                            <template v-for="color in backgroundColors">
                                <li
                                    class="w-5 h-5 mx-2 rounded-full hover:scale-110 transition-all duration-500 border-2 border-solid border-transparent hover:border-current hover:cursor-pointer"
                                    :key="color"
                                    :style="{
                                        color,
                                        backgroundColor: color,
                                        border:
                                            color === '#fff'
                                                ? '1px solid #000'
                                                : '',
                                    }"
                                    @click="changeBackgroundColor(color)"
                                ></li>
                            </template>
                        </ul>
                    </li>
                    <el-divider></el-divider>
                    <!-- Sidebar minimize toggle -->
                    <li class="flex justify-between">
                        <p>Sidebar mini</p>
                        <div>
                            <el-switch
                                :value="miniSidebar"
                                @change="toggleSidebarSizeState"
                            ></el-switch>
                        </div>
                    </li>
                    <el-divider></el-divider>
                    <!-- Sidebar background image toggle -->
                    <li class="flex justify-between">
                        <p>Sidebar images</p>
                        <div>
                            <el-switch
                                :value="useImage"
                                @change="toggleImageUsage"
                            ></el-switch>
                        </div>
                    </li>
                    <el-divider></el-divider>
                    <!-- Sidebar background image list -->
                    <li>
                        <ul class="flex justify-between">
                            <li
                                v-for="(img, i) in backgroundImages"
                                class="w-[22.5%] h-[100px] rounded-lg bg-center bg-cover bg-no-repeat"
                                :class="{
                                    'settings__image--choose':
                                        currentImage === i,
                                }"
                                :style="{
                                    backgroundImage: `url(${img})`,
                                }"
                                :key="img"
                                @click="changeSidebarBackgroundImage(img)"
                            ></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    emits: ["mouseleave"],
    data() {
        return {
            miniSidebar: this.$store.getters["theme/getSizeState"],
            useImage: this.$store.getters["theme/getBackgroundImageState"],
            filterList: ["#ef4444", "#10b981", "#93c5fd", "#3b82f6", "#8b5cf6"],
            backgroundColors: ["#000", "#fff", "#10b981", "#2563eb"],
            backgroundImages: [
                "https://images.pexels.com/photos/8566320/pexels-photo-8566320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "https://images.pexels.com/photos/9336604/pexels-photo-9336604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "https://images.pexels.com/photos/2011367/pexels-photo-2011367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "https://images.pexels.com/photos/10059294/pexels-photo-10059294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            ],
        };
    },
    computed: {
        currentImage() {
            const image = this.$store.getters["theme/getBackgroundImageURL"];
            return this.backgroundImages.findIndex((img) => img === image);
        },
    },
    methods: {
        changeFilterColor(color) {
            this.$store.dispatch("theme/changeFilterColor", color);
        },
        changeBackgroundColor(color) {
            this.$store.dispatch("theme/changeBackgroundColor", color);
        },
        toggleSidebarSizeState() {
            this.miniSidebar = !this.miniSidebar;
            this.$store.dispatch("theme/changeSizeState", this.miniSidebar);
        },
        toggleImageUsage() {
            this.useImage = !this.useImage;
            this.$store.dispatch("theme/changeBgImageState", this.useImage);
        },
        changeSidebarBackgroundImage(imgURL) {
            this.$store.dispatch("theme/changeBgImageURL", imgURL);
        },
    },
};
</script>

<style lang="scss" scoped>
.settings {
    &__header {
        @apply text-xl font-semibold uppercase;
        &-option {
            @apply text-lg font-semibold;
        }
    }

    &__image {
        &--choose {
            @apply border-[3px] border-solid;
            border-color: turquoise;
        }
    }
}
</style>
