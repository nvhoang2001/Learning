<template>
    <el-row :gutter="20">
        <el-col :span="4" :offset="20">
            <div class="text-right py-5 pr-8 text-white">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <i
                            class="el-icon-setting block text-white"
                            style="margin-right: 15px"
                        ></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>View</el-dropdown-item>
                        <el-dropdown-item>Add</el-dropdown-item>
                        <el-dropdown-item>Delete</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span> Admin </span>
            </div>
        </el-col>
    </el-row>
</template>
