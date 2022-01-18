<template>
    <edit-user
        @close="$emit('close')"
        title="ADD EMPLOYEE TO YOUR GROUP"
        :id="id"
        isCreate
    />
</template>

<script>
import randomStringGenerate from "~/utils/randomStringGenerate";
import EditUser from "~/components/forms/EditUser";

export default {
    emits: ["close"],
    components: { EditUser },

    data() {
        let id = randomStringGenerate(10);

        while (!this.$store.dispatch("users/checkID", id)) {
            id = randomStringGenerate(10);
        }

        return {
            id,
        };
    },
};
</script>
