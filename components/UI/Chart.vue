<script>
import { Line } from "vue-chartjs";

export default {
    name: "LineChart",
    extends: Line,
    props: {
        label: {
            type: Array,
            required: true
        },
        dataset: { type: Array, required: true },
        options: {
            type: Object,
            default: null
        }
    },
    mounted() {
        this.renderChart(
            { labels: this.label, datasets: this.dataset },
            this.options
        );
    }
};
</script>
