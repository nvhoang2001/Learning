<template>
    <div>
        <ul class="flex gap-5">
            <li v-for="sta in statistics" :key="sta.title" class="w-1/3">
                <el-card shadow="hover" style="overflow: visible">
                    <div>
                        <div class="relative">
                            <div
                                v-html="sta.titleIcon.icon"
                                class="text-3xl text-white w-[75px] h-[75px]  flex justify-center items-center absolute -top-10 left-5 rounded-md"
                                :style="{
                                    background: sta.titleIcon.bg
                                }"
                            ></div>
                            <div class="ml-auto " style="width: fit-content">
                                <h3 class="text-xl font-semibold">
                                    {{ sta.title }}
                                </h3>
                                <p class="text-right font-semibold">
                                    {{ sta.value }}
                                </p>
                            </div>
                        </div>
                        <el-divider></el-divider>
                        <p>
                            <span v-html="sta.icon"></span>
                            <span> {{ sta.by || sta.time }}</span>
                        </p>
                    </div>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            statistics: [
                {
                    titleIcon: {
                        bg: "#00dcff",
                        icon: '<i class="fab fa-twitter"></i>'
                    },
                    title: "Followers",
                    value: 1234,
                    time: "Recently",
                    icon: '<i class="fas fa-history"></i>'
                },
                {
                    titleIcon: {
                        bg: "#f55959",
                        icon: '<i class="fas fa-chart-bar"></i>'
                    },
                    title: "Website visits",
                    value: 7553,
                    by: "Google Analytics",
                    icon: '<i class="fas fa-tag"></i>'
                },
                {
                    titleIcon: {
                        bg: "#24cf24",
                        icon: '<i class="fas fa-store-alt"></i>'
                    },
                    title: "Revenue",
                    value: "$ 35,456",
                    time: "Last 24 hours",
                    icon: '<i class="far fa-calendar"></i>'
                }
            ]
        };
    }
};
</script>
