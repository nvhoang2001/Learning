<template>
    <div class="inline-block">
        <el-date-picker
            v-model="value"
            type="daterange"
            range-separator="-"
            :start-placeholder="firstPlaceholder"
            :end-placeholder="secondPlaceholder"
        >
        </el-date-picker>
    </div>
</template>

<script>
export default {
    props: {
        firstPlaceholder: { type: String, default: "Start day" },
        secondPlaceholder: { type: String, default: "End day" }
    },

    data() {
        return {
            value: "",
            pickerOptions: {
                shortcuts: [
                    {
                        text: "Today",
                        onClick(picker) {
                            picker.$emit("pick", new Date());
                        }
                    },
                    {
                        text: "Yesterday",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit("pick", date);
                        }
                    },
                    {
                        text: "A week ago",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit("pick", date);
                        }
                    }
                ]
            }
        };
    },
    watch: {
        value(range) {
            console.log(range);
        }
    }
};
</script>
