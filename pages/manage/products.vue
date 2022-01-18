<template>
    <div class="py-5 px-10 overflow-y-auto">
        <h1 class="text-4xl font-bold text-center">PRODUCTS MANAGEMENT</h1>
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
            />
        </div>
        <div class="w-[fit-content] m-auto">
            <el-button
                type="primary"
                plain
                size="small"
                style="display: block; margin-left: auto"
                @click="openAddForm"
            >
                <i class="fas fa-plus"></i> <span>Add</span>
            </el-button>
            <el-table
                :data="computedUserData"
                style="width: fit-content"
                class="block mx-auto"
                fit
            >
                <el-table-column type="index" width="50"> </el-table-column>
                <el-table-column prop="id" label="Product'id" width="120">
                </el-table-column>

                <el-table-column prop="name" label="Product's name" width="300">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="Type"
                    width="100"
                    class-name="capitalize"
                >
                </el-table-column>
                <el-table-column
                    prop="category"
                    label="Category"
                    width="100"
                    class-name="capitalize"
                >
                </el-table-column>
                <el-table-column prop="image" label="Illustration" width="100">
                    <template slot-scope="img">
                        <img :src="img.row.image" />
                    </template>
                </el-table-column>
                <el-table-column prop="brand" label="Brand" width="100">
                </el-table-column>
                <el-table-column prop="author" label="Author" width="120">
                </el-table-column>
                <el-table-column label="Operations" width="150">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            size="mini"
                            @click="editProductData(scope.row)"
                        >
                            Edit
                        </el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="deleteUser(scope.row)"
                        >
                            Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <modal v-if="showAddForm">
                <add-user
                    class="absolute w-4/5 top-10 left-1/2 -translate-x-1/2 bg-white px-10 py-8"
                    @close="closeAddForm"
                />
            </modal>
            <modal v-if="showEditForm">
                <edit-product
                    :id="editProduct"
                    class="absolute w-4/5 top-10 left-1/2 -translate-x-1/2 bg-white px-10 py-8"
                    @close="
                        showEditForm = false;
                        editProduct = '';
                    "
                />
            </modal>
        </div>
    </div>
</template>

<script>
import EditProduct from "../../components/forms/EditProduct.vue";
export default {
    components: { EditProduct },
    name: "Products",
    data() {
        const products = this.$store.getters["products/getProducts"];

        return {
            dayRange: [],
            searchValue: "",
            selectType: "",
            products,
            showAddForm: false,
            showEditForm: false,
            editProduct: "",
        };
    },

    computed: {
        computedUserData() {
            let urs = this.products;

            if (this.selectType.trim() !== "") {
                urs = urs.filter((u) => {
                    return u[this.selectType].includes(this.searchValue);
                });
            }

            return urs;
        },
    },

    methods: {
        onSelectChange(val) {
            this.selectType = val;
        },
        onInputChange(val) {
            this.searchValue = val;
        },
        onDayRangeSelect(val) {
            if (!val) {
                this.dayRange = [];
            } else this.dayRange = val;
        },
        openAddForm() {
            this.showAddForm = true;
        },
        closeAddForm() {
            this.showAddForm = false;
        },

        deleteUser(rowData) {
            const userId = rowData.id;
            this.$store.dispatch("users/deleteUser", userId);
        },
        editProductData(data) {
            const userId = data.id;
            this.editProduct = userId;
            this.showEditForm = true;
        },
        clickHandler(img) {
            console.log(img);
        },
    },
};
</script>
