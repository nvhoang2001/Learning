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
                <el-option label="User's id" value="id"></el-option>
                <el-option label="User's name" value="name"></el-option>
                <el-option label="State" value="state"></el-option>
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
