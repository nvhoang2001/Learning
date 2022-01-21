<template>
    <edit-product
        :isCreate="true"
        :id="id"
        title="ADD PRODUCT"
        @close="$emit('close')"
    />
</template>

<script>
import randomStringGenerate from "~/utils/randomStringGenerate";
import EditProduct from "./EditProduct.vue";
export default {
    emits: ["close"],
    components: { EditProduct },
    data() {
        let id = randomStringGenerate(10);

        while (!this.$store.dispatch("products/checkID", id)) {
            id = randomStringGenerate(10);
        }

        return {
            id,
        };
    },
};
</script>
