import Vuex from "vuex";
// import chartData from "~/store/chartData";
import authData from "~/store/auth";

const store = () =>
    new Vuex.Store({
        modules: {
            // chart: chartData
            auth: authData
        }
    });

export default store;
