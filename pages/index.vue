<template>
    <el-main>
        <statistic />
        <the-chart />
    </el-main>
</template>

<script>
import Statistic from "~/components/statistics/Statistic.vue";
import TheChart from "~/components/layouts/TheChart.vue";

export default {
    components: {
        Statistic,
        TheChart,
    },
};
</script>
