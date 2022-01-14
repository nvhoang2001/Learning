<template>
    <el-row :gutter="20">
        <el-col :span="15" class="my-3" style="padding: 0" :offset="4">
            <mix-search
                select-placeholder="Search by"
                input-placeholder="Search..."
            />
        </el-col>
        <el-col :span="4" :offset="1">
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
                <span>
                    Admin
                </span>
            </div>
        </el-col>
    </el-row>
</template>
