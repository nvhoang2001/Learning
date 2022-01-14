<template>
    <div>
        <el-input
            :placeholder="inputPlaceholder"
            v-model="search"
            class="input-with-select"
        >
            <el-select
                v-model="select"
                slot="prepend"
                :placeholder="selectPlaceholder"
            >
                <el-option label="User's id" value="id"></el-option>
                <el-option label="User's name" value="name"></el-option>
                <el-option label="Tel" value="tel"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>

<script>
export default {
    props: {
        inputPlaceholder: {
            type: String,
            default: "Please input"
        },
        selectPlaceholder: {
            type: String,
            default: "Select"
        }
    },
    data() {
        return {
            search: "",
            select: ""
        };
    }
};
</script>

<style lang="scss">
.el-input-group__prepend {
    width: 10rem;
}
</style>
