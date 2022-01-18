<template>
    <div class="w-screen h-screen bg-[#0007] fixed inset-0" @click="closeModal">
        <slot></slot>
    </div>
</template>

<script>
export default {
    emits: ["close"],
    methods: {
        closeModal() {
            this.$emit("close");
        },
    },
};
</script>
