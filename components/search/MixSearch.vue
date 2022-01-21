<template>
    <div>
        <el-input
            :placeholder="inputPlaceholder"
            v-model="search"
            class="input-with-select"
            @input="onInputChange"
            clearable
        >
            <el-select
                v-model="select"
                slot="prepend"
                :placeholder="selectPlaceholder"
                @change="onSelectChange"
            >
                <el-option
                    v-for="(value, label) in labels"
                    :key="label"
                    :label="label"
                    :value="value"
                ></el-option>
            </el-select>
        </el-input>
    </div>
</template>

<script>
export default {
    props: {
        inputPlaceholder: {
            type: String,
            default: "Please input",
        },
        selectPlaceholder: {
            type: String,
            default: "Select",
        },
        labels: {
            type: Object,
            required: true,
        },
    },
    emits: ["select-change", "input-change"],
    data() {
        return {
            search: "",
            select: "",
        };
    },

    methods: {
        onSelectChange(val) {
            this.$emit("select-change", val);
        },
        onInputChange(val) {
            this.$emit("input-change", val);
        },
    },
};
</script>

<style lang="scss">
.el-input-group__prepend {
    width: 10rem;
}
</style>
