<template>
    <div>
        <chart
            :label="chartData.labels"
            :dataset="chartData.datasets"
            :options="chartOptions"
            style="height: 350px; position: relative"
        />
    </div>
</template>

<script>
import Chart from "~/components/UI/Chart.vue";
export default {
    components: {
        Chart,
    },

    data() {
        if (!this.$store.getters["chartData/getConverted"]) {
            this.$store.commit("chartData/convertToPercent");
        }

        return {
            chartData: {
                labels: [2, 4, 11, 12, 14, 17, 18, 22, 25, 30],
                datasets: [
                    {
                        label: "Follower",
                        backgroundColor: "#003f5c",
                        data: this.$store.getters["chartData/getFollower"],
                    },
                    {
                        label: "Visitor",
                        backgroundColor: "#2f4b7c",
                        data: this.$store.getters["chartData/getVisitor"],
                    },
                    {
                        label: "Revenue",
                        backgroundColor: "#665191",
                        data: this.$store.getters["chartData/getRevenue"],
                    },
                ],
            },

            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: "This month revenue",
                    fontSize: 24,
                    fontColor: "#6b7280",
                },
                tooltips: {
                    backgroundColor: "#17BF62",
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                stepSize: 10,
                                maxTicksLimit: 10,
                                suggestedMax: 100,
                                suggestedMin: 0,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        };
    },
};
</script>
