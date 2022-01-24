import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
    namespaced: true,
    state() {
        return {
            orders: [
                {
                    id: "xiqk9lAPiW",
                    time: "2020-03-02T00:00:02.000Z",
                    customer: "Hana Wharton",
                    status: "processing",
                    items: [
                        { productId: 1, quantity: 4 },
                        { productId: 2, quantity: 1 },
                        { productId: 3, quantity: 6 },
                    ],
                    total: 56.67,
                    payment: "manual",
                },
                {
                    id: "reuISsdI46",
                    time: "2020-01-02T00:00:02.000Z",
                    customer: "Hana Wharton",
                    status: "processing",
                    items: [
                        { productId: 2, quantity: 4 },
                        { productId: 1, quantity: 10 },
                        { productId: 5, quantity: 2 },
                    ],
                    total: 76.84,
                    payment: "online",
                },
                {
                    id: "gqgxt4NuaI",
                    time: "2020-03-01T00:00:02.000Z",
                    customer: "Hana Wharton",
                    status: "cancelled",
                    items: [
                        { productId: 1, quantity: 2 },
                        { productId: 9, quantity: 1 },
                    ],
                    total: 62.57,
                    payment: "manual",
                },
                {
                    id: "sGNg7vKVph",
                    time: "2020-01-01T00:00:02.000Z",
                    customer: "Hana Wharton",
                    status: "completed",
                    items: [{ productId: 1, quantity: 4 }],
                    total: 94.63,
                    payment: "online",
                },
                {
                    id: "Mj8pXXVipB",
                    time: "2020-03-01T00:00:02.000Z",
                    customer: "Hana Wharton",
                    status: "pending",
                    items: [
                        { productId: 7, quantity: 1 },
                        { productId: 8, quantity: 1 },
                    ],
                    total: 155.7,
                    payment: "manual",
                },
            ],
        };
    },

    getters,
    mutations,
    actions,
};
