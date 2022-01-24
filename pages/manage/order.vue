<template>
    <div class="py-5 px-10 overflow-y-auto">
        <h1 class="text-4xl font-bold text-center">ORDERS MANAGEMENT</h1>
        <el-divider />
        <div class="flex gap-y-5 flex-wrap justify-end mb-5">
            <h4 class="w-full font-semibold text-lg">Search by</h4>
            <mix-search
                v-model="searchValue"
                inputPlaceholder="Type to search..."
                selectPlaceholder="Search by"
                @select-change="onSelectChange"
                @input-change="onInputChange"
                class="inline-block w-[60%]"
                :labels="{
                    'Order\'s id': 'id',
                    'Customer\'s name': 'customer',
                }"
            />
        </div>
        <div class="w-[fit-content] m-auto breakwords overflow-hidden">
            <el-table
                :data="computedOrderData"
                style="width: fit-content"
                class="block mx-auto"
                ref="orderTable"
                fit
            >
                <el-table-column type="index" width="50"> </el-table-column>
                <el-table-column prop="id" label="Order's id" width="120">
                </el-table-column>

                <el-table-column prop="customer" label="Customer" width="150">
                </el-table-column>
                <el-table-column prop="time" label="Time" width="175">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="Status"
                    width="200"
                    class-name="capitalize"
                >
                    <template slot-scope="scope">
                        <p :class="`order--${scope.row.status}`">
                            {{ scope.row.status }}
                        </p>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="totalItem"
                    label="Items"
                    width="100"
                ></el-table-column>
                <el-table-column prop="total" label="Total" width="100">
                    <template slot-scope="scope">
                        <p class="font-bold">${{ scope.row.total }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="payment" label="Payment" width="120">
                    <template slot-scope="scope">
                        <p
                            :class="`capitalize text-center payment--${scope.row.payment}`"
                        >
                            {{ scope.row.payment }}
                        </p>
                    </template>
                </el-table-column>
                <el-table-column label="Operation" width="110">
                    <template slot-scope="scope">
                        <el-button type="text" @click="toggleDetail(scope)">{{
                            orders[scope.$index].btnState
                        }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    type="expand"
                    width="1"
                    class-name="expand-cell"
                >
                    <template slot-scope="props">
                        <div
                            v-if="
                                orders[props.$index].detailState === 'loading'
                            "
                        >
                            <p class="text-center">Loading</p>
                        </div>
                        <div
                            v-else-if="
                                orders[props.$index].detailState === 'loaded'
                            "
                        >
                            <table
                                class="text-center ml-auto w-11/12 product-table"
                            >
                                <thead>
                                    <tr>
                                        <th class="min-w-[120px]">
                                            Product's id
                                        </th>
                                        <th class="min-w-[300px]">
                                            Product's name
                                        </th>
                                        <th class="min-w-[150px]">
                                            Illustration
                                        </th>
                                        <th class="min-w-[75px]">Price</th>
                                        <th class="min-w-[75px]">Quantity</th>
                                        <th class="min-w-[100px]">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="item in props.row.items">
                                        <tr
                                            v-if="!!loadedItems[item.productId]"
                                            :key="item.productId"
                                        >
                                            <td>
                                                {{
                                                    loadedItems[item.productId]
                                                        .id
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    loadedItems[item.productId]
                                                        .title
                                                }}
                                            </td>
                                            <td>
                                                <img
                                                    :src="
                                                        loadedItems[
                                                            item.productId
                                                        ].image
                                                    "
                                                    alt=""
                                                    class="object-fill w-full h-[150px]"
                                                />
                                            </td>
                                            <td>
                                                ${{
                                                    loadedItems[item.productId]
                                                        .price
                                                }}
                                            </td>
                                            <td>{{ item.quantity }}</td>
                                            <td>
                                                ${{
                                                    item.quantity *
                                                    loadedItems[item.productId]
                                                        .price
                                                }}
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="5">Total</td>
                                        <td class="text-right">
                                            ${{ props.row.total }}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import _cloneDeep from "lodash/cloneDeep";

const UNLOAD = "unload";
const LOADING = "loading";
const LOADED = "loaded";
const SHOWDETAIL = "Show details";
const HIDEDETAIL = "Hide details";

export default {
    name: "Orders",
    data() {
        const orders = _cloneDeep(this.$store.getters["orders/getOrders"]);
        for (const order of orders) {
            const { time: timeISO, items } = order;
            const time = new Date(timeISO);
            // Format date to DD/MM/YYYY - hh:mm:ss
            order.time = time.toLocaleString().replace(",", " -");
            order.totalItem = items.reduce(
                (totalItem, item) => totalItem + item.quantity,
                0
            );
            order.detailState = UNLOAD;
            order.btnState = SHOWDETAIL;
        }

        return {
            searchValue: "",
            selectType: "",
            orders,
            loadedItems: {},
        };
    },
    computed: {
        computedOrderData() {
            let ors = this.orders;

            if (this.selectType.trim() !== "") {
                ors = ors.filter((o) => {
                    return o[this.selectType].includes(this.searchValue);
                });
            }

            return ors;
        },
    },
    methods: {
        onSelectChange(val) {
            this.selectType = val;
        },
        onInputChange(val) {
            this.searchValue = val;
        },

        toggleDetail(scope) {
            let $table = this.$refs.orderTable;
            $table.toggleRowExpansion(scope.row);
            this.orders[scope.$index].btnState =
                this.orders[scope.$index].btnState === SHOWDETAIL
                    ? HIDEDETAIL
                    : SHOWDETAIL;

            if (this.orders[scope.$index].detailState === LOADED) {
                return;
            }

            const { items } = scope.row;
            this.orders[scope.$index].detailState = LOADING;
            (async () => {
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    const { productId: id } = item;
                    if (!(id in this.loadedItems)) {
                        try {
                            const resData = await fetch(
                                `https://fakestoreapi.com/products/${id}`
                            );
                            const data = await resData.json();
                            this.loadedItems[id] = data;
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }

                this.orders[scope.$index].detailState = LOADED;
            })();
        },
    },
};
</script>

<style lang="scss" scoped>
.order {
    &--processing {
        @apply inline-block py-2 px-4 border-2 border-solid border-blue-400  rounded-full;
        background-color: hsla(214, 100%, 72%, 0.25);
    }
    &--completed {
        @apply inline-block py-2 px-4 border-2 border-solid border-green-400  rounded-full;
        background-color: hsla(130, 100%, 72%, 0.25);
    }
    &--cancelled {
        @apply inline-block py-2 px-4 border-2 border-solid border-red-400  rounded-full;
        background-color: hsla(0, 100%, 72%, 0.25);
    }
    &--pending {
        @apply inline-block py-2 px-4 border-2 border-solid border-yellow-400  rounded-full;
        background-color: hsla(61, 100%, 50%, 0.25);
    }
}

.payment {
    &--manual {
        @apply font-medium text-gray-600 py-2 px-4;
        background-color: hsla(0, 0%, 50%, 0.25);
    }
    &--online {
        @apply font-medium text-white py-2 px-4;
        background-color: hsl(197, 100%, 44%);
    }
}

.product-table {
    $border-width: 1.5px;

    thead {
        border-bottom: $border-width solid #666;
    }

    tfoot {
        border-top: $border-width solid #666;

        td {
            font-weight: bold;

            &:last-child {
                border-left: $border-width solid #666;
            }
        }
    }

    tr {
        &:nth-child(even) {
            border-top: $border-width solid #ccc;
            border-bottom: $border-width solid #ccc;
        }
    }

    th,
    td {
        padding: 1rem;
    }
}
</style>
