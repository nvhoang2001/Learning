import Vuex from "vuex";
import chartData from "~/store/chartData";

const store = () =>
    new Vuex.Store({
        modules: {
            chart: chartData
        }
    });

export default store;
