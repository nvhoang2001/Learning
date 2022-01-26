<template>
    <form @submit.prevent="submitForm">
        <div>
            <div
                class="group bg-[#15e202] text-white text-2xl font-semibold h-16 w-16 inline-flex justify-center items-center rounded-xl shadow-lg absolute top-0 -translate-y-1/2 hover:cursor-pointer"
                @click="uploadIllus"
            >
                <i
                    class="el-icon-camera group-hover:text-4xl transition-all duration-500 ease-linear"
                    v-if="illustration === ''"
                ></i>
                <img
                    v-else
                    :src="illustration"
                    alt=""
                    class="h-full w-full object-fill object-center"
                />

                <input
                    type="file"
                    ref="illus"
                    class="hidden"
                    value="illustration"
                    @change="fileUploadChangeHandler"
                />
            </div>
            <h3 class="text-xl pl-20">Edit Profile - Complete your profile</h3>
        </div>
        <div class="flex flex-wrap justify-between">
            <line-input
                v-for="(input, key) in profileForm"
                :key="key"
                :index="key"
                v-bind="input"
                v-model="input.value"
                @reset-error-state="resetErrorState"
            />
        </div>
        <div class="flex justify-end">
            <el-button
                type="info"
                style="margin-right: 1rem"
                @click="previewProfile"
            >
                Preview My Profile
            </el-button>
            <el-button type="success" native-type="submit">
                Update Profile
            </el-button>
        </div>
    </form>
</template>

<script>
import { validEmail } from "~/utils/form.js";
import axios from "axios";

const FORM_SUBMIT_URL = "https://jsonplaceholder.typicode.com/posts";

export default {
    emits: ["preview"],

    data() {
        return {
            illustration: "",
            profileForm: {
                username: {
                    value: "",
                    width: "40%",
                    label: "Username",
                    name: "username",
                    errorMgs: "Username must not be empty!",
                    errorState: false,
                    validator(value) {
                        const isValid = !!value.trim();

                        return isValid;
                    },
                },
                email: {
                    value: "",
                    nativeType: "email",
                    width: "55%",
                    label: "Email Address",
                    name: "email",
                    errorMgs: "Please enter a valid email!",
                    errorState: false,
                    validator(email) {
                        let valRes = false;
                        validEmail(null, email, (err) => {
                            if (!err) {
                                valRes = true;
                            } else valRes = false;
                        });

                        return valRes;
                    },
                },
                firstname: {
                    value: "",
                    width: "45%",
                    label: "First Name",
                    name: "firstname",
                    errorMgs: "First name must not be empty!",
                    errorState: false,
                    validator(value) {
                        const isValid = !!value.trim();
                        return isValid;
                    },
                },
                lastname: {
                    value: "",
                    width: "45%",
                    label: "Last Name",
                    name: "lastname",
                    errorMgs: "Last name must not be empty!",
                    errorState: false,
                    validator(value) {
                        const isValid = !!value.trim();

                        return isValid;
                    },
                },
                address: {
                    value: "",
                    width: "100%",
                    label: "Address",
                    name: "address",
                },
                city: { value: "", width: "32%", label: "City", name: "city" },
                country: {
                    value: "",
                    width: "32%",
                    label: "Country",
                    name: "country",
                },
                zipCode: {
                    value: "",
                    width: "32%",
                    label: "Postal Code",
                    name: "zipCode",
                },
                about: {
                    value: "",
                    type: "textarea",
                    inputClass: "resize-none",
                    width: "100%",
                    label: "About Me",
                    name: "about",
                    minimumRow: 3,
                    errorMgs: "User description must not be empty!",
                    errorState: false,
                    validator(value) {
                        const isValid = !!value.trim();
                        return isValid;
                    },
                },
            },
        };
    },

    methods: {
        submitForm() {
            let formIsValid = true;
            for (const key in this.profileForm) {
                if (typeof this.profileForm[key].validator === "function") {
                    if (
                        !this.profileForm[key].validator(
                            this.profileForm[key].value
                        )
                    ) {
                        this.profileForm[key].errorState = true;
                        formIsValid = false;
                    }
                }
            }

            if (formIsValid) {
                const form = {};
                for (const key in this.profileForm) {
                    form[key] = this.profileForm[key].value;
                }
                axios
                    .post(FORM_SUBMIT_URL, {
                        ...form,
                        illustration: this.illustration,
                    })
                    .then((res) => {
                        console.log(res);
                        this.$notify({
                            title: "Success",
                            message: "Success submitting",
                            type: "success",
                        });
                        this.illustration = "";
                        for (const key in this.profileForm) {
                            this.profileForm[key].value = "";
                        }
                    })
                    .catch((err) => {
                        this.$notify({
                            title: "Error occurs",
                            message: "Something goes wrong! Try again later!",
                            type: "error",
                        });
                    });
            }
        },
        uploadIllus() {
            this.$refs.illus.click();
        },
        fileUploadChangeHandler(e) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.addEventListener("loadend", () => {
                this.illustration = reader.result;
            });
        },
        previewProfile() {
            for (const key in this.profileForm) {
                if (typeof this.profileForm[key].validator === "function") {
                    if (
                        !this.profileForm[key].validator(
                            this.profileForm[key].value
                        )
                    ) {
                        this.profileForm[key].errorState = true;
                        return;
                    }
                }
            }

            this.$emit("preview", this.illustration, this.profileForm);
        },

        resetErrorState(key, state) {
            this.profileForm[key].errorState = state;
        },
    },
};
</script>
