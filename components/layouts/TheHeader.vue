<template>
    <el-row :gutter="20">
        <el-col :span="4" :offset="20" class="relative">
            <div class="text-right py-5 pr-8 text-white">
                <el-dropdown @command="commandHandler">
                    <p class="el-dropdown-link block text-white">
                        <i
                            class="el-icon-caret-bottom"
                            style="margin-right: 15px"
                        ></i>
                        <span> Admin </span>
                    </p>
                    <el-dropdown-menu slot="dropdown" class="p-5">
                        <el-dropdown-item
                            icon="el-icon-user"
                            :command="{ type: 'navigate', value: '/profile' }"
                        >
                            Profile
                        </el-dropdown-item>
                        <el-dropdown-item
                            icon="el-icon-setting"
                            :command="{ type: 'config' }"
                        >
                            Settings
                        </el-dropdown-item>
                        <el-dropdown-item :command="{ type: 'logout' }">
                            Logout
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <the-settings
                v-if="showSettings"
                class="absolute z-20 px-5 w-80 top-full right-[10%]"
                @mouseleave="hideSettingsHandler"
            />
        </el-col>
    </el-row>
</template>

<script>
import TheSettings from "./TheSettings.vue";
const NAVIGATE = "navigate";
const SETTINGS = "config";
const LOGOUT = "logout";

export default {
    components: { TheSettings },
    data() {
        return {
            showSettings: false,
        };
    },
    methods: {
        commandHandler(command) {
            console.log(command);
            switch (command.type) {
                case NAVIGATE:
                    this.$router.push(command.value);
                    break;
                case SETTINGS:
                    this.showSettingsHandler();
                    break;
                case LOGOUT:
                    this.$store.dispatch("auth/logout");
                    this.$router.push("/auth");

                    break;
                default:
                    break;
            }
        },

        showSettingsHandler() {
            this.showSettings = true;
        },
        hideSettingsHandler() {
            console.log("LEAVE");
            this.showSettings = false;
        },
    },
};
</script>
