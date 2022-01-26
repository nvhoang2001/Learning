<template>
    <div class="pt-20">
        <el-card class="relative text-center" style="overflow: visible">
            <img
                :src="
                    illustration ||
                    'https://www.namepros.com/attachments/empty-png.89209/'
                "
                alt=""
                class="absolute top-0 left-1/2 top-center w-[150px] h-[150px] rounded-full shadow-xl"
            />
            <div class="mt-24 mb-5">
                <h4 class="text-2xl">{{ fullname }}</h4>
            </div>
            <div class="my-5">
                <p class="text-lg">{{ profile.email }}</p>
            </div>
            <div>
                <p class="text-lg text-gray-400 clamp-3">
                    {{ profile.about }}
                </p>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    props: {
        illustration: {
            type: String,
        },
        profile: {
            type: Object,
        },
    },
    computed: {
        fullname() {
            return this.profile.firstname + " " + this.profile.lastname;
        },
    },
};
</script>

<style lang="scss" scoped>
.top-center {
    transform: translate(-50%, -50%);
}
.clamp-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
</style>
