<template>
    <el-main class="bg-gray-200">
        <h2 class="text-2xl">User Page</h2>
        <div class="flex justify-between">
            <edit-profile
                class="py-5 px-10 mt-[75px] rounded-lg bg-white relative w-7/12"
                @preview="previewProfile"
            />
            <transition name="fade">
                <profile-preview
                    class="w-[40%]"
                    v-if="showPreview"
                    :illustration="illustration"
                    :profile="profile"
                />
            </transition>
        </div>
    </el-main>
</template>

<script>
import EditProfile from "~/components/Profile/EditProfile.vue";
import ProfilePreview from "../components/Profile/ProfilePreview.vue";
export default {
    name: "ProfilePage",
    components: { EditProfile, ProfilePreview },
    data() {
        return {
            illustration: "",
            profile: {
                email: "",
                firstname: "",
                lastname: "",
                about: "",
            },
            showPreview: false,
        };
    },
    methods: {
        submitForm() {},
        previewProfile(illustration, profile) {
            this.illustration = illustration;
            for (const key in this.profile) {
                this.profile[key] = profile[key].value;
            }
            this.showPreview = true;
        },
    },
};
</script>

<style lang="scss" scoped>
.fade {
    &-enter-active,
    &-leave-active {
        position: relative;
        transition: all 0.5s;
    }
    &-enter,
    &-leave-to {
        opacity: 0;
        top: 5rem;
    }

    &-enter-to,
    &-leave {
        top: 0;
        opacity: 1;
    }
}
</style>
