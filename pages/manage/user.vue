<template>
    <div class="py-5 px-10 overflow-y-auto">
        <h1 class="text-4xl font-bold text-center">EMPLOYEE MANAGEMENT</h1>
        <el-divider />
        <div class="flex gap-y-5 flex-wrap justify-between mb-5">
            <h4 class="w-full font-semibold text-lg">Search by</h4>
            <date-picker
                v-model="dayRange"
                class="w-[35%]"
                @select-date="onDayRangeSelect"
            />
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
                <el-table-column prop="id" label="Employee'id" width="120">
                </el-table-column>
                <el-table-column prop="date" label="Date" width="120">
                </el-table-column>
                <el-table-column prop="name" label="Name" width="100">
                </el-table-column>
                <el-table-column prop="state" label="State" width="100">
                </el-table-column>
                <el-table-column prop="city" label="City" width="100">
                </el-table-column>
                <el-table-column prop="address" label="Address" width="300">
                </el-table-column>
                <el-table-column prop="zip" label="Zip" width="120">
                </el-table-column>
                <el-table-column label="Operations" width="150">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            size="mini"
                            @click="editUserData(scope.row)"
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
                    class="absolute w-4/5 top-40 left-1/2 -translate-x-1/2 bg-white px-10 py-8"
                    @close="closeAddForm"
                />
            </modal>
            <modal v-if="showEditForm">
                <edit-user
                    :id="editUser"
                    class="absolute w-4/5 top-40 left-1/2 -translate-x-1/2 bg-white px-10 py-8"
                    @close="
                        showEditForm = false;
                        editUser = '';
                    "
                />
            </modal>
        </div>
    </div>
</template>

<script>
import DatePicker from "~/components/search/DatePicker.vue";
import AddUser from "~/components/forms/AddUser.vue";
import EditUser from "~/components/forms/EditUser.vue";

export default {
    name: "Users",

    components: {
        DatePicker,
        AddUser,
        EditUser,
    },

    data() {
        return {
            dayRange: [],
            searchValue: "",
            selectType: "",
            userData: this.$store.getters["users/getUsersData"],
            showAddForm: false,
            showEditForm: false,
            editUser: "",
        };
    },

    computed: {
        computedUserData() {
            let urs = this.userData;

            if (this.selectType.trim() !== "") {
                urs = urs.filter((u) => {
                    return u[this.selectType].includes(this.searchValue);
                });
            }

            if (this.dayRange.length === 2) {
                const [startDay, endDay] = this.dayRange;
                urs = urs.filter((u) => {
                    const time = new Date(u.date);
                    time.setHours(0);
                    return (
                        time.getTime() >= startDay.getTime() &&
                        time.getTime() <= endDay.getTime()
                    );
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
        editUserData(data) {
            const userId = data.id;
            this.editUser = userId;
            this.showEditForm = true;
        },
    },
};
</script>
