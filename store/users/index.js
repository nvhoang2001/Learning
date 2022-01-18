import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    namespaced: true,
    state() {
        return {
            usersData: [
                {
                    id: "8UFs9ZufMz",
                    date: "2016-05-03",
                    name: "Tom",
                    state: "California",
                    city: "Los Angeles",
                    address: "No. 189, Grove St, Los Angeles",
                    zip: "CA 90036",
                },
                {
                    id: "vZvZRrPvsc",
                    date: "2016-05-02",
                    name: "Tom",
                    state: "California",
                    city: "Los Angeles",
                    address: "No. 189, Grove St, Los Angeles",
                    zip: "CA 90036",
                },
                {
                    id: "9BFWamf2Pz",
                    date: "2016-05-04",
                    name: "Tom",
                    state: "California",
                    city: "Los Angeles",
                    address: "No. 189, Grove St, Los Angeles",
                    zip: "CA 90036",
                },
                {
                    id: "Q13byeM1qD",
                    date: "2016-05-01",
                    name: "Tom",
                    state: "California",
                    city: "Los Angeles",
                    address: "No. 189, Grove St, Los Angeles",
                    zip: "CA 90036",
                },
                {
                    id: "6MCpNuvANQ",
                    date: "2016-05-08",
                    name: "Tom",
                    state: "California",
                    city: "Los Angeles",
                    address: "No. 189, Grove St, Los Angeles",
                    zip: "CA 90036",
                },
                {
                    id: "RCP4fkDQa9",
                    date: "2016-05-06",
                    name: "Tom",
                    state: "California",
                    city: "Los Angeles",
                    address: "No. 189, Grove St, Los Angeles",
                    zip: "CA 90036",
                },
                {
                    id: "zTBKJSyZE6",
                    date: "2016-05-07",
                    name: "Tom",
                    state: "California",
                    city: "Los Angeles",
                    address: "No. 189, Grove St, Los Angeles",
                    zip: "CA 90036",
                },
            ],
        };
    },

    getters,
    mutations,
    actions,
};
