<template>
    <el-container class="min-h-full w-full">
        <el-header class="bg-[#89919b]">
            <the-header />
        </el-header>
        <el-main>
            <statistic />
            <the-chart />
        </el-main>
        <el-footer style="height: auto">
            <the-footer />
        </el-footer>
    </el-container>
</template>

<script>
import TheHeader from "~/components/layouts/TheHeader.vue";
import DatePicker from "~/components/search/DatePicker.vue";
import MixSearch from "~/components/search/MixSearch.vue";
import Tablelist from "~/components/tablelist/tablelist.vue";
import TheFooter from "~/components/layouts/TheFooter.vue";
import Statistic from "~/components/statistics/Statistic.vue";
import TheChart from "~/components/layouts/TheChart.vue";

export default {
    components: {
        TheHeader,
        DatePicker,
        MixSearch,
        Tablelist,
        TheFooter,
        Statistic,
        TheChart
    }
};
</script>
