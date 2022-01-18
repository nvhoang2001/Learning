<template>
    <el-form
        :model="addForm"
        status-icon
        ref="addForm"
        label-width="120px"
        @submit.native.prevent="submitForm()"
    >
        <h2 class="text-xl font-semibold">{{ title }}</h2>

        <el-form-item label="User's id">
            <p>{{ addForm.id }}</p>
        </el-form-item>
        <el-form-item label="Date">
            <el-date-picker
                v-model="addForm.date"
                type="date"
                placeholder="Pick a day"
                autocomplete="off"
                name="date"
            >
            </el-date-picker>
        </el-form-item>
        <el-form-item class="col-divide" label="Name">
            <div class="flex justify-between">
                <div class="w-[45%]">
                    <el-input
                        type="text"
                        v-model="addForm.name"
                        name="name"
                        autocomplete="off"
                        clearable
                    ></el-input>
                </div>
                <div class="flex w-[45%]">
                    <label class="el-form-item__label">State</label>
                    <el-input
                        type="text"
                        v-model="addForm.state"
                        name="state"
                        autocomplete="off"
                        clearable
                    ></el-input>
                </div>
            </div>
        </el-form-item>
        <el-form-item class="col-divide" label="City">
            <div class="flex justify-between">
                <div class="w-[45%]">
                    <el-input
                        type="text"
                        v-model="addForm.city"
                        autocomplete="off"
                        name="city"
                        clearable
                    ></el-input>
                </div>
                <div class="flex justify-between w-[45%]">
                    <label class="el-form-item__label">Zip Code</label>
                    <el-input
                        type="text"
                        v-model="addForm.zip"
                        autocomplete="off"
                        name="zip"
                        style="width: 80%"
                        clearable
                    ></el-input>
                </div>
            </div>
        </el-form-item>
        <el-form-item label="Address">
            <el-input
                type="text"
                v-model="addForm.address"
                name="address"
                autocomplete="off"
                clearable
            ></el-input>
        </el-form-item>
        <el-form-item>
            <div class="flex justify-between">
                <div>
                    <el-button type="primary" native-type="submit">
                        Submit
                    </el-button>
                    <el-button type="text" @click="resetForm">
                        Reset
                    </el-button>
                </div>
                <div>
                    <el-button @click="closeForm"> Cancel </el-button>
                </div>
            </div>
        </el-form-item>
        <el-dialog
            title="Do you really want to close?"
            :visible="showDialog"
            width="30%"
            :modal="false"
        >
            <span slot="footer" class="dialog-footer">
                <el-button @click="showDialog = false"> Cancel </el-button>
                <el-button
                    type="primary"
                    @click="
                        showDialog = false;
                        $emit('close');
                    "
                >
                    Confirm
                </el-button>
            </span>
        </el-dialog>
    </el-form>
</template>

<script>
import _reverse from "lodash/reverse";

export default {
    emits: ["close"],

    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: "EDIT USER'S DATA",
        },
        isCreate: {
            type: Boolean,
            default: false,
        },
    },


    data() {
        const date = Date.now();
        const userData = this.isCreate
            ? {
                  id: this.id,
                  date,
                  name: "",
                  state: "",
                  city: "",
                  zip: "",
                  address: "",
              }
            : {
                  ...this.$store.getters["users/getAUser"](this.id),
              };
        return {
            addForm: {
                ...userData,
                date: new Date(userData.date),
            },
            showDialog: false,
            touched: false,
        };
    },
    watch: {
        addForm: {
            handler: function () {
                if (this.touched) {
                    return;
                }

                this.touched = true;
            },

            deep: true,
        },
    },

    methods: {
        submitForm() {
            const userData = {
                ...this.addForm,
                date: _reverse(
                    this.addForm.date.toLocaleDateString().split("/")
                ).join("-"),
            };
            const action = this.isCreate ? "users/addUser" : "users/updateUser";

            this.$store.dispatch(action, userData);
            this.$emit("close");
        },
        resetForm() {
            this.addForm.date = "";
            this.addForm.name = "";
            this.addForm.state = "";
            this.addForm.city = "";
            this.addForm.zip = "";
            this.addForm.address = "";
        },
        closeForm() {
            if (this.touched) {
                this.showDialog = true;
            } else this.$emit("close");
        },
    },
};
</script>
