<template>
    <div>
        <chart
            :label="chartData.labels"
            :dataset="chartDataset"
            :options="chartOptions"
            style="height: 350px;  position: relative;"
        />
    </div>
</template>

<script>
import Chart from "~/components/UI/Chart.vue";

/* 
Error detail:

Module parse failed: Identifier directly after number (76:85) 
File was processed with these loaders: 
* ./node_modules/babel-loader/lib/index.js * ./node_modules/vue-loader/lib/index.js You may need an additional loader to handle the result of these loaders. | chartDataset() { | // return this.chartData.datasets; > const dataset = this.chartData.datasets.map(d => d.data.map(n => (100 * (n / 10_000)).toFixed(2))); | const data = this.chartData.datasets.map((dat, i) => { | const dataObj = {

    NodeJs version: 16.11.1
    Yarn version: 1.22.11
*/

export default {
    components: { Chart },
    data() {
        return {
            chartData: {
                labels: [2, 4, 11, 12, 14, 17, 18, 22, 25, 30],
                datasets: [
                    // {
                    //     label: "Follower",
                    //     backgroundColor: "#003f5c",
                    //     data: this.$store.getters["chart/getFollower"]
                    // }
                    // {
                    //     label: "Visitor",
                    //     backgroundColor: "#2f4b7c",
                    //     data:this.$store.getters["chart/getVisitor"]
                    // },
                    {
                        label: "Revenue",
                        backgroundColor: "#665191",
                        data: this.$store.getters["chart/getRevenue"]
                    }
                ]
            },

            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "This month revenue",
                    fontSize: 24,
                    fontColor: "#6b7280"
                },
                tooltips: {
                    backgroundColor: "#17BF62"
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                stepSize: 10,
                                maxTicksLimit: 10,
                                suggestedMax: 100,
                                suggestedMin: 0
                            }
                        }
                    ],
                    xAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        };
    },
    computed: {
        chartDataset() {
            // return this.chartData.datasets;
            const dataset = this.chartData.datasets.map(d =>
                d.data.map(n => (100 * (n / 10_000)).toFixed(2))
            );
            const data = this.chartData.datasets.map((dat, i) => {
                const dataObj = {
                    label: dat.label,
                    backgroundColor: dat.backgroundColor,
                    data: dataset[i]
                };
                return dataObj;
            });
            return data;
        }
    }
};
</script>
