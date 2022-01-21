<template>
    <el-form
        :model="editForm"
        status-icon
        ref="editForm"
        label-width="120px"
        :rules="rules"
        @submit.native.prevent="submitForm('editForm')"
    >
        <h2 class="text-xl font-semibold">{{ title }}</h2>

        <el-form-item label="User's id">
            <p>{{ editForm.id }}</p>
        </el-form-item>
        <el-form-item class="col-divide" label="Name">
            <div class="flex justify-between">
                <div class="w-[45%]">
                    <el-input
                        type="text"
                        v-model="editForm.name"
                        name="name"
                        autocomplete="off"
                        clearable
                    ></el-input>
                </div>
                <div class="flex w-[45%]">
                    <label class="el-form-item__label">Brand</label>
                    <el-input
                        type="text"
                        v-model="editForm.brand"
                        name="state"
                        autocomplete="off"
                        clearable
                    ></el-input>
                </div>
            </div>
        </el-form-item>
        <el-form-item class="col-divide" label="Type">
            <div class="flex justify-between">
                <div class="w-[45%]">
                    <el-input
                        type="text"
                        v-model="editForm.type"
                        autocomplete="off"
                        name="type"
                        clearable
                    ></el-input>
                </div>
                <div class="flex justify-between w-[45%]">
                    <label class="el-form-item__label">Category</label>
                    <el-input
                        type="text"
                        v-model="editForm.category"
                        autocomplete="off"
                        name="category"
                        style="width: 80%"
                        clearable
                    ></el-input>
                </div>
            </div>
        </el-form-item>
        <el-form-item label="Image">
            <template>
                <p>
                    <span>Upload image?</span>
                    <label class="inline-block cursor-pointer" for="toggle">
                        <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            hidden
                            class="image-option"
                            @change="toggleImageUploadMode"
                            :checked="uploadImage"
                        />
                        <div
                            class="w-[30px] h-[10px] border border-[#ccc] rounded-full p-[1px]"
                        >
                            <div
                                class="w-[6px] h-[6px] bg-[#ccc] rounded-full transition-all duration-500"
                            ></div>
                        </div>
                    </label>
                </p>

                <div class="flex justify-between">
                    <div v-if="!uploadImage" class="w-4/6">
                        <el-input
                            type="text"
                            v-model="editForm.image"
                            name="image"
                            autocomplete="off"
                            clearable
                        ></el-input>
                    </div>

                    <div class="text-base" v-else>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            @change="uploadImageHandler"
                        />
                    </div>
                    <div
                        class="preview-image w-[150px] h-[150px] border divide-solid border-gray-600"
                    >
                        <img
                            :src="
                                (uploadImage ? image : editForm.image) ||
                                'https://www.namepros.com/attachments/empty-png.89209/'
                            "
                            alt=""
                            class="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </template>
        </el-form-item>
        <el-form-item label="Description" prop="desc" label-position="top">
            <!-- This won'r re-render when you change once of its elements with '=' -->
            <div ref="descRow">
                <el-form-item
                    v-for="(value, index) in editForm.description"
                    :key="index"
                >
                    <el-row :gutter="20" class="my-5 flex items-start">
                        <el-col :span="6">
                            <el-form-item
                                :prop="`description[${index}][0]`"
                                :rules="{
                                    required: true,
                                    message: 'Description name is required',
                                    trigger: 'blur',
                                }"
                            >
                                <el-input
                                    type="text"
                                    v-model="value[0]"
                                    clearable
                                >
                                    <!-- :value="value[0]" -->
                                    <!-- @input="editDescription(index, 0, $event)" -->
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="15">
                            <el-form-item
                                :prop="`description[${index}][1]`"
                                :rules="{
                                    required: true,
                                    message: 'Description is required',
                                    trigger: 'blur',
                                }"
                            >
                                <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 2 }"
                                    v-model="value[1]"
                                    resize="none"
                                    clearable
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <el-button
                                type="danger"
                                size="mini"
                                style="display: block; margin-left: auto"
                                @click="removeDescription(index)"
                                >Remove</el-button
                            >
                        </el-col>
                    </el-row>
                </el-form-item>
            </div>
            <el-row>
                <el-col :span="24" class="flex justify-end">
                    <el-button size="mini" @click="addDescription"
                        >Add
                    </el-button>
                </el-col>
            </el-row>
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
            :visible.sync="showDialog"
            width="30%"
            :modal="false"
            append-to-body
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
import _deepClone from "lodash/cloneDeep";

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
        const productData = this.isCreate
            ? {
                  id: this.id,
                  brand: "",
                  name: "",
                  type: "",
                  category: "",
                  description: {},
                  image: "",
                  author: "admin",
              }
            : _deepClone(this.$store.getters["products/getAProduct"](this.id));
        const description = Object.entries(productData.description);

        return {
            editForm: { ...productData, description },
            showDialog: false,
            touched: false,
            uploadImage: false,
            image: null,
            rules: {},
        };
    },
    watch: {
        editForm: {
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
        uploadImageHandler(e) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                this.image = reader.result;
                this.editForm.image = this.image;
            });
            reader.readAsDataURL(file);
            // this.image = URL.createObjectURL(file);
        },

        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    return false;
                } else {
                    const description = Object.fromEntries(
                        this.editForm.description
                    );

                    const productData = {
                        ...this.editForm,
                        description,
                    };
                    const action = this.isCreate
                        ? "products/addProduct"
                        : "products/updateProduct";

                    this.$store.dispatch(action, productData);
                    this.$emit("close");
                }
            });
        },
        resetForm() {
            this.editForm.brand = "";
            this.editForm.name = "";
            this.editForm.type = "";
            this.editForm.category = "";
            this.editForm.description = {};
            this.editForm.image = "";
            this.editForm.author = "";
            this.image = "";
        },
        toggleImageUploadMode() {
            if (!this.uploadImage) {
                this.image = "";
            }
            this.uploadImage = !this.uploadImage;
        },
        closeForm() {
            if (this.touched) {
                this.showDialog = true;
            } else this.$emit("close");
        },
        addDescription() {
            this.editForm.description.push(["", ""]);
            this.$nextTick(() => {
                this.$refs.descRow.lastChild
                    .querySelector(".el-input__inner")
                    .focus();
            });
        },
        // editDescription(index, key, value) {
        //     const newDes = [...this.editForm.description[index]];
        //     newDes[key] = value;

        //     this.editForm.description.splice(index, 1, newDes);
        // },
        removeDescription(index) {
            this.editForm.description.splice(index, 1);
        },
    },
};
</script>

<style scoped>
.image-option:checked + div {
    background-color: #6a5af9;
}
.image-option:checked + div > div {
    transform: translateX(20px);
    background-color: white;
}
</style>
